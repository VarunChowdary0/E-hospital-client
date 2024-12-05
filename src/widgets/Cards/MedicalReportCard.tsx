import React from 'react'
import { useNavigate } from 'react-router-dom';

interface currentProps{
    report :  {
        title: string;
        date: string; 
        summary: string;
        downloadLink: string; 
        associatedDoctor: string; 
        findings: string[]; 
      }
}
const MedicalReportCard:React.FC<currentProps> = ({report}) => {
  const n = useNavigate();
  return (
    <div  className="p-4 bg-gray-800 pb-16 relative text-white rounded-lg
     hover:shadow-lg border shadow-md flex flex-col gap-2">
    <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
    <p  className=' text-sm'><strong>Date:</strong> {report.date}</p>
    <p  className=' text-sm'><strong>Summary:</strong> {report.summary}</p>
    <p  className=' text-sm'><strong>Doctor:</strong> {report.associatedDoctor}</p>
    <ul>
      {report.findings.map((finding, i) => (
        <li key={i}>-] {finding}</li>
      ))}
    </ul>
    <div
      className=" absolute bottom-4 hover:cursor-pointer 
      text-blue-500 underline mt-2 block"
      onClick={()=>n('/doctor/view/report'+report.downloadLink)}
      >
        View full Report
      </div>
    </div>
    )
}

export default MedicalReportCard