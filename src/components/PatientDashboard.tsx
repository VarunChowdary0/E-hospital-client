import React from 'react'
import OpernationButtonComp from '../widgets/OpernationButtonComp'
import OperationImageIcon from '../icons/OperationImageIcon'

const PatientDashboard:React.FC = () => {

  const operations:{
    title : string,
    icon : JSX.Element,
  }[] = [
    {
      title : "Book Appointment",
      icon : <OperationImageIcon height={30} width={30} url='https://cdn-icons-png.flaticon.com/512/3634/3634820.png'/>,
    },
    {
      title : "Medical History",
      icon : <OperationImageIcon height={30} width={30} url="https://cdn-icons-png.flaticon.com/512/11411/11411453.png"/>
    },
    {
      title : "My Reports",
      icon : <OperationImageIcon height={30} width={30} url="https://cdn-icons-png.flaticon.com/512/2209/2209673.png"/>
    },
    {
      title : "My Billing",
      icon : <OperationImageIcon height={30} width={30} url="https://cdn-icons-png.flaticon.com/512/1651/1651965.png"/>
    },
    {
      title : "Tests and Checkups",
      icon : <OperationImageIcon height={30} width={30} url="https://cdn-icons-png.flaticon.com/512/3127/3127109.png"/>
    },
    {
      title : "Medical Services",
      icon : <OperationImageIcon height={30} width={30} url="https://cdn-icons-png.flaticon.com/512/11210/11210018.png"/>
    },
  ]
  return (
    <div className=' center_ele bg-white h-fit max-sm:w-[87vw]
    shadow-p border min-h-[400px] rounded-xl px-10 max-sm:px-5 py-8 w-[60vw]'>        
        <div className=' flex gap-3 space-y-5 flex-wrap items-center justify-around'>
          {
            operations.map((ele,idx)=>
                <OpernationButtonComp
                      title={ele.title}
                      icon={ele.icon}
                />
            )
          }
        </div>
    </div>
  )
}

export default PatientDashboard