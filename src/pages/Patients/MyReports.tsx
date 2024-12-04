import React from 'react'

interface reportType{
    name : string;
    report : string;
    at : string;
}
const MyReports:React.FC = () => {
    const data:reportType[] = [
        {
            name: "John Doe",
            report: "Blood Test",
            at: "2024-12-01T09:00:00Z",
          },
          {
            name: "John Doe",
            report: "MRI Scan",
            at: "2024-12-02T14:30:00Z",
          },
          {
            name: "John Doe",
            report: "Urine Test",
            at: "2024-12-03T11:15:00Z",
          },
          {
            name: "John Doe",
            report: "Checkup",
            at: "2024-12-04T08:45:00Z",
          },
          {
            name: "John Doe",
            report: "Radiology Report",
            at: "2024-12-05T16:00:00Z",
          }
    ]
    return (
    <main className="flex-1 bg-white p-6  max-w-screen overflow-x-hidden pb-[100px] ">
        <div className=' text-3xl font-bold mb-9'>My medical reports</div>
        <div className=' flex-1 flex-col gap-2 flex bg-black/0'>
            {
                data.map((ele,idx)=>
                {
                    const formattedDate = new Date(ele.at).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    });
                    return (
                    <div 
                    className="p-4 max-sm:px-2 font-semibold hover:cursor-pointer flex border rounded-lg 
                        shadow-md hover:shadow-lg transition h-[55px] cursor-pointer">
                        <div className=' px-5 truncate max-sm:px-2 flex-1 max-sm:w-fit'>{ele.name}</div>
                        <div className=' h-full w-[3px] max-md:w-[2px] max-sm:w-[1px] bg-black'></div>
                        <div className=' px-5 truncate max-sm:px-2 w-3/12'>{ele.report}</div>
                        <div className=' h-full w-[3px] max-md:w-[2px] max-sm:w-[1px] bg-black'></div>
                        <div className=' px-5 flex gap-2 truncate max-sm:px-2 
                        items-center justify-start w-4/12 max-sm:w-fit'>
                        <p className=' max-md:hidden text-sm font-4 font-thin'>Generated at</p>
                        {formattedDate}</div>
                    </div>
                    );
                })
            }
        </div>
    </main>
  )
}

export default MyReports