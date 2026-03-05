import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import { trackPageView } from './src/utils/tracking';

const PageTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;