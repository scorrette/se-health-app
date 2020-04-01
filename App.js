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
import {Component} from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';
import RootStack from './RootStack';
import './android/Firebase/globalFirebase';

//Firebase requires a crypto module, and currently throws errors when attempting to use with react-native
//Manual workaround
//TODO implement firebase using context provider, and move crypto delcaration into firebase module
import { decode, encode } from 'base-64'
global.crypto = require('@firebase/firestore');
global.crypto.getRandomValues = byteArray => { for (let i = 0; i < byteArray.length; i++) { byteArray[i] = Math.floor(256 * Math.random()); } }

if (!global.btoa) { global.btoa = encode; }

if (!global.atob) { global.atob = decode; }

export default function App() {
  return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
  );
}
