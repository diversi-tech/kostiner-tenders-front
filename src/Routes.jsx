
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Connection from './Components/connection';
import Help from './Components/help';
import ControlPanel from './Components/controlpanel';
import UserManagement from './Components/usermanagement';
import One_time from './Components/one_time';
import Introduction from './Components/introduction';
import About from './Components/about';
import Monthly from './Components/monthly';
import Subscription from './Components/subscription';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Connection" element={<Connection />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/Controlpanel" element={<ControlPanel />} />
            <Route path="/Usermanagement" element={<UserManagement />} />
            <Route path="/One_time" element={<One_time />} />
            <Route path="/Introduction" element={<Introduction />} />
            <Route path="/About" element={<About />} />
            <Route path="/Monthly" element={<Monthly />} />
            <Route path="/Subscription" element={<Subscription />} />
        </Routes>
    );
}

export default AppRoutes;

