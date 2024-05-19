import React from 'react';
import Gallery from '../Components/Gallery';
import { useNavigation } from '@react-navigation/native';

const images = [
  { source: require('../Pictures/3.jpg'), name: 'Rio', caption: 'A serene view of Copacabana beach at midday.' },
  { source: require('../Pictures/2.jpg'), name: 'Bali', caption: 'The picturesque Kuta beach, a sunbathers paradise.' },
  { source: require('../Pictures/1.jpg'), name: 'Maldives', caption: 'The crystal clear waters of the Maldives, perfect for snorkeling.' },
  { source: require('../Pictures/4.jpg'), name: 'Dominica', caption: 'The beautiful sunset and a campfire on the beach.' }
];

const GalleryScreen = () => {
  const navigation = useNavigation();

  return <Gallery images={images} navigation={navigation} />;
};

export default GalleryScreen;
