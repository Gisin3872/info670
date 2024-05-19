import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryHomeScreen from '../Screens/GalleryHomeScreen';
import PictureViewingScreen from '../Screens/PictureViewingScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GalleryHome" component={GalleryHomeScreen} />
        <Stack.Screen name="PictureViewing" component={PictureViewingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}