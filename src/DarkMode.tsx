import React, { PropsWithChildren, useMemo, useState } from 'react';
import darkContext from './contexts/dark';
import { isNight } from './utils/date';

function DarkMode({ children }: PropsWithChildren<{}>) {
  const [isDark, setIsDark] = useState(isNight());

  const darkContextValue = useMemo(
    () => ({
      isDark,
      toggleDark: () => setIsDark((prevValue) => !prevValue),
    }),
    [isDark, setIsDark]
  );

  return (
    <darkContext.Provider value={darkContextValue}>
      {children}
    </darkContext.Provider>
  );
}

export default DarkMode;
