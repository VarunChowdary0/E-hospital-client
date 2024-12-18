import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import OperationImageIcon from '../../icons/OperationImageIcon';
import NotificationIcon from '../../icons/Icons/NotificationIcon';
import OverviewCard from '../../widgets/Cards/OverviewCard';

const DoctorDashBoard = () => {
    const navigate = useNavigate();
    const patientName = "Drake"; // Replace with dynamic data as needed
  
    const [displayPopUp,setPopUp] = useState<boolean>(false); 
    const handleNavigation = (route: string) => {
      navigate(route);
    };
  
    // Sidebar Navigation Options
    const navigation:{ title: string, route: string }[] = [
      { title: "Dashboard Overview", route: "/doctor/dashboard" },
      { title: "Appointments", route: "/doctor/appointments" },
      { title: "Other Doctors", route: "/doctor/doctors" },
      { title: "Settings", route: "/doctor/settings" },
    ];
  
    // Overview cards data
    const overviewData = [
      {
        title: "Upcoming Appointments",
        description: "Next appointment on Dec 5th with Mr.Vamshi",
        icon: "https://cdn-icons-png.flaticon.com/512/3634/3634820.png",
        route: "/doctor/appointments/view",
      },
      {
        title: "Recent Reports",
        description: " Full body checkup and other 10 reports ready to view",
        icon: "https://cdn-icons-png.flaticon.com/512/2209/2209673.png",
        route: "/doctor/recent-medical-records",
      },
      {
        title: "Manage Diagnosis",
        description: " Make notes on patients",
        icon: "https://cdn-icons-png.flaticon.com/512/4228/4228719.png",
        route: "/doctor/diagnosis",
      },
      {
        title: "My Patient Records",
        description: "View patient records and medical data",
        icon: "https://cdn-icons-png.flaticon.com/512/4228/4228719.png",
        route: "/doctor/patient-records",
      },

    ];
    const [nowAppointment, setNowAppointment] = useState<{
      isNow: boolean;
      data: {
        patientName: string;
        pid: string;
        reason: string;
        time: string;
        doctorName?: string; // Matches the CardComponent props
      };
    }>({
      isNow: true,
      data: {
        patientName: "Jake Paul",
        pid: "0233232-c3342ed23-23d32d23-d23d2",
        reason: "ADIS CheckUp",
        time: "10:30 AM",
        doctorName: "Dr. Smith",
      },
    });
  
    return (
    <main className="flex-1 bg-white p-6 max-w-screen overflow-x-hidden pb-[100px] ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, Dr.{patientName}!</h1>
        <div className="flex items-center space-x-4 max-sm:hidden">
          <Link to="/doctor/notification" className=' fill-gray-700 scale-150'>
            <NotificationIcon color='white' current={true}/>
          </Link>
          <OperationImageIcon 
            height={38}
            width={38}
          url="https://cdn-icons-png.flaticon.com/512/147/147142.png"/>
          <div className="relative select-none">
            <button onClick={()=>setPopUp((prev)=>!prev)} 
            className={`p-2 rounded-md border 
            ${displayPopUp?' bg-grey-400':''} transition-all active:bg-gray-400 bg-gray-50 hover:bg-gray-200`}>
              Profile
            </button>
          {displayPopUp && 
          <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
              
              <li  className="p-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/doctor/profile" >View Profile</Link>
              </li>
              <li  className="p-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/edit-profile"> Edit Profile</Link>
              </li>
              <li  className="p-2 hover:bg-gray-200 cursor-pointer">
                <Link to="/logout">Logout</Link>
              </li>
          </ul>
          }
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        { nowAppointment.isNow &&
          <OverviewCard
            key={0}
            title='Start Appointment'
            description={`
                ${nowAppointment.data.patientName} 
                for 
                ${nowAppointment.data.reason}
                at ${nowAppointment.data.time}
              `}
            icon={'https://cdn-icons-png.flaticon.com/512/16766/16766509.png'}
            onClick={()=>navigate('/doctor/start-session/'+nowAppointment.data.pid)}

          />
        }
        {overviewData.map((data, idx) => (
          <OverviewCard
            key={idx}
            title={data.title}
            description={data.description}
            icon={data.icon}
            onClick={() => handleNavigation(data.route)}
          />
        ))}
      </div>

      {/* Detailed Sections */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Your Account</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigation.map((nav, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
              onClick={() => handleNavigation(nav.route)}
            >
              <h3 className="text-lg font-medium">{nav.title}</h3>
              <p className="text-sm text-gray-600">
                Access your {nav.title.toLowerCase()} section.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
    );
  };

export default DoctorDashBoard;


