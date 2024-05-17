import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import GalleryScreen from '../Screens/GalleryScreen';
import PictureViewingScreen from '../Screens/PictureViewingScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const AppNavigator = createBottomTabNavigator({
  Gallery: GalleryScreen,
  PictureViewing: PictureViewingScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(AppNavigator);