import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 5,
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 60,
  },
});

export default Header;
