import React from 'react'
import PatientDashboard from '../components/PatientDashboard'

const DashBoard:React.FC = () => {
  return (
    <div className=' w-screen h-screen min-h-screen'>
        <div className=' w-full h-full flex  items-center justify-center'>
            <PatientDashboard/>
        </div>
    </div>
  )
}

export default DashBoard