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

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <ImageBackground style={{flex: 1}} source={require('../assets/images/Welcome.jpg')}>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center', marginBottom: 500 }}>
          <Text h1 style={{color: "#D81159"}}>ChoisiVersaire</Text>
          <Text h3 style={{color: "#D81159"}}>Choisi ton Anni!!!</Text>
        </View>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 45}}>
        <Button
    onClick={this.signUp}
    title="SIGN UP"
    titleStyle={{ fontWeight: "700" }}
    buttonStyle={{
    backgroundColor: "#D81159",
    width: 120,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5

    }} />
      <Button
    onClick={this.signIn}
    title="SIGN IN"
    titleStyle={{ fontWeight: "700" }}
    buttonStyle={{
    backgroundColor: "#D81159",
    width: 120,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
    }} />
    </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
