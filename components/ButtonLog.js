import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import {connect} from 'react-redux';

class ButtonLog extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 45}}>
        <Button
    onPress={this.props.signUp}
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
    onPress={this.props.signIn}
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: function() {
        dispatch( {type: 'signUp', pageName: "signUp"} )
    },
    signIn: function() {
        dispatch( {type: 'signIn', pageName: "signIn"} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(ButtonLog);
