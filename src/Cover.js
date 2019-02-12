import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

import { Root } from './Intro';

const Img = styled.img`
  ${width}
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 50px;
  ${space}
`;

const Subtitle = styled.span`
  font-size: 40px;
  color: #FDAA4C;
  ${space}
`;

const MeName = styled.span`
  font-size: 30px;
  color: #25D7FD;
  ${space} 
`;

export const Cover = () => (
  <Root>
    <Center>
      <Img src={"./img/reactNative.png"} width={150} />
      <Title mt={20}>React Native</Title>
      <Subtitle mt={20}>Workshop: Building a Cryptocurrency App</Subtitle>
      <MeName mt={100}>Joao Marins</MeName>
    </Center>
  </Root>
);