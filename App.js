import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CryptoList from './CryptoList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CryptoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
  },
});
