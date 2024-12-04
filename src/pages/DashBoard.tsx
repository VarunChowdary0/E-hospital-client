import React from 'react';
import PatientDashboard from '../components/PatientDashboard';

const DashBoard: React.FC = () => {
  const userType = 'patient';
  const users_name = 'Drake';

  const PatientHeader = () => {
    return (
      <div className="absolute top-32 left-0 right-0 flex items-center justify-center">
        <div className="w-[50%] max-md:text-3xl max-sm:w-[80%] flex gap-2 text-5xl font-bold">
          <p>Welcome</p>
          <p>{users_name}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-screen h-screen min-h-screen bg-gray-100">
      {userType === 'patient' && (
        <>
          <PatientHeader />
          <div className="w-full h-full flex items-center justify-center">
            <PatientDashboard />
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoard;
