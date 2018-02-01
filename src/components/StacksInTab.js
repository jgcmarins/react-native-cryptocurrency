// @flow

import React from 'react';
import { Button, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import SampleText from './common/SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <Button
        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
        title="Open profile screen"
      />
    </SafeAreaView>

    <StatusBar barStyle="default" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
);

const MainTab = StackNavigator({
  Home: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
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
      title: 'Settings',
    }),
  },
});

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default StacksInTabs;