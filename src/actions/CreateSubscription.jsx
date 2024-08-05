"use server";

import stripe from "@/config/stripe";

async function CreateStripeCheckoutSession(data) {
    const {
      userEmail,
      userId,
      priceId,
      packagePrice,
      packageName,
      CustomerId
    } = data;
  
    try {
      let stripeCustomerId=CustomerId
       if(!stripeCustomerId){
          stripeCustomerId = await handleStripeCustomer({
            userId,
            userEmail,
          });
       }
     

      const payload = buildCheckoutSessionPayload({
        stripeCustomerId,
        priceId,
        userId,
        packageName,
        packagePrice,
      });
   
      const checkoutSession = await stripe.checkout.sessions.create(payload);
      
      if (!checkoutSession.url) {
        throw new Error("Could not create checkout session");
      }
      
      return {
        StripeCustomerId: stripeCustomerId,
        session: {
          id: checkoutSession.id,
          url: checkoutSession.url,
         stripeCustomerId:stripeCustomerId
        },
      };
    } catch (error) {
      console.error("Checkout session creation failed:", error);
      throw new Error(
        "Failed to initiate payment process. Please try again later."
      );
    }
  }
// 
async function handleStripeCustomer({ userId, userEmail }) {
    if (!userId) {
      throw new Error("User ID is required");
    }
  
    // const existingUser = await getUserById(userId);
    // if (existingUser && existingUser.stripeCustomerId) {
    //   return existingUser.stripeCustomerId;
    // } else {
      const stripeCustomer = await stripe.customers.create({ email: userEmail });
    //   await updateStripeCustomerId(userEmail, stripeCustomer.id, authToken);
      return stripeCustomer.id;
    // }
  }
  
  function buildCheckoutSessionPayload({
    stripeCustomerId,
    priceId,
    userId,
    packageName,
    packagePrice,
  }) {
    let payload = {
      mode: "subscription",
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_URL}/main/my-account/billing`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/main/my-account/billing`,
      subscription_data: {
        metadata: {
          UserId: userId,
          PackageName: packageName,
          PackagePrice: packagePrice,
        },
      },
    };
    return payload;
  }

async function UpgradeSubscription(subscriptionId, newPlanId) {
  try {
    // Retrieve the existing subscription
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    // Update the subscription to change to the new plan with proration
    const updatedSubscription = await stripe.subscriptions.update(subscriptionId, {
      items: [{
        id: subscription.items.data[0].id,
        price: newPlanId,
      }],
      proration_behavior: 'create_prorations' // Handles proration automatically
    });

    // // Optionally, you can handle the invoice immediately
    // if (updatedSubscription.latest_invoice) {
    //   const invoice = await stripe.invoices.pay(updatedSubscription.latest_invoice);
    // }

    // Return or process the updated subscription object
    return updatedSubscription;
  } catch (error) {
    console.error('Failed to upgrade subscription:', error);
    throw error;
  }
}
async function CancelSubscription(subscriptionId, userId) {
  try {

    const subscription = await stripe.subscriptions.cancel(subscriptionId);

    return {
      id: subscription.id,
      status: subscription.status
    };
  } catch (error) {
      console.error('Failed to cancel subscription:', error);
      throw new Error('Subscription cancellation failed. Please try again.');
  }
}
async function getCustomerInvoices(customerId, lastInvoiceId) {
  if (!customerId) {
    return [];
  }
  const params = {
    customer: customerId,
    // status: "paid",
    limit: 4,
  };

  if (lastInvoiceId) {
    params.starting_after = lastInvoiceId;
  }

  try {
    const response = await stripe.invoices.list(params);
    // Convert the response to a plain object, especially if the original response contains methods or complex data structures.
    const invoices = response.data.map(invoice => ({
      id: invoice.id,
      amount: invoice.total,  
      previousBill: invoice.status_transitions.paid_at,
      tier:  invoice.subscription_details.metadata.PackageName,
      invoicePdf : invoice.invoice_pdf,
      createdAt: invoice.created
    }));
    
    return {
      object: response.object,
      data: invoices,
      has_more: response.has_more,
      url: response.url
    };
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
};


async function customPlan(Amount,Offer,UserId,Data) {
  console.log('Amount>>>>>>>: ', Amount);

  
  try {
   
const price = await stripe.prices.create({
  currency: "usd",
  unit_amount: Amount, 
  product_data: {
    name: "Bolt-Ons",
  },
  recurring: {},
});

const checkoutSession = await stripe.checkout.sessions.create({
  line_items: [
    {
      price: price.id,
      quantity: 1,
    },
  ],
  mode: "payment",
  success_url: `${process.env.NEXT_PUBLIC_URL}/main/my-account/billing?status=true`,
  cancel_url: `${process.env.NEXT_PUBLIC_URL}/main/my-account/billing?status=false`,
  metadata: {
    UserId: UserId,
    Data:JSON.stringify(Data) // Data
  }

 
});
if (!checkoutSession.url) {
  throw new Error("Could not create checkout session");
}

return {
  session: {
    id: checkoutSession.id,
    url: checkoutSession.url,
  },
};
} catch (error) {
  console.error("Failed to create Stripe checkout session:", error);
  
  return {
      error: {
        message:
          "Failed to initiate payment process. Please try again later.",
        details: error.message,
      },
    };
  }

}

export { CreateStripeCheckoutSession,getCustomerInvoices ,UpgradeSubscription,CancelSubscription,customPlan};
