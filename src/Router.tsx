import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './molecules/topNav/TopNav';
import Homepage from './pages/homepage/Homepage';
import NotFound from './pages/notFound/NotFound';
import Socials from './molecules/socials/Socials';

function Router() {
  return (
    <BrowserRouter>
      <TopNav />
      <Socials />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
