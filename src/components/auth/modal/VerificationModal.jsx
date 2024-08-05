import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function VerificationModal({isOpen, toggle,onVerify,payload}) {
 
   const [verifyCode,setVerifyCode]=useState('')
   const [error,setError]=useState('')

 
      
  

  const verifyCodeAndSignIn = async (event) => {
    event.preventDefault();
    try {
      const email = window.localStorage.getItem('emailForSignIn');
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        if (!email) {
          // User opened the link on a different device. We need to ask for the email again.
        //   email = window.prompt('Please provide your email for confirmation');
        }
        const result = await firebase.auth().signInWithEmailLink(email, window.location.href);
        onVerify(result); // Pass the result back up to handle the user state
        toggle(); // Close the modal
        console.log('User verified and signed in:', result.user);
      }
    } catch (error) {
      setError({ message: error.message });
    }
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={toggle} // This will ensure the modal closes only when this prop changes
      className="max-w-full sm:m-0 m-2 "
    >
      <DialogContent className="w-full flex flex-col justify-center items-center p-10 max-h-full rounded-lg">

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-center text-2xl">We sent you a code</h1>
            <p className="text-center mt-3"> Enter it below to verify {payload.email}</p>
          </div>
     
           <form className="w-full flex flex-col gap-3 mt-5" onSubmit={sendVerification}>
        <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="verify">Verofication code</Label>
      <Input 
      type="text"
       id="verify" 
       placeholder="code" 
        required
         className="w-full py-6"
         value={verifyCode} onChange={(e)=>setVerifyCode(e.target.value)}
         />
    </div>
       {error && <p className="text-red-500 text-xs">{error.message}</p>}
          <Button
            type="submit"
            className=" py-6 mt-3 bg-secondary-dark hover:bg-secondary-yellow text-black font-semibold w-full"
            onClick={toggle}
          >
            Next 
          </Button>
        </form>
        <p className="font-semibold text-sm mt-3">Didn't get the email?<span className="text-blue-500 cursor-pointer hover:underline" onClick={toggle}> Resend it </span> or <span className="text-blue-500 cursor-pointer hover:underline"> Use a different email</span>  </p>
      </DialogContent>
    </Dialog>
  )
}
