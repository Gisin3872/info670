import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View>
      <Text>User Name</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={{ backgroundColor: 'white' }}
      />
      <Text>User Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={{ backgroundColor: 'white' }}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Save
      </Button>
    </View>
  );
};

export default ProfileScreen;
