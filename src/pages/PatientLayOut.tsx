import React from 'react'
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';

const PatientLayOut:React.FC = () => {
    const navigation:{ title: string, route: string }[] = [
        { title: "Dashboard Overview", route: "/patient/dashboard" },
        { title: "Appointments", route: "/patient/appointments" },
        { title: "Medical Records", route: "/patient/medical-records" },
        { title: "Billing", route: "/patient/billing" },
        { title: "Doctors", route: "/patient/doctors" },
        { title: "Settings", route: "/patient/settings" },
        { title: "Profile", route: "/patient/profile" },
      ];
    return (
    <div>
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-screen h-screen flex">
                <Menu navigation={navigation} parent='patient'/>    
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default PatientLayOut;
