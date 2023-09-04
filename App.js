import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clear = () => {
    setData('');
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <View style={styles.button}>
        <View style={styles.buttonMore}>
          <Button onPress={add} title="Add" />
        </View>
        <View style={styles.buttonMore}>
          <Button onPress={clear} title="Clear" />
        </View>
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    paddingTop: 30,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonMore: {
    width: '40%',
  },
  text: {
    fontSize: 20,
    paddingTop: 30,
    color: 'blue',
    fontWeight: 'bold'
  }
});