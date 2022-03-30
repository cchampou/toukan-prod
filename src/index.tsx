import React from 'react';
import { render } from 'react-dom';
import { registerSW } from 'virtual:pwa-register';

import './styles/application.css';
import './styles/fonts.css';

import Router from './Router';
import DarkMode from './DarkMode';
import Theming from './Theming';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      dark: string;
      lightDark: string;
      light: string;
      darkLight: string;
    };
    fonts: {
      primary: string;
      intense: string;
      light: string;
      text: string;
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

registerSW({});
