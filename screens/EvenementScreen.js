import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View, Avatar, Text } from 'react-native';
import { List, ListItem, ListView, Header } from 'react-native-elements';
import { WebBrowser } from 'expo';
import {connect} from 'react-redux';
import WelcomeScreen from './WelcomeScreen'
import { MonoText } from '../components/StyledText';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class EvenementScreen extends React.Component {
  static navigationOptions = {
    header:
    <View>
      <Text>Upcoming Birthdays</Text>
    </View>
  };

  render() {

    return(
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l) => (
            <ListItem
              roundAvatar
              avatar={{uri:l.avatar_url}}
              key={0}
              title={l.name}
            />
          ))
        }
      </List>
    );
  }
}

  // constructor(props){
  //    super(props);
  //    this.state = {
  //      users: []
  //    }
  //  }
  //
  // componentDidMount(){
  //    fetch("https://jsonplaceholder.typicode.com/users")
  //      .then(response => response.json())
  //      .then(data => this.setState({ users: data }))
  //  }



//       <List containerStyle={styles.container}>
//         {
//           this.state.users.map((l, i) => (
//             <ListItem
//               onPress={() => this.props.onHandleClick(l)}
//               hideChevron
//               key={0}
//               avatar={<Avatar
//                  source={{uri: l.avatar_url}}
//                  avatarStyle={{borderColor: "red", borderWidth: 3}}
//                  medium
//                  rounded
//                  />}
//               title={l.name}
//               subtitle={
//                  <View style={styles.subtitleView}>
//                    <Text style={styles.ratingText}>Anniversaire prévu pour le : {l.}</Text>
//                  </View>
//                }
//             />
//           ))
//         }
//       </List>
//
//
// function mapDispatchToProps(dispatch) {
//   return {
//     onHandleClick: function(user) {
//     dispatch( {type: 'increase'} )
//     }
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    height: 20,
    backgroundColor: '#fff',
  },
  subtitleView: {
  paddingLeft: 10,
  paddingTop: 5
  },
  header: {
  backgroundColor: '#6a89cc',
  }
});

// export default connect(
//     null,
//     mapDispatchToProps
// )(EvenementScreen);
