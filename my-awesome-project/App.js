import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

export default class App extends React.Component {

  state = {
    coins: [],
    url: 'https://api.coinmarketcap.com/v1/ticker/?limit=',
    page: 10,
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page < this.state.page) {
      const response = await fetch(this.state.url + this.state.page);
      this.setState({ coins: await response.json() })
    }
  }

  fetchCoins = async () => {
    const response = await fetch(this.state.url + this.state.page);
    this.setState({ coins: await response.json() })
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 10 })
  };

  async componentDidMount() {
    await this.fetchCoins();
  }

  _keyExtractor = (item, index) => `${index}:${item.id}`;

  _renderItem = ({item}) => (
    <View style={styles.row} >
      <Text>{item.symbol}</Text>
      <Text>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.coins}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this.loadMore}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    fontSize: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
