import React from 'react';

interface currentProps {
    idx: number;
    pName: string;
    ReportType: string;
    datetime: string;
    seen: boolean;
    id : string;
    toggle : (idx:number)=>void;
}

const ReportRow: React.FC<currentProps> = (props) => {
    const formattedDate = new Date(props.datetime).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div
            className="p-4 max-sm:px-2 max-sm:h-[50px] hover:cursor-pointer flex border rounded-lg 
            shadow-md hover:shadow-lg transition h-[55px] cursor-pointer"
        >
            <div className="px-5 max-sm:px-2 text-sm truncate w-4/12">{props.pName}</div>
            <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
            <div className="px-5 max-sm:px-2 text-sm truncate w-3/12">{props.ReportType}</div>
            <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
            <div className="px-5 max-sm:px-2 text-sm truncate w-3/12">{formattedDate}</div>
            <div className="h-full w-[3px] max-sm:w-[1px] bg-black"></div>
            <div className="px-5 flex items-center justify-center max-sm:px-2 text-sm truncate w-1/5">
                {props.seen ? 
                    <div  onClick={()=>{
                        props.toggle(props.idx);
                    }}  className=' p-2 bg-white border-2 rounded-full'>
                        <div className=''>✅</div>
                    </div>
                : 
                    <div onClick={()=>{
                        props.toggle(props.idx);
                    }} className=' p-4 bg-white border-2 rounded-full'>
                        <div className=''></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ReportRow;
