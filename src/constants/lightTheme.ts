import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const lighTheme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFF",
    cardBackground: '#CCC',
    statusBar: '#7e00ad',
    headerBackground: '#9c00d6',
    lightPurple: '#9c00d6',
    darkPurple: '#7e00ad',
  },
};
