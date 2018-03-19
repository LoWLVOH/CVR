import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import textAccount from './textAccount';
import dropAccount from './DropAccount';
import { Dropdown } from 'react-native-material-dropdown';

class SignUpForm extends React.Component {
  constructor(){
  super()
    this.state={day:'', month:'', year:''}
  }


  render(){
    let day = [{value: '1',}, {value: '2',}, {value: '3',}, {value: '4',}, {value: '5',}, {value: '6',}, {value: '7',}, {value: '8',}, {value: '9',}, {value: '10',},
{value: '11',}, {value: '12',}, {value: '13',}, {value: '14',}, {value: '15',}, {value: '16',}, {value: '17',}, {value: '18',}, {value: '19',}, {value: '20',},
{value: '21',}, {value: '22',}, {value: '23',}, {value: '24',}, {value: '25',}, {value: '26',}, {value: '27',}, {value: '28',}, {value: '29',}, {value: '30',}, {value: '31',}];

    let month = [{value: 'Janvier',}, {value: 'Fevrier',}, {value: 'Mars',}, {value: 'Avril',}, {value: 'Mai',}, {value: 'Juin',}, {value: 'Juillet',}, {value: 'Aout',}, {value: 'Septembre',}, {value: 'Octobre',},
{value: 'Novembre',}, {value: 'Decembre',}];

    var year=[];
for (var i = 1950; i < 2020; i++) {
  year.push({value: i})
}

    return(
      <View style={styles.container}>
        <View style={{flex:0, backgroundColor:'pink', padding: 60, justifyContent: 'center', alignItems:'center'}}>
        <Field
          name="userName"
          component={textAccount}
          fieldName = "User Name"
        />
        <Field
          name="phone"
          component={textAccount}
          fieldName = "Phone Number"
        />
        <Field
          securTextEntry={true}
          name="password"
          component={textAccount}
          fieldName = "Password"
        />
        <View style={{flex: 0, flexDirection: 'row'}}>
        <Field
          name="day"
          component={dropAccount}
          labelName = "Day"
          data={day}
        />
        <Field
          name="month"
          component={dropAccount}
          labelName = "Month"
          data={month}
        />
        <Field
          name="year"
          component={dropAccount}
          labelName = "Year"
          data={year}
        />
        </View>
        <Button
          onPress={this.props.handleSubmit}
          title="SIGN UP"
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
  form:'signup'
})(SignUpForm);


const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    justifyContent: 'center',
  },
});
