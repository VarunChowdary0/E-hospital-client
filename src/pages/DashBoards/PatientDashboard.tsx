import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OverviewCard from "../../widgets/OverviewCard";
import OperationImageIcon from "../../icons/OperationImageIcon";
import NotificationIcon from "../../icons/Icons/NotificationIcon";

interface currentProps{
  navigation:{ title: string, route: string }[];
}
const PatientDashboard: React.FC<currentProps> = ({navigation}) => {
  const navigate = useNavigate();
  const patientName = "Drake"; // Replace with dynamic data as needed

  const [displayPopUp,setPopUp] = useState<boolean>(false); 
  const handleNavigation = (route: string) => {
    navigate(route);
  };


  // Sidebar Navigation Options


  // Overview cards data
  const overviewData = [
    {
      title: "Upcoming Appointments",
      description: "Next appointment on Dec 5th with Dr. Smith",
      icon: "https://cdn-icons-png.flaticon.com/512/3634/3634820.png",
      route: "/patient/appointments",
    },
    {
      title: "Recent Reports",
      description: "Blood Test results ready to view",
      icon: "https://cdn-icons-png.flaticon.com/512/2209/2209673.png",
      route: "/patient/medical-records",
    },
    {
      title: "Pending Bills",
      description: "$300 outstanding",
      icon: "https://cdn-icons-png.flaticon.com/512/1651/1651965.png",
      route: "/patient/billing",
    },
    {
      title: "Health Tips",
      description: "Drink plenty of water and stay active!",
      icon: "https://cdn-icons-png.flaticon.com/512/11210/11210018.png",
      route: "",
    },
  ];

  return (
    <div className="relative w-screen h-screen flex">
      {/* Sidebar */}

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-6 max-w-screen overflow-x-hidden pb-[100px] ">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {patientName}!</h1>
          <div className="flex items-center space-x-4 max-sm:hidden">
          <div onClick={()=>handleNavigation("/patient/notification")} className=' fill-gray-700 scale-150'>
            <NotificationIcon color='white' current={true}/>
          </div>
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
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNavigation("/profile")}
                >
                  View Profile
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNavigation("/edit-profile")}
                >
                  Edit Profile
                </li>
                <li
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNavigation("/logout")}
                >
                  Logout
                </li>
              </ul>}
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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
    </div>
  );
};

export default PatientDashboard;
