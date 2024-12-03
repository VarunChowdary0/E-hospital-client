import React from 'react';


import { BrowserRouter as Router,
          Routes,Route
 } from 'react-router-dom';
import PatientRegistration from './pages/PatientRegistration';
import LoginPage from './pages/LoginPage';
import DashBoard from './pages/DashBoard';

const App:React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<div className=' text-3xl h-screen'>Home Page</div>}/>
          <Route path='/patient/registration' element={<PatientRegistration/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;

