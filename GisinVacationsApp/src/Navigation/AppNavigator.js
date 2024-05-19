import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import GalleryHomeScreen from '../Screens/GalleryHomeScreen';
import PictureViewingScreen from '../Screens/PictureViewingScreen';
import Profile from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Trips" component={GalleryHomeScreen} />
      <Stack.Screen name="PictureViewing" component={PictureViewingScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Gallery" component={GalleryStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
