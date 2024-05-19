import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Gallery from '../Components/Gallery';
import PictureViewer from '../Components/PictureViewer';
import GalleryHomeScreen from '../Screens/GalleryHomeScreen';
import AppNavigator from '../Navigation/AppNavigator';
import PictureViewingScreen from '../Screens/PictureViewingScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const theme = {
  ...DefaultTheme,
  colors: {
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
      <Gallery />
      <PictureViewer />
      <GalleryHomeScreen />
      <PictureViewingScreen />
      <ProfileScreen />
    </PaperProvider>
  );
}