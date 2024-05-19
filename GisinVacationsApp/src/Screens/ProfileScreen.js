import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validateInputs = () => {
    const emailRegex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Improper format', 'Please enter a valid email.');
      return;
    }
    if (!name.includes(' ')) {
      Alert.alert('Improper format', 'Please enter both first and last name.');
      return;
    }
    console.log('Inputs are valid');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User Name</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />
      <Text style={styles.label}>User Email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" style={styles.button} onPress={validateInputs}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    color: '#333'
  },
  input: {
    backgroundColor: 'white',
    marginTop: 10
  },
  button: {
    marginTop: 30
  }
});

export default ProfileScreen;

