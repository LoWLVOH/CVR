import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import textAccount from './textAccount';


class SignInForm extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <View style={{backgroundColor:'pink', padding: 60}}>
        <Field
          name="userName"
          component={textAccount}
          fieldName = "User Name"
        />
        <Field
          name="password"
          component={textAccount}
          fieldName = "Password"
        />
        <Button
          onPress={this.props.handleSubmit}
          title="SIGN IN"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
          backgroundColor: "#D81159",
          width: 120,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
          }}
          containerStyle={{ marginTop: 60 }}
        />
        </View>
      </View>
    )
  }
}

export default reduxForm({
  form:'signin'
})(SignInForm);

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
  },
});
