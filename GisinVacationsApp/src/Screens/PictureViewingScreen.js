import React, { useLayoutEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PictureViewer from '../Components/PictureViewer'; // import PictureViewer component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  caption: {
    fontSize: 18,
    textAlign: 'center',
  },
});

const PictureViewingScreen = ({ route, navigation }) => {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.name,
    });
  }, [navigation, item.name]);

  return (
    <View style={styles.container}>
      <PictureViewer image={item.source} /> // use PictureViewer component
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
};

export default PictureViewingScreen;