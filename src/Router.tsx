import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './molecules/topNav/TopNav';
import Homepage from './pages/homepage/Homepage';
import NotFound from './pages/notFound/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
