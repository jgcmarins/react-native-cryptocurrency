import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const Title = styled.span`
  font-size: 150px;
  color: #25D7FD;
  margin-left: 50px;
  margin-top: 100px;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '70vh',
});

export const HandsOn = () => (
  <Root>
    <Row>
      <Center>
        <Title>Hands on!</Title>
      </Center>
    </Row>
  </Root>
);