import React from 'react'

interface currentProps{
    history : {
        date: string; 
      reason: string;
      doctor: string;
      notes: string;
      treatmentPlan : string;
    }
}
const MedicalHistoryCard:React.FC<currentProps> = ({history}) => {
  return (
        <div className="p-4 rounded-lg shadow-md hover:shadow-lg
         gap-2 border flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Date: {history.date}</h3>
            <p className=' text-sm'><strong className=' text-md'>Reason:</strong> {history.reason}</p>
            <p className=' text-sm'><strong className=' text-md'>Doctor:</strong> {history.doctor}</p>
            <p className=' text-sm'><strong className=' text-md'>Notes:</strong> {history.notes}</p>
            <p className=' text-sm'><strong className=' text-md'>Treatment Plan:</strong> {history.treatmentPlan}</p>
        </div>
    )
}

export default MedicalHistoryCard