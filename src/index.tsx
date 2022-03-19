import React from 'react';
import { render } from 'react-dom';
import background from './assets/toukan.jpg';

function App() {
  return <img src={background} alt="Toukan Cinema" />;
}

render(<App />, document.getElementById('root'));
