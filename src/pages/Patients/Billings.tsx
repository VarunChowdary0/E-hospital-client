import React from "react";

interface BillType {
  name: string;
  report: string;
  at: string;
  amount: number;
  status: "paid" | "unpaid";
  paymentMethod?: "online" | "bank";
  transactionId?: string;
}

const bills: BillType[] = [
  {
    name: "John Doe",
    report: "Blood Test",
    at: "2024-12-01T09:00:00Z",
    amount: 150,
    status: "unpaid",
  },
  {
    name: "John Doe",
    report: "MRI Scan",
    at: "2024-12-02T14:30:00Z",
    amount: 1200,
    status: "paid",
    paymentMethod: "online",
    transactionId: "TXN123456789",
  },
  {
    name: "John Doe",
    report: "Urine Test",
    at: "2024-12-03T11:15:00Z",
    amount: 100,
    status: "unpaid",
  },
  {
    name: "John Doe",
    report: "Checkup",
    at: "2024-12-04T08:45:00Z",
    amount: 200,
    status: "paid",
    paymentMethod: "bank",
    transactionId: "BANK123456789",
  },
  {
    name: "John Doe",
    report: "Radiology Report",
    at: "2024-12-05T16:00:00Z",
    amount: 900,
    status: "unpaid",
  },
];

const Billings: React.FC = () => {
  return (
    <main className="flex-1 bg-white p-6 max-w-screen overflow-x-hidden pb-[100px]">
      <div className="text-3xl font-bold mb-9">Billing Information</div>
      <div className="flex-1 flex-col gap-2 flex bg-black/0">
        <div
          className="p-4 hover:cursor-pointer mb-4 bg-gray-800 text-white
           flex border rounded-lg 
          shadow-md hover:shadow-lg transition max-sm:text-sm h-[55px] cursor-pointer"
        >
          {/* <div className="px-5 truncate max-sm:px-3 w-2/12">Patient Name</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div> */}
          <div className="px-5 truncate max-sm:px-3 w-3/12">Service</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
          <div className="px-5 truncate max-sm:px-3 w-3/12">Date</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
          <div className="px-5 truncate max-sm:px-3 w-2/12 max-sm:w-3/12">Amount</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
          <div className="px-5 truncate max-sm:px-3 w-5/12 max-sm:w-3/12">Status</div>
        </div>
        {bills.map((bill, idx) => (
           <div
           className="p-4 hover:cursor-pointer mb-4 bg-gray-100
            flex border rounded-lg font-normal
           shadow-md hover:shadow-lg transition max-sm:text-sm h-[55px] cursor-pointer"
         >
           {/* <div className="px-5 truncate max-sm:px-3 w-2/12">{bill.name}</div>
           <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div> */}
           <div className="px-5 truncate max-sm:px-3 w-3/12">{bill.report}</div>
           <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
           <div className="px-5 truncate max-sm:px-3 w-3/12"> {new Date(bill.at).toLocaleDateString()}</div>
           <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
           <div className="px-5 truncate max-sm:px-3 w-2/12 max-sm:w-3/12"> ₹ {bill.amount}</div>
           <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
           <div className="px-5 truncate max-sm:px-3 w-2/12">
            {bill.status === "paid" ? (
                    <div className="text-green-500">Paid</div>
                ) : (
                    <div className="text-red-500">Unpaid</div>
                )}
            </div>
            <div className="px-5 truncate text-end  
            max-sm:px-3 w-3/12 max-sm:hidden">
            {bill.status === "paid" && (
              <div className="w-3/12 flex justify-center pl-4 items-center text-gray-600">
                {bill.paymentMethod && (
                  <div className="text-sm mr-1">
                    <span className="font-bold">{bill.paymentMethod}</span>
                  </div>
                )}
                {bill.transactionId && (
                  <div className="text-xs w-full text-end">
                    Transaction ID:{' '}
                    <span className=" text-end font-bold">{bill.transactionId}</span>
                  </div>
                )}
              </div>
            )}
            </div>
         </div>
        ))}
        <div className="text-right font-bold text-lg mt-4">
          Total Amount Due: ₹
          {bills.reduce((total, bill) => total + (bill.status === "unpaid" ? bill.amount : 0), 0)}
        </div>
      </div>
    </main>
  );
};

export default Billings;
