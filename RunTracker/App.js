import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, Alert } from 'react-native';

const FitnessTracker = () => {
  const [runs, setRuns] = useState([]);
  const [newRun, setNewRun] = useState({date: '', distance: '', time: ''});

  const addRun = () => {
    const date = new Date(newRun.date);
    const time = new Date(`1970-01-01T${newRun.time}Z`);
    if (
      !isNaN(date.getTime()) &&
      !isNaN(newRun.distance) &&
      !isNaN(time.getTime())
    ) {
      setRuns([...runs, newRun]);
      setNewRun({date: '', distance: '', time: ''});
    } else {
      alert('Please enter data in the requested format');
    }
  };

  const deleteRun = (index) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this run?',
      [
        {text: 'NO', style: 'cancel'},
        {text: 'YES', onPress: () => setRuns(runs.filter((run, i) => i !== index))},
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#841584',
      marginBottom: 16,
      marginTop: 16,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#841584',
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 16,
      paddingLeft: 8,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: '#fff',
      borderRadius: 4,
      marginTop: 10,
    },
    itemText: {
      fontSize: 16,
      color: '#333',
    },
    addButton: {
      backgroundColor: '#841584',
      padding: 10,
      borderRadius: 4,
      marginTop: 16,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Personal Run Tracker
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Date MM-DD-YYYY"
        value={newRun.date}
        onChangeText={date => setNewRun({...newRun, date})}
      />
      <TextInput
        style={styles.input}
        placeholder="Distance (Miles)"
        value={newRun.distance}
        onChangeText={distance => setNewRun({...newRun, distance})}
      />
      <TextInput
        style={styles.input}
        placeholder="Time 00:00"
        value={newRun.time}
        onChangeText={time => setNewRun({...newRun, time})}
      />
      <Button
        title="Add Run"
        onPress={addRun}
        color="#841584"
      />
      <FlatList
        data={runs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Date: {item.date}</Text>
            <Text style={styles.itemText}>Miles: {item.distance}</Text>
            <Text style={styles.itemText}>Time: {item.time}</Text>
            <Button
              title="Delete Run"
              onPress={() => deleteRun(index)}
              style={{
                fontSize: 14,
                padding: 15,
                borderRadius: 5,
                backgroundColor: '#8b0000',
                color: '#ffffff',
                marginTop: 10,
                marginBottom: 10
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default FitnessTracker;

