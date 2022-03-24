import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    dark: '#101010',
    light: '#fafafa',
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
  },
};
