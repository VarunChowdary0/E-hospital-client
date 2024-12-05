import React from "react";

interface BillType {
  name: string;
  report: string;
  at: string;
  amount: number;
}

const bills: BillType[] = [
  { name: "John Doe", report: "Blood Test", at: "2024-12-01T09:00:00Z", amount: 150 },
  { name: "John Doe", report: "MRI Scan", at: "2024-12-02T14:30:00Z", amount: 1200 },
  { name: "John Doe", report: "Urine Test", at: "2024-12-03T11:15:00Z", amount: 100 },
  { name: "John Doe", report: "Checkup", at: "2024-12-04T08:45:00Z", amount: 200 },
  { name: "John Doe", report: "Radiology Report", at: "2024-12-05T16:00:00Z", amount: 900 },
];

const PendingBills: React.FC = () => {
  return (
    <main className="flex-1 bg-white p-6 max-w-screen overflow-x-hidden pb-[100px]">
      <div className="text-3xl font-bold mb-9">Pending Bills</div>
      <div className="flex-1 flex-col gap-2 flex bg-black/0">
        <div
          className="p-4 hover:cursor-pointer mb-4 bg-gray-800 text-white
           flex border rounded-lg 
          shadow-md hover:shadow-lg transition max-sm:text-sm h-[55px] cursor-pointer"
        >
          <div className="px-5 truncate max-sm:hidden max-sm:px-3 w-3/12">Patient Name</div>
          <div className="h-full w-[3px] max-sm:hidden max-sm:w-[1px] bg-black"></div>

          <div className="px-5 truncate max-sm:w-1/3  max-sm:px-3 w-3/12">Report</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
          <div className="px-5 truncate max-sm:w-1/3 max-sm:px-3 w-3/12">Issued At</div>
          <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
          <div className="px-5 truncate max-sm:w-1/3 max-sm:px-3 w-2/12">Due Amount</div>
        </div>
        {bills.map((bill, idx) => (
          <div
            key={idx}
            className="p-4 mb-4 bg-gray-100 text-gray-800 flex border rounded-lg shadow-md hover:shadow-lg transition max-sm:text-sm h-[55px]"
          >
            <div className="px-5 max-sm:hidden truncate  max-sm:px-3 w-3/12">{bill.name}</div>
            <div className="h-full max-sm:hidden w-[3px] max-sm:w-[1px] bg-gray-300"></div>

            <div className="px-5 truncate max-sm:w-1/3 max-sm:px-3 w-3/12">{bill.report}</div>
            <div className="h-full w-[3px]  max-sm:w-[1px] bg-gray-300"></div>
            <div className="px-5 truncate  max-sm:w-1/3 max-sm:px-3 w-3/12">
              {new Date(bill.at).toLocaleDateString()}
            </div>
            <div className="h-full w-[3px] max-sm:w-[1px] bg-gray-300"></div>
            <div className="px-5 truncate max-sm:w-1/3 max-sm:px-3 w-2/12"> ₹ {bill.amount}</div>
          </div>
        ))}
        <div className="text-right font-bold text-lg mt-4">
          Total Amount Due: ₹ 
          {bills.reduce((total, bill) => total + bill.amount, 0)}
        </div>
      </div>
    </main>
  );
};

export default PendingBills;
