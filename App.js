import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

const BinaryConverter = () => {
  const [num, SetNum] = useState(0);
  const [convertedNum, SetConvertedNum] = useState(0);
  const [inputText, SetInputText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header text="Binary to decimal" />
        <View style={styles.main}>
          <Text style={styles.output}>{convertedNum}</Text>
          <View style={styles.form}>
            <Input
              placeholder="Enter binary number..."
              keyboardType="numeric"
              placeholderColor="white"
              value={inputText}
              onChangeText={(text) => {
                SetInputText(text.replace(/2|3|4|5|6|7|8|9|,|\.|-/g, ''));
                SetNum(parseInt(text.replace(/\s/g, ''), 2));
              }}
            />

            <Button title="Convert" onPress={() => SetConvertedNum(num)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BinaryConverter;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  main: {
    justifyContent: 'center',
  },
  form: {
    marginTop: 50,
  },
  output: {
    marginTop: 50,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 150,
    textAlign: 'center',
  },
});
