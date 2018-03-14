import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <ExpoConfigView />
  }
}
