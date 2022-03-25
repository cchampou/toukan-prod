import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    dark: '#101010',
    lightDark: '#1f1f1f',
    light: '#fafafa',
    darkLight: '#f0f0f0',
  },
  fonts: {
    primary: 'Dolce Vita',
    intense: 'Dolce Vita Heavy',
    light: 'Dolce Vita Light',
  },
};

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    dark: lightTheme.colors.light,
    light: lightTheme.colors.dark,
    lightDark: lightTheme.colors.darkLight,
    darkLight: lightTheme.colors.lightDark,
  },
};
