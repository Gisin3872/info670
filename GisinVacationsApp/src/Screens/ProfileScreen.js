import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryHomeScreen from '../Screens/GalleryHomeScreen';
import PictureViewingScreen from '../Screens/PictureViewingScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const GalleryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const GalleryStackScreen = () => (
  <GalleryStack.Navigator>
    <GalleryStack.Screen name="My Trips" component={GalleryHomeScreen} />
    <GalleryStack.Screen name="PictureViewing" component={PictureViewingScreen} />
  </GalleryStack.Navigator>
);

const ProfileStackScreen = ({ name, email, setName, setEmail }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile">
      {props => <ProfileScreen {...props} name={name} email={email} setName={setName} setEmail={setEmail} />}
    </ProfileStack.Screen>
  </ProfileStack.Navigator>
);

export default function AppNavigator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Tab.Navigator>
      <Tab.Screen name="Gallery" component={GalleryStackScreen} />
      <Tab.Screen name="Profile">
        {props => <ProfileStackScreen {...props} name={name} email={email} setName={setName} setEmail={setEmail} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
