import React from 'react';
import { View, Image, Text, Button, Dimensions, StyleSheet } from 'react-native';

const PictureViewingScreen = ({ route, navigation }) => {
  const image = route.params.image;
  const title = route.params.title;
  const caption = route.params.caption;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: undefined,
    aspectRatio: 1,
  },
  caption: {
    fontSize: 16,
    fontStyle: 'italic',
    padding: 10,
  },
});

export default PictureViewingScreen;
