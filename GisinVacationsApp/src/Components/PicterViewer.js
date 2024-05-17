import React from 'react';
import { View, Image, Button } from 'react-native';

const PictureViewer = ({ image, navigation }) => (
  <View>
    <Button title="Back" onPress={() => navigation.goBack()} />
    <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
  </View>
);

export default PictureViewer;