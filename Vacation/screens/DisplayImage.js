import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 175,
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

const DisplayImage = ({ source }) => {
  return (
    <Image source={source} style={styles.image} />
  );
};

export default DisplayImage;
