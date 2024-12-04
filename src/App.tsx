import React from 'react';


import { BrowserRouter as Router,
          Routes,Route
 } from 'react-router-dom';
import LoginPage from './pages/Registers/LoginPage';
import DoctorLayout from './pages/LayOuts/DoctorLayout';
import DoctorDashBoard from './pages/DashBoards/DoctorDashBoard';
import PatientLayOut from './pages/LayOuts/PatientLayOut';
import PatientDashboard from './pages/DashBoards/PatientDashboard';
import Appointments from './pages/Appointments/Appointments';
import PatientRegistration from './pages/Registers/PatientRegistration';
import AllDoctors from './components/AllDoctors';
import ManageAppointments from './pages/Appointments/ManageAppointments';
import UpcomingAppointments from './pages/Appointments/UpCommingAppointments';
import DoctorProfile from './pages/Profiles/DoctorProfile';

const App:React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<div className=' text-3xl h-screen'>Home Page</div>}/>
          <Route path='/patient/registration' element={<PatientRegistration/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/doctor/" element={<DoctorLayout />}>
            <Route path="dashboard" element={<DoctorDashBoard />} />
            <Route path="doctors" element={<AllDoctors/>} />
            <Route path='appointments/' element={<Appointments/>}>
              <Route path="view" element={<UpcomingAppointments />} />
              <Route path="manage" element={<ManageAppointments/>} />
            </Route>
            <Route path="medical-records" element={<div>Manage medical-records</div>} />
            <Route path="diagnosis" element={<div>Manage Diagnosis</div>} />
            <Route path="profile" element={<DoctorProfile/>} />
            <Route path="settings" element={<div>Create Settings</div>} />
          </Route>
          <Route path="/patient/" element={<PatientLayOut />}>
            <Route path="dashboard" element={<PatientDashboard 
              navigation={[
                      { title: "Dashboard Overview", route: "/patient/dashboard" },
                      { title: "Appointments", route: "/patient/appointments" },
                      { title: "Medical Records", route: "/patient/medical-records" },
                      { title: "Billing", route: "/patient/billing" },
                      { title: "Doctors", route: "/patient/doctors" },
                      { title: "Settings", route: "/patient/settings" },
                      { title: "Profile", route: "/patient/profile" },
                    ]} />} />
            <Route path="doctors" element={<AllDoctors/>} />
            <Route path="appointments" element={<div>Create Appointements</div>} />
            <Route path="medical-records" element={<div>Create medical-records</div>} />
            <Route path="billing" element={<div>Create billing</div>} />
            <Route path="doctors" element={<div>Create doctors</div>} />
            <Route path="settings" element={<div>Create Settings</div>} />
            <Route path="profile" element={<div>Profile</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

