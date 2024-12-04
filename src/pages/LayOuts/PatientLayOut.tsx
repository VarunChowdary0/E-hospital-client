import React from 'react'
import Menu from '../../components/Menu';
import { Outlet } from 'react-router-dom';

const PatientLayOut:React.FC = () => {
    const navigation:{ title: string, route: string }[] = [
        { title: "Dashboard Overview", route: "dashboard" },
        { title: "Appointments", route: "appointments" },
        { title: "Medical Records", route: "medical-records" },
        { title: "Billing", route: "billing" },
        { title: "Doctors", route: "doctors" },
        { title: "Settings", route: "settings" },
        { title: "Profile", route: "profile" },
      ];
    return (
    <div>
        <div className="select-none w-full h-full flex items-center justify-center">
            <div className="relative w-screen h-screen flex">
                <Menu navigation={navigation} parent='patient'/>    
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default PatientLayOut;
