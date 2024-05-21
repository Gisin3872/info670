import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import GalleryScreen from './screens/GalleryScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PictureViewingScreen from './screens/PictureViewingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GalleryStack = createStackNavigator();

function GalleryStackScreen() {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <GalleryStack.Screen
        name="PictureViewingScreen"
        component={PictureViewingScreen}
        options={{ headerShown: false }}
      />
    </GalleryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1DB954',
    accent: 'green',
  },
  fonts: {
    ...DefaultTheme.fonts,
    medium: 'Circular-Std-Bold',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Gallery') {
                iconName = focused ? 'image-multiple' : 'image-multiple-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'account' : 'account-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray',}}>
          <Tab.Screen name="Gallery" component={GalleryStackScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        </NavigationContainer>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  title: {
    color: 'Green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    color: 'black',
    fontSize: 14,
  },
});
