import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

// type RootInterface =  {
//   id: string,
//   name: string,
//   symbol: string,
//   rank: string,
//   price_usd: string,
//   price_btc: string,
//   24h_volume_usd: string,
//   market_cap_usd: string,
//   available_supply: string,
//   total_supply: string,
//   max_supply: string,
//   percent_change_1h: string,
//   percent_change_24h: string,
//   percent_change_7d: string,
//   last_updated: string,
// };

export default class App extends React.Component {

  state = {
    coins: [],
    url: 'https://api.coinmarketcap.com/v1/ticker/?limit=',
    page: 10,
  };

  async componentDidMount() {
    try {
      const url = this.state.url + this.state.page;
      const response = await fetch(url);
      const coins = await response.json();

      this.setState({ coins });

    } catch(error) {
      console.log(error);
    }
  }

  _renderItem = (props) => {
    const { item } = props;
    return (
      <View style={styles.container}>
        <Text style={styles.column} >{item.`id`}</Text>
        <Text style={styles.column}>{item.symbol}</Text>
        <Text style={styles.column}>{item.name}</Text>
      </View>
    );
  };

  listHeader = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.column} >ID</Text>
        <Text style={styles.column}>SYMBOL</Text>
        <Text style={styles.column}>NAME</Text>
      </View>
    );
  };

  loadMore = async () => {
    const LOAD_MORE = 10;

    const url = this.state.url + (this.state.page + LOAD_MORE);
    const response = await fetch(url);
    const coins = await response.json();

    this.setState({ coins, page: this.state.page + LOAD_MORE });
  };

  render() {

    const { coins } = this.state;

    return (
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        renderItem={this._renderItem}
        ListHeaderComponent={this.listHeader}
        onEndReached={this.loadMore}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  column: {
    fontSize: 16,
    marginBottom: 5,
  }
});
