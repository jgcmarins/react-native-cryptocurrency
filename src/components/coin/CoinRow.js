// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  margin: 10px;
  background-color: cornsilk;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Ranking = styled.Text`
  font-size: 20px;
  margin: 10px;
  color: orangered;
`;

const Symbol = styled.Text`
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
`;

const Price = styled.Text`
  font-size: 20px;
  margin: 10px;
  color: #008800;
`;

class CoinRow extends Component {
  render() {
    const { coin } = this.props;
    return(
      <Container>
        <RowContainer>
          <Ranking>{coin.rank}º</Ranking>
          <Symbol>{coin.symbol}</Symbol>
          <Price>$ {coin.price_usd}</Price>
        </RowContainer>
      </Container>
    );
  }
}

export default CoinRow;