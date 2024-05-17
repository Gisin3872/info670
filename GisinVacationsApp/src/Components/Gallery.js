import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

const Gallery = ({ images }) => (
  <View>
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.url }} />
          <Text>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>
);

export default Gallery;