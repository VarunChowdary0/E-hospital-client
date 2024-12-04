import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';

const DoctorLayout: React.FC = () => {
    const navigation:{ title: string, route: string }[] = [
        { title: "Dashboard Overview", route: "/doctor/dashboard" },
        { title: "Appointments", route: "/doctor/appointments" },
        { title: "Other Doctors", route: "/doctor/doctors" },
        { title: "Profile", route: "/doctor/profile" },
      ];

      useEffect(()=>{
          console.log(window.location.pathname)
      },[])
  return (
    <div>
      <div className=" select-none w-full h-full flex items-center justify-center">
        <div className="relative w-screen h-screen flex">
          {/* Sidebar */}
          <Menu navigation={navigation} parent='doctor'/>    
          {/* Main Content Area */}
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;
