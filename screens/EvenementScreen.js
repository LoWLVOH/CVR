import React from 'react';
import {ImageBackground, Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Avatar, Text, Modal } from 'react-native';
import { List, ListItem, ListView, Header, Button, TextInput } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import WelcomeScreen from './WelcomeScreen';
import { MonoText } from '../components/StyledText';
import Chat from '../components/Websocket/Chat';


export default class EvenementScreen extends React.Component {
  static navigationOptions = {
    title: 'Evènements',
  };
  constructor() {
   super();
   // this.onHandleClick = this.onHandleClick.bind(this);
   this.state = {
     users: [
       {
       userName: "Manon",
       day: 18,
       month: "Février",
       year: 1987,
       uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
     },
     {
     userName: "Elodie",
     day: 22,
     month: "Février",
     year: 1988,
     uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
     }
     ],
     onChat: false
   };
  };

   openChat(){
    this.setState({onChat: true});
   }

   closeChat(){
    this.setState({onChat: false});
   }

  componentDidMount(){
        var ctx = this;
        fetch('https://afternoon-coast-15284.herokuapp.com/friends')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           ctx.setState({users: data});
        })
        .catch(function(error) {
            console.log('Request failed', error)
        });
     }

  render() {

   var display =
     <Modal visible={this.state.onChat}>
       <Chat />
       <Button
         onPress={() => this.closeChat()}
          title="BACK"
          titleStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 100,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
      />
     </Modal>


  return(
    <ImageBackground style={styles.headerBackground} source ={require('../components/profil/img/headerPic.jpg')}>
      <View>
        {display}
        <List>
          {this.state.users.map((l, i) => (
              <ListItem
                onPress={() => this.openChat()}
                hideChevron
                key={i}
                roundAvatar
                avatar={{uri:l.uri}}
                title={l.userName}
                subtitle={
                 <View>
                   <Text> Choisiversaire prévu pour le : {l.day} {l.month} </Text>
                 </View>
                 }
               />
             )
           )}
        </List>
    </View>
  </ImageBackground>
    )
   }
  }

//   function mapDispatchToProps(dispatch) {
//   return {
//     onHandleClick: function(name) {
//         dispatch( {type: 'selectUser', name:name } )
//     }
//   }
// }

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 15,
    height: 20,
    backgroundColor: '#fff',
  },
  headerBackground:{
      flex:1,
      width:null,
      alignSelf: 'stretch'
                  },
  header: {
  backgroundColor: '#6a89cc',
  }
 }
);
