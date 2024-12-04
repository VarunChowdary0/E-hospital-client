import React, { useState } from 'react'
import ReportRow from '../widgets/ReportRow';

interface reportType {
    reportOf : string;
    reportType : string;
    preparedAt : string;
    seen  : boolean
}
const RecentReports:React.FC = () => {

  // take data not seen or less than 3 days ; 
  const [medical_reports, setRep] = useState<reportType[]>([
        { reportOf: "John Doe", reportType: "Blood Test", preparedAt: "2024-12-01T09:00:00Z", seen: true },
        { reportOf: "Jane Smith", reportType: "DNA Test", preparedAt: "2024-11-28T14:30:00Z", seen: false },
        { reportOf: "Emily Davis", reportType: "Checkup", preparedAt: "2024-10-20T11:15:00Z", seen: true },
        { reportOf: "Michael Brown", reportType: "Radiology Report", preparedAt: "2024-12-03T08:45:00Z", seen: false },
        { reportOf: "Emma Wilson", reportType: "Urine Test", preparedAt: "2024-12-02T16:00:00Z", seen: true },
        { reportOf: "James Taylor", reportType: "MRI Scan", preparedAt: "2024-11-25T10:30:00Z", seen: true },
        { reportOf: "Olivia Johnson", reportType: "Blood Test", preparedAt: "2024-11-20T08:00:00Z", seen: false },
        { reportOf: "William Lee", reportType: "CT Scan", preparedAt: "2024-12-01T14:00:00Z", seen: true },
        { reportOf: "Sophia Harris", reportType: "DNA Test", preparedAt: "2024-10-15T09:45:00Z", seen: false },
        { reportOf: "Alexander Martin", reportType: "Checkup", preparedAt: "2024-12-04T11:30:00Z", seen: true },
        { reportOf: "Isabella Clark", reportType: "Urine Test", preparedAt: "2024-11-18T12:00:00Z", seen: true },
        { reportOf: "Henry White", reportType: "Radiology Report", preparedAt: "2024-10-25T10:15:00Z", seen: false },
        { reportOf: "Mia Walker", reportType: "MRI Scan", preparedAt: "2024-12-03T16:45:00Z", seen: true },
        { reportOf: "Ethan Hall", reportType: "CT Scan", preparedAt: "2024-11-22T14:20:00Z", seen: false },
        { reportOf: "Charlotte Young", reportType: "Blood Test", preparedAt: "2024-12-04T08:30:00Z", seen: true },
        { reportOf: "Liam Adams", reportType: "DNA Test", preparedAt: "2024-11-10T11:00:00Z", seen: false },
        { reportOf: "Amelia Nelson", reportType: "Checkup", preparedAt: "2024-10-30T13:15:00Z", seen: true },
        { reportOf: "Noah Scott", reportType: "Radiology Report", preparedAt: "2024-12-01T15:45:00Z", seen: true },
        { reportOf: "Ava King", reportType: "MRI Scan", preparedAt: "2024-11-28T09:10:00Z", seen: false },
        { reportOf: "Lucas Carter", reportType: "Urine Test", preparedAt: "2024-12-02T12:30:00Z", seen: true }
    ]);
    const toggleMarked = (idx: number) => {
      setRep((prevReports) => {
        console.log("Previous Reports:", prevReports);
        return prevReports.map((report, index) =>
          index === idx
            ? { ...report, seen: !report.seen }
            : report
        );
      });
    };
    


  return (
    <main className="flex-1 bg-white p-6  max-w-screen overflow-x-hidden pb-[100px] ">
        <div className=' text-3xl font-bold mb-9'>Medical Reports</div>
        <div className=' flex-1 flex-col gap-2 flex bg-black/0'>
          <div 
            className="p-4 max-sm:px-2 text-white font-semibold hover:cursor-pointer flex border rounded-lg 
            shadow-md hover:shadow-lg transition h-[55px] cursor-pointer bg-gray-400">
            <div className=' px-5 truncate max-sm:px-1 text-center w-4/12'>Patient Name</div>
            <div className=' h-full w-[3px] bg-black'></div>
            <div className=' px-5 truncate max-sm:px-1 text-center w-3/12'>Report</div>
            <div className=' h-full w-[3px] bg-black'></div>
            <div className=' px-5 truncate max-sm:px-1 text-center w-3/12'>Issued At</div>
            <div className=' h-full w-[3px] bg-black'></div>
            <div className=' px-5 truncate max-sm:px-1 text-center w-1/5'>Seen</div>
          </div>
          {
            medical_reports.map((ele,idx)=>
              <ReportRow
                idx={idx}
                pName={ele.reportOf}
                ReportType={ele.reportType}
                datetime={ele.preparedAt}
                seen ={ele.seen }
                toggle={toggleMarked}
                id='icm9cas-23e423ed-r23isax'
              />
            )
          }
        </div>
    </main>
  )
}

export default RecentReports