import React, { Component } from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Avatar } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { List, ListItem } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import WelcomeScreen from './WelcomeScreen'
import { MonoText } from '../components/StyledText';
// import { GiftedChat } from 'react-native-gifted-chat'
//
// export default class EvenementScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//   };
//
//   state = {
//       messages: [],
//     }
//
//     componentWillMount() {
//       this.setState({
//         messages: [
//           {
//             _id: 1,
//             text: 'Hello developer',
//             createdAt: new Date(),
//             user: {
//               _id: 2,
//               name: 'React Native',
//               avatar: 'https://facebook.github.io/react/img/logo_og.png',
//             },
//           },
//         ],
//       })
//     }
//
//     onSend(messages = []) {
//       this.setState(previousState => ({
//         messages: GiftedChat.append(previousState.messages, messages),
//       }))
//     }


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
                 onPress={this.props.onHandleClick()}
                 title="Créer une conversation"
                 titleStyle={{ fontWeight: "700" }}
                 buttonStyle={{
                 backgroundColor: "#fff",
                 borderColor: "transparent",
                 borderWidth: 0,
                 borderRadius: 5,}}
               />
               {/* <GiftedChat
                 messages={this.state.messages}
                 onSend={messages => this.onSend(messages)}
                 user={{
                   _id: 1,
                 }}
               /> */}
             </Body>
           </ListItem>
         </List>
       </Content>
    </Container>
   )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
