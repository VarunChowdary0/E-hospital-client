import React from 'react';


import { BrowserRouter as Router,
          Routes,Route
 } from 'react-router-dom';
import PatientRegistration from './pages/PatientRegistration';
import LoginPage from './pages/LoginPage';
import RecentAppointments from './components/RecentAppointments';
import DoctorLayout from './pages/DoctorLayout';
import DoctorDashBoard from './components/DoctorDashBoard';
import PatientLayOut from './pages/PatientLayOut';
import PatientDashboard from './components/PatientDashboard';
import Appointments from './pages/Appointments/Appointments';

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
            <Route path="doctors" element={<div>All Doctors</div>} />
            <Route path='appointments/' element={<Appointments/>}>
              <Route path="appointments/view" element={<RecentAppointments />} />
              <Route path="appointments/manage" element={<div>Manage Appointments</div>} />
            </Route>
            <Route path="medical-records" element={<div>Manage medical-records</div>} />
            <Route path="diagnosis" element={<div>Manage Diagnosis</div>} />
            <Route path="profile" element={<div>Profile</div>} />
            <Route path="settings" element={<div>Create Settings</div>} />
          </Route>
          <Route path="/patient/" element={<PatientLayOut />}>
            <Route path="dashboard" element={<PatientDashboard 
              navigation={[
                      { title: "Dashboard Overview", route: "patient/dashboard" },
                      { title: "Appointments", route: "patient/appointments" },
                      { title: "Medical Records", route: "patient/medical-records" },
                      { title: "Billing", route: "patient/billing" },
                      { title: "Doctors", route: "patient/doctors" },
                      { title: "Settings", route: "patient/settings" },
                      { title: "Profile", route: "patient/profile" },
                    ]} />} />
            <Route path="doctors" element={<div>All Doctors</div>} />
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

