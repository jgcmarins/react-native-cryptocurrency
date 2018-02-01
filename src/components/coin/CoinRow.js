// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CoinRow extends Component {
  render() {
    const { coin } = this.props;
    return(
      <View><Text>{coin.name}</Text></View>
    );
  }
}

export default CoinRow;