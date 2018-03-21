import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Avatar, Text } from 'react-native';
import { List, ListItem, ListView, Header } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import WelcomeScreen from './WelcomeScreen';
import { MonoText } from '../components/StyledText';
import Chat from '../components/Websocket/Chat';


export default class EvenementScreen extends React.Component {
  static navigationOptions = {
    title: 'Evenement',
  };
  constructor() {
   super();
   this.state = {
     users: [],
     onChat: false
   };
  };
  // this.onHandleClick(){
  //   this.setState({onChat: true})
  // }

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
 var display;
 if (this.state.onChat) {
   display =
   <Modal visible={this.state.onChat}>
     <Chat />
   </Modal>
  } else {
   var list = this.state.users.map((l, i) => (
     display =
     <Modal>
       <ListItem
         onPress={() => this.props.onHandleClick(l)}
         hideChevron
         key={i}
         avatar={<Avatar
            source={{uri: this.avatar_url}}
            avatarStyle={{borderColor: "red", borderWidth: 3}}
            medium
            rounded
            />}
         title={l.name}
         subtitle={
          <View>
            <Text> Anniversaire prévu pour le :  </Text>
          </View>
          }
        />
      </Modal>
      )
     )
    }

  return(
      <View>
      <List containerStyle={styles.container}>
        {display}

      </List>
    </View>
    )
   }
  }

  function mapDispatchToProps(dispatch) {
  return {
    onHandleClick: function(name) {
        dispatch( {type: 'selectUser', name:name } )
    }
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    paddingTop: 15,
    height: 20,
    backgroundColor: '#fff',
  },
  header: {
  backgroundColor: '#6a89cc',
  }
 }
);
