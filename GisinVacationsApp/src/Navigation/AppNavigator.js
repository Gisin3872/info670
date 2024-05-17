import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import GalleryScreen from '../screens/GalleryScreen';
import PictureViewingScreen from '../screens/PictureViewingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppNavigator = createBottomTabNavigator({
  Gallery: GalleryScreen,
  PictureViewing: PictureViewingScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(AppNavigator);