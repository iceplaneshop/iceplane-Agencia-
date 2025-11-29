import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;