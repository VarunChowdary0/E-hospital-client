import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import OverviewCard from '../../widgets/OverviewCard'

const Appointments = () => {
    const navigate = useNavigate();
    const data : {
        title: string,
        description : string,
        icon : string,
        route : string
    }[] = [];
    const handleNavigation = (route: string) => {
        navigate(route);
    };
  
    return (
    <div>
        {
            data.map((ele,idx)=>
                <OverviewCard 
                title={ele.title} 
                description={ele.description} 
                icon={ele.icon}               
                onClick={() => handleNavigation(ele.route)}/>
            )
        }
        <Outlet/>
    </div>
  )
}

export default Appointments