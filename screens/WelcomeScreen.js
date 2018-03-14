import React from 'react';
import {
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text,Button } from 'react-native-elements';
import ButtonLog from '../components/ButtonLog';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import {connect} from 'react-redux';

class WelcomeScreen extends React.Component {
  constructor(){
  super()
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
}
  static navigationOptions = {
    header: null,
  };

    signUp(values){
      this.props.isLog();
//       fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   headers: {'Content-Type':'application/x-www-form-urlencoded'},
//   body: 'name=john&username=doe&email=john@gmail.com'
// }).then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// }).catch(function(error) {
//     console.log('Request failed', error)
// });
    console.log(values)
    }
    signIn(values){
      this.props.isLog();
      //fetch ici
    console.log(values)
    }

  render() {
    var display;
    console.log(this.props.logButton);
    if (this.props.logButton == "signUp") {
      display = <SignUpForm onSubmit={this.signUp}/>;
    } else if (this.props.logButton == "signIn"){
      display = <SignInForm onSubmit={this.signIn}/>;
    } else {
      display =
      <View style={{flex:1}}>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center', marginBottom: 500 }}>
        <Text h1 style={{color: "#D81159"}}>ChoisiVersaire</Text>
        <Text h3 style={{color: "#D81159"}}>Choisi ton Anni!!!</Text>
      </View>
      <ButtonLog />
      </View>
    }

    return (
      <ImageBackground style={{flex: 1}} source={require('../assets/images/Welcome.jpg')}>
        {display}
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return { logButton: state.logReducer }
}

function mapDispatchToProps(dispatch) {
  return {
    isLog: function() {
        dispatch( {type: 'isLog'} )
    }
  }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeScreen);
