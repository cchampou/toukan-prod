import React from 'react';
import { render } from 'react-dom';

import './styles/application.css';
import './styles/fonts.css';

import Router from './Router';
import DarkMode from './DarkMode';
import Theming from './Theming';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      dark: string;
      light: string;
    };
    fonts: {
      primary: string;
      intense: string;
    };
  }
}

function Application() {
  return (
    <DarkMode>
      <Theming>
        <Router />
      </Theming>
    </DarkMode>
  );
}

render(<Application />, document.getElementById('root'));
