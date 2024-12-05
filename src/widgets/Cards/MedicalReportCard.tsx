import React from 'react'

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
  return (
    <div  className="p-4 bg-gray-800 text-white rounded-lg
     hover:shadow-lg border shadow-md flex flex-col gap-2">
    <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
    <p  className=' text-sm'><strong>Date:</strong> {report.date}</p>
    <p  className=' text-sm'><strong>Summary:</strong> {report.summary}</p>
    <p  className=' text-sm'><strong>Doctor:</strong> {report.associatedDoctor}</p>
    <ul>
      {report.findings.map((finding, i) => (
        <li key={i}>- {finding}</li>
      ))}
    </ul>
    <a
      href={report.downloadLink}
      className="text-blue-500 underline mt-2 block"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Report
    </a>
  </div>
    )
}

export default MedicalReportCard