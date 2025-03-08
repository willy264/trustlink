import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import ClientHome from '../components/Client/homepage/ClientHomepage.jsx';
import Createjob from '../components/Client/createjob/Createjob.jsx';
import Postedjob from '../components/Client/createjob/PostedJob.jsx';
import ViewProposal from '../components/Client/createjob/ViewProposal.jsx';
import Dashboard from '../pages/Dashboard';
// import PrivateRoute from './PrivateRoutes';
import FreeLancerProfile from '../components/Freelancer/FreeLancerProfile.jsx';
import Onboarding from '../components/Freelancer/Onboarding';
import Invite from '../components/Client/createjob/Invite.jsx'
import FreeLancerHome from '../components/Freelancer/FreeLancerHome.jsx';
import Hire from '../components/Client/createjob/Hire.jsx';
import WorkSubmission from '../components/Client/createjob/WorkSubmission.jsx';

const AppRoutes = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const signedIn = localStorage.getItem('isSignedIn') === 'true';
    setIsSignedIn(signedIn);
  }, []);

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem('isSignedIn', 'true');
  };

  // const handleSignOut = () => {
  //   setIsSignedIn(false);
  //   localStorage.removeItem('isSignedIn');
  // };
 
  return (
    <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login isSignedIn={handleSignIn} />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Freelancer routes */}
          <Route path="/freelancer/home" element={<FreeLancerHome />} />
          <Route path="/freelancer/profile" element={<FreeLancerProfile />} />
          <Route path="/freelancer/onboarding/*" element={<Onboarding />} />

          {/* Client routes */}
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/createjob" element={<Createjob />} />
          <Route path="/client/postedjob" element={<Postedjob />} />
          <Route path="/client/viewproposal" element={<ViewProposal />} />
          <Route path="/client/invite" element={<Invite />} />
          <Route path="/client/hire" element={<Hire />} />
          <Route path="/client/worksubmission" element={<WorkSubmission />} />



        {/* Default Route */}
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
