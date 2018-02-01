// @flow

import React from 'react';
import { Button, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import SampleText from './common/SampleText';
import AllCoinsList from './lists/AllCoinsList';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView style={{ backgroundColor: '#fff' }}>
    <SampleText>{banner}</SampleText>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      {/*<Button*/}
        {/*onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}*/}
        {/*title="Open profile screen"*/}
      {/*/>*/}
      <AllCoinsList/>
    </SafeAreaView>

    <StatusBar barStyle="default" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Cryptocurrency List" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Favorites Cryptocurrency" navigation={navigation} />
);

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: 'React Native Cryptocurrency',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`,
    }),
  },
});

const SettingsTab = StackNavigator({
  Settings: {
    screen: MySettingsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Favorites Cryptocurrency',
    }),
  },
});

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Cryptocurrency',
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Favorites',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#000',
      style: {
        backgroundColor: 'orangered',
      },
    },
  }
);

export default StacksInTabs;