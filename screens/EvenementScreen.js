import React, { Component } from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Avatar } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Button } from 'react-native-elements';

import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import WelcomeScreen from './WelcomeScreen'
import { MonoText } from '../components/StyledText';

export default class EvenementScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render () {
    return (
    <Container>
       <Header />
       <Content>
         <List>
           <ListItem>
             <Thumbnail rounded size={50} source={{ uri: ' photo utilisateur ' }} />
             <Body>
               <Text> Star Foula </Text>
               <Text note> Anniversaire prévue le : </Text>
               <Button

                 title="Créer une conversation"
                 titleStyle={{ fontWeight: "700" }}
                 buttonStyle={{
                 backgroundColor: "#fff",
                 borderColor: "transparent",
                 borderWidth: 0,
                 borderRadius: 5,}}
               />

             </Body>
           </ListItem>
         </List>
       </Content>
    </Container>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
