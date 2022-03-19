import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './styles/application.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/legal" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'));
