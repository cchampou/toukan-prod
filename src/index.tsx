import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import './styles/application.css';
import TopNav from './molecules/topNav/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/legal" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'));
