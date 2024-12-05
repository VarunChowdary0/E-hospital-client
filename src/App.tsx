import React from 'react';


import { BrowserRouter as Router,
        Routes,Route
} from 'react-router-dom';
import LoginPage from './pages/Registers/LoginPage';
import DoctorLayout from './pages/Doctors/DoctorLayout';
import DoctorDashBoard from './pages/Doctors/DoctorDashBoard';
import PatientLayOut from './pages/Patients/PatientLayOut';
import PatientDashboard from './pages/Patients/PatientDashboard';
import PatientRegistration from './pages/Registers/PatientRegistration';
import AllDoctors from './components/AllDoctors';
import ManageAppointments from './pages/Doctors/Appointments/ManageAppointments';
import UpcomingAppointments from './pages/Doctors/Appointments/UpCommingAppointments';
import DoctorProfile from './pages/Doctors/DoctorProfile';
import HomePage from './pages/HomePage';
import RecentReports from './pages/Doctors/RecentReports';
import MyReports from './pages/Patients/MyReports';
import Appointments from './pages/Doctors/Appointments/Appointments';
import PendingBills from './pages/Patients/PendingBills';
import Billings from './pages/Patients/Billings';
import ManageDiagnisos from './pages/Doctors/Diagnosis/ManageDiagnisos';
import StartSessionLayOut from './pages/Doctors/Session/StartSessionLayOut';
import SessionPage from './pages/Doctors/Session/SessionPage';
import ViewPatientRecords from './pages/Doctors/Diagnosis/ViewPatientRecords';

const App:React.FC = () => {
return (
    <>
    <Router>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/patient/registration' element={<PatientRegistration/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/doctor/" element={<DoctorLayout />}>
            <Route path="dashboard" element={<DoctorDashBoard />} />
            <Route path="start-session/" element={<StartSessionLayOut/>}>
            <Route path=':id' element={<SessionPage/>}/>
            </Route>
            <Route path="doctors" element={<AllDoctors/>} />
            <Route path='appointments/' element={<Appointments/>}>
            <Route path="view" element={<UpcomingAppointments />} />
            <Route path="manage" element={<ManageAppointments/>} />
            </Route>
            <Route path="recent-medical-records" element={<RecentReports/>} />
            <Route path="diagnosis" element={<ManageDiagnisos/>} />
            <Route path="patient-records" element={<ViewPatientRecords/>} />
            <Route path="notification" element={<div>Notifications</div>} />
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
            <Route path="notification" element={<div>Notifications</div>} />
            <Route path="medical-records" element={<div>my  Medical Roecords</div>} />
            <Route path="my-medical-records" element={<MyReports/>} />
            <Route path="billing" element={<Billings/>} />
            <Route path="pending-billing" element={<PendingBills/>} />
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

