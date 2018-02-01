// @flow

import React, { Component } from 'react';
import { FlatList } from 'react-native';

import CoinRow from '../coin/CoinRow';
import Loading from '../common/Loading';
import SampleText from '../common/SampleText';

// import { coins } from '../common/consts';

const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

class AllCoinsList extends Component {

  state = {
    coins: [],
    isFetching: true,
    errorMessage: '',
  };

  requestCoins = async () => {
    try {
      const response = await fetch(url);
      const coins = await response.json();
      this.setState({ coins: coins });
    } catch(error) {
      this.setState({isFetching: false, errorMessage: error});
      console.log('error: ', error);
    }
  };

  componentDidMount() {
    this.requestCoins();
  }

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <CoinRow
      coin={item}
      // onPressItem={this._onPressItem}
    />
  );

  render() {
    const { coins, isFetching, errorMessage } = this.state;

    if (isFetching) {
      return (
        <Loading/>
      );
    }

    return (
      <View>
      {coins.length === 0 ? <SampleText>{errorMessage}</SampleText> :
        <FlatList
          data={coins}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />}
      </View>
    );
  }
};

export default AllCoinsList;