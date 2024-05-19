import React, { useLayoutEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Add padding around the image
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10, // Add some space below the image
  },
  caption: {
    fontSize: 18, // Increase the font size for better legibility
    textAlign: 'center', // Center the text
  },
});

const PictureViewingScreen = ({ route, navigation }) => {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.name, // Set the header title as the image title
    });
  }, [navigation, item.name]);

  return (
    <View style={styles.container}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
};

export default PictureViewingScreen;

