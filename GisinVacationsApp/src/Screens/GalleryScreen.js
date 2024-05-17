import React from 'react';
import Gallery from '../Components/Gallery';

const GalleryScreen = () => {
  const images = [
    require('./Pictures/1.jpg'),
    require('./Pictures/2.jpg'),
    require('./Pictures/3.jpg')
  ];
  return <Gallery images={images} />;
};

export default GalleryScreen;