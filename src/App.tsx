import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './style/sos.scss';
import PrimaryLayout from './pages/layout/PrimaryLayout';
import DashboardPage from './pages/dasboard/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrimaryLayout />} path="/">
          <Route path="" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
