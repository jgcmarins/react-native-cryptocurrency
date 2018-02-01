// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import CoinRow from '../coin/CoinRow';

import { coins } from '../common/consts';

class AllCoinsList extends Component {

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <CoinRow
      coin={item}
      // onPressItem={this._onPressItem}
    />
  );

  render() {
    return(
      <FlatList
        data={coins}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
};

export default AllCoinsList;