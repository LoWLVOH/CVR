import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import { AppRegistry,
         StyleSheet,
         ScrollView,
         Text,
         View,
         Modal,
         Dimensions,
         Button,
         Image,
        } from 'react-native';
        import Bar from './bar';
        import ProfileHeader from './profilHeader';
        import CamP from './camP';

class Post extends React.Component {
  constructor()
         {
           super()
           this.state={camera:false,add:true}
         }
         componentWillMount(){
              console.log("avant affichage");
           }
         afterSnap(id){
           var picId = id - 1;
           this.setState({
          camera: false, photoId: picId
        });
        }


  render() {


    return(
              <ScrollView>
                <Modal visible={this.state.camera}>
                        <CamP onPict={this.afterSnap.bind(this)} />
                </Modal>

              <Button onPress={()=>{ this.setState({camera:true})}}
          title="take a Picture"
          color="#841584"
          />

    <View style={styles.photoGrid}>
                <View style={styles.photoWrap}>
                  <Image style={styles.photo} source= {{uri: `${FileSystem.documentDirectory}photos/Photo_2.jpg`}} />
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
