import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { AppRegistry,
         StyleSheet,
         ScrollView,
         Text,
         View,
         Dimensions,
         Image,
        } from 'react-native';

class Post extends React.Component {

  render() {
    return(

      <ScrollView>
          <View style={styles.photoGrid}>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/1.jpg')} />
              </View>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/2.jpg')} />
              </View>

              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/3.jpg')} />
              </View>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/4.jpg')} />
              </View>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/5.jpg')} />
              </View>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/6.jpg')} />
              </View>
              <View style={styles.photoWrap}>
                <Image style={styles.photo} source ={require('../img/7.jpg')} />
              </View>

          </View>

      </ScrollView>

    );
  }
}

export default Post;

const styles = StyleSheet.create({
  photoGrid:{
     flexDirection:'row',
     flexWrap:'wrap'
  },
  photoWrap:{
    
    margin:2,
    height:120,
    width:(Dimensions.get('window').width / 2)-4,
  },
  photo:{
     flex:1,
     width:null,
     alignSelf:'stretch'
  }

}

);
