require('react-native').unstable_enableLogBox();

import React, { Component } from 'react'
import { Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
        {/* <NotifService /> */}
      </NavigationContainer>
    )
  }
}
