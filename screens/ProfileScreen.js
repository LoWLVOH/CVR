import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import ProfileHeader from '../components/profil/component/profilHeader';
import Bar from '../components/profil/component/bar';
import Post from '../components/profil/component/post';



export default class CalendrierScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {


    return(

      <View style={styles.container}>
        <ProfileHeader />
        <Bar />
        <Post />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
