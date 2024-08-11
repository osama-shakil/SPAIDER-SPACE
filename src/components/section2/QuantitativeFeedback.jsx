import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { responseTable } from "@/assets/Data";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const QuantitativeFeedback = () => {
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  const [data, setData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const [sortConfig, setSortConfig] = useState({
    key: "invoice",
    direction: "ascending",
  });

  const handleFilter = (status) => {
    if (status === "All") {
      setFilteredInvoices(invoices);
    } else {
      const filtered = invoices.filter(
        (invoice) => invoice.paymentStatus === status
      );
      setFilteredInvoices(filtered);
    }
    setActiveFilter(status);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  useEffect(() => {
    if (responseTable) {
      setData(responseTable);
    }
  }, [responseTable]);

  return (
    <div className="flex flex-col h-[80vh] overflow-y-scroll p-4 bg-github-secondary rounded shadow-md">
      <h2 className="mb-4">Quantitative Feedback</h2>
      {/* <div className="flex mb-4">
        <button
          onClick={() => handleFilter("All")}
          className={`mr-2 px-4 py-2 rounded-full text-sm shadow-md ${
            activeFilter === "All" ? "bg-github-linkcolor text-white" : "bg-zinc-700"
          }`}
        >
          All
        </button>


        <button
          onClick={() => handleFilter("Paid")}
          className={`mr-2 px-4 py-2 rounded-full text-sm shadow-md ${
            activeFilter === "Paid" ? "bg-github-linkcolor text-white" : "bg-zinc-700"
          }`}
        >
          Paid
        </button>
        <button
          onClick={() => handleFilter("Pending")}
          className={`mr-2 px-4 py-2 rounded-full text-sm shadow-md ${
            activeFilter === "Pending" ? "bg-github-linkcolor text-white" : "bg-zinc-700"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleFilter("Unpaid")}
          className={`px-4 py-2 rounded-full text-sm shadow-md ${
            activeFilter === "Unpaid" ? "bg-github-linkcolor text-white" : "bg-zinc-700"
          }`}
        >
          Unpaid
        </button>
      </div> */}
      <Table className="mt-4 bg-github-primary rounded-xl">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {data?.header?.map((item, index) => {
             return <TableHead
                key={index}
                className="w-[100px] cursor-pointer"
                onClick={() => handleSort(item)}
              >
                {item}
              </TableHead>;
            })}
            {/* <TableHead
              className="w-[100px] cursor-pointer"
              onClick={() => handleSort("invoice")}
            >
              Invoice
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("paymentStatus")}
            >
              Status
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("paymentMethod")}
            >
              Method
            </TableHead>
            <TableHead
              className="text-right cursor-pointer"
              onClick={() => handleSort("totalAmount")}
            >
              Amount
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.rows?.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{item["Name"]}</TableCell>
                <TableCell className="font-medium">
                  {item["Manufacturer"]}
                </TableCell>

                <TableCell className="font-medium">
                  {item["Cost (USD)"]}
                </TableCell>

                <TableCell className="font-medium">{item["TRL"]}</TableCell>

                <TableCell className="font-medium">
                  {item["Mass (kg)"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Max Torque (Nm)"]}
                </TableCell>

                <TableCell className="font-medium">
                  {item["Max Momentum (Nms)"]}
                </TableCell>

                <TableCell className="font-medium">
                  {item["Peak Power (W)"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Avg Power (W)"]}
                </TableCell>

                <TableCell className="font-medium">
                  {item["Length (mm)"]}
                </TableCell>

                <TableCell className="font-medium">
                  {item["Width (mm)"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Height (mm)"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Operating Temp (°C)"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Radiation Tolerance"]}
                </TableCell>
                <TableCell className="font-medium">
                  {item["Flight Heritage"]}
                </TableCell>
              </TableRow>
            );
          })}
          {/* {sortedInvoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
};

export default QuantitativeFeedback;
