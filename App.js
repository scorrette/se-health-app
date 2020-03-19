/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';
import {Component} from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import RootStack from './RootStack';
import HowYouDoin from './HowYouDoin';
// const AppNavigator = createStackNavigator(
//   {
//     LoginScreen: {
//       screen: Login,
//     },
//     CreateAccountScreen: {
//       screen: CreateAccount,
//     },
//   },
//   {
//     initialRouteName: 'LoginScreen',
//   },
// );

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
