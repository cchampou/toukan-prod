import React from 'react';
import { createRoot } from 'react-dom/client';

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

// @ts-ignore
const root = createRoot(document.getElementById('root'));

root.render(<Application />);

navigator.serviceWorker.getRegistrations().then((registrations) => {
  registrations.forEach((registration) => {
    registration.unregister();
  });
});
