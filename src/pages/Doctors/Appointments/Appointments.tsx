import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import OverviewCard from '../../../widgets/OverviewCard';
import ManageIcon from '../../../icons/Icons/ManageIcon';


const Appointments:React.FC = () => {
    const navigate = useNavigate();
    const data : {
        title: string,
        description : string,
        icon : string | JSX.Element,
        route : string
    }[] = [
        {
            title: "Upcoming Appointments",
            description: "Next appointment on Dec 5th with Dr. Smith",
            icon: "https://cdn-icons-png.flaticon.com/512/3634/3634820.png",
            route: "view",
          },
        { 
            title: "Manage Appointments",
            description : "Approve or Disapprove Appointments",
            icon : 
            <div className=' h-4 py-2 mb-7 scale-125 ml-7 '>
                <ManageIcon color='#21d1bd'/>
            </div> ,
            route: "manage"
        },
    ];
    const handleNavigation = (route: string) => {
        navigate(route);
    };
  
    return (
    <div className=' w-full py-7 px-7 max-sm:px-0'>
        <div className=' max-sm:pl-7 text-3xl font-bold'>Appointments</div>
        <div className=' mt-10 flex gap-6 max-sm:px-7 w-full h-fit'>
        {
            data.map((ele,idx)=>
                <OverviewCard 
                title={ele.title} 
                description={ele.description} 
                icon={ele.icon}               
                onClick={() => handleNavigation(ele.route)}/>
            )
        }
        </div>
        <div className=' w-full p-5 max-sm:p-0 rounded mt-10 '>
            <Outlet/>
        </div>
    </div>
  )
}

export default Appointments