/* @flow */

import React from 'react';
import { ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import StacksInTabs from './src/components/StacksInTab';

class MainScreen extends React.Component<*> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StacksInTabs />
      </View>
    );
  }
}

const AppNavigator = StackNavigator(
  {
    Index: {
      screen: MainScreen,
    },
    StacksInTabs: {
      name: 'Stacks in Tabs',
      description: 'Nested stack navigation in tabs',
      screen: StacksInTabs,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
  }
);

export default () => <AppNavigator />;
