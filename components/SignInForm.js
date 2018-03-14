import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import textAccount from './textAccount';


class SignInForm extends React.Component {

  render(){
    return(
      <View style={styles.container}>
        <Field
          name="email"
          component={textAccount}
          fieldName = "Mail"
        />
        <Field
          name="password"
          component={textAccount}
          fieldName = "Password"
        />
        <Button
          onPress={this.props.handleSubmit}
          buttonStyle={{
            backgroundColor: "rgba(9, 2,5, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 100
          }}
          title="Ferme ta gueule"
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default reduxForm({
  form:'signin'
})(SignInForm);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: '',
    justifyContent: 'center',
  },
});
