import { Theme } from '@emotion/react';

export const lightTheme: Theme = {
  colors: {
    dark: '#101010',
    light: '#fafafa',
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
