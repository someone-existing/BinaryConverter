import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        onChangeText={props.onChangeText}
        value={props.value}
        style={styles.input}
      />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {},
  input: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
  },
});

export default Input;
