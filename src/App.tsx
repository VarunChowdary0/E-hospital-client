import React from 'react';


import { BrowserRouter as Router,
          Routes,Route
 } from 'react-router-dom';
import PatientRegistration from './pages/PatientRegistration';
import LoginPage from './pages/LoginPage';

const App:React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<div className=' text-3xl h-screen'>Home Page</div>}/>
          <Route path='/patient/registration' element={<PatientRegistration/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

