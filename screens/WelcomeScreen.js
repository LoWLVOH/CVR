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
import { Permissions, Contacts } from 'expo';

class WelcomeScreen extends React.Component {
  constructor(){
  super()
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
}
  static navigationOptions = {
    header: null,
  };

  /////////////////////condition et fetch signUp///////////////////

  componentDidMount() {
    this.showFirstContactAsync();
  }

  async showFirstContactAsync() {
    // // Ask for permission to query contacts.
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
      ],
      pageSize: 1000,
      pageOffset: 0,
    })
      console.log(contacts.total);
      console.log(contacts);
  }


    signUp(values){
      if (values.userName != undefined &&
          values.phone != undefined &&
          values.password != undefined &&
          values.year != undefined &&
          values.month != undefined &&
          values.day != undefined &&
          values.phone.length == 10) {
            this.props.isLog();
              fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `userName=${values.userName}&phone=${values.phone}&password=${values.password}&year=${values.year}&month=${values.month}&day=${values.day}`
        }).then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        }).catch(function(error) {
            console.log('Request failed', error)
        });
      }
    console.log(values)
    }


/////////////////////condition et fetch signIn///////////////////
    signIn(values){
      this.props.isLog();
      fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
  body: `userName=${values.userName}&password=${values.password}`
}).then(function(response) {
    return response.json();
})
.then(function(data) {
  // if (data != undefined) {
  // }
    console.log(data);
}).catch(function(error) {
    console.log('Request failed', error)
});
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
