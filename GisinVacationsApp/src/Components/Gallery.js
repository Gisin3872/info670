import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: '10%', 
  },
  imageContainer: {
    alignItems: 'center',
    width: '90%',
    padding: 10,
  },
  image: {
    width: 145,
    height: 145,
    borderRadius: 20,
  }
});

const Gallery = ({ images, navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PictureViewing', { item })}>
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
    />
  </View>
);

export default Gallery;

