import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import { Overlay, Input, Button, Divider } from 'react-native-elements';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import {connect} from 'react-redux';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
    header: null
  };

  signup(values){
  }
  signin(values){
  }

  render() {
    return (
      <View style={styles.container}>

        <SignUpForm onSubmit={this.signup}/>
        <SignInForm onSubmit={this.signin}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
