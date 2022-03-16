import { ThemeProvider } from '@emotion/react';
import React, { PropsWithChildren, useContext, useMemo } from 'react';
import dark from './contexts/dark';
import { darkTheme, lightTheme } from './styles/theme';

function Theming({ children }: PropsWithChildren<{}>) {
  const { isDark } = useContext(dark);

  const currentTheme = useMemo(
    () => (isDark ? darkTheme : lightTheme),
    [isDark]
  );

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default Theming;
