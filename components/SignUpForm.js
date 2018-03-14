import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import textAccount from './textAccount';

class SignUpForm extends React.Component {

  render(){
    return(
      <View>
        <Field
          name="firstName"
          component={textAccount}
          fieldName = "First name"
        />
        <Field
          name="lastName"
          component={textAccount}
          fieldName = "Last name"
        />
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
        <Field
          name="jour"
          component={textAccount}
          fieldName = "Jour"
        />
        <Field
          name="mois"
          component={textAccount}
          fieldName = "Mois"
        />
        <Field
          name="année"
          component={textAccount}
          fieldName = "Année"
        />
        <Button
          onPress={this.props.handleSubmit}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 300,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 100
          }}
          title="Fils de pute"
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default reduxForm({
  form:'signup'
})(SignUpForm);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

