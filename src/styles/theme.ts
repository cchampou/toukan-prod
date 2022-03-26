import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    dark: '#101010',
    lightDark: '#2f2f2f',
    light: '#fafafa',
    darkLight: '#f1f1f1',
  },
  fonts: {
    primary: 'Dolce Vita',
    intense: 'Dolce Vita Heavy',
    light: 'Dolce Vita Light',
    text: '"Candara Light", Arial, sans-serif',
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
