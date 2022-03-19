import React, { useMemo, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import Homepage from './pages/homepage/Homepage';
import './styles/application.css';
import TopNav from './molecules/topNav/TopNav';
import { darkTheme, lightTheme } from './styles/theme';
import darkContext from './contexts/dark';
import NotFound from './pages/notFound/NotFound';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      dark: string;
      light: string;
    };
  }
}

function App() {
  const [isDark, setIsDark] = useState(true);

  const darkContextValue = useMemo(
    () => ({
      isDark,
      toggleDark: () => setIsDark((prevValue) => !prevValue),
    }),
    [isDark, setIsDark]
  );

  const currentTheme = useMemo(
    () => (isDark ? darkTheme : lightTheme),
    [isDark]
  );

  return (
    <BrowserRouter>
      <darkContext.Provider value={darkContextValue}>
        <ThemeProvider theme={currentTheme}>
          <TopNav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </darkContext.Provider>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById('root'));
