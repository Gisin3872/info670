import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { DefaultTheme } from 'react-native-paper';
import { Provider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1DB954',
    accent: '#1DB954',
    background: 'black',
    text: 'white',
    placeholder: 'gray',
  },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <AppNavigator />
    </Provider>
  );
}