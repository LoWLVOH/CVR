import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {

    return (
      <View>

        <SignUpForm onSubmit={this.signup}/>
        <SignInForm onSubmit={this.signin}/>

      </View>
    );

  }
}
