import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from '../Navigation/AppNavigator';

const theme = {
  ...DefaultTheme, colors: {
    ...DefaultTheme.colors,
    primary: '#1DB954',
    accent: '#1DB954',
    background: '#121212',
    text: '#FFFFFF',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
