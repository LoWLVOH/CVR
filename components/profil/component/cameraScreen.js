import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Cam from '../component/cam';
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import {Button,Avatar} from 'react-native-elements';
export default class CameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };
  constructor() {
    super();
    this.handleClick=this.handleClick.bind(this);
    this.state={cameraOn:true, photoId:1, isVisible:true};
}
   //  handleClick(){
   //    this.setState({
   //   cameraOn: true
   // });
   //   }
     afterSnap(id){
       var picId = id - 1;
       this.setState({
      cameraOn: false, photoId: picId
    });
      }
  render() {

    // var display;
    // if(this.state.cameraOn){
    //   display = <Cam onPict={this.afterSnap.bind(this)}/>
    // }

    // else{
    //   display=
    //   <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
    //   <Avatar
    //     xlarge
    //     rounded
    //     source= {{uri: `${FileSystem.documentDirectory}photos/Photo_${this.state.photoId}.jpg`}}
    //     onPress={() => console.log("Works!")}
    //     activeOpacity={0.7}
    //   />
    //   <Button
    //      onPress={this.handleClick}
    //     title='Take a picture'
    //     buttonStyle={{
    //                   marginTop:300,
    //                   backgroundColor: "#f9ca24",
    //                   width: 300,
    //                   height: 45,
    //                   borderColor: "transparent",
    //                   borderWidth: 0,
    //                   borderRadius: 5,
    //                   marginLeft:25,
    //                 }}
    //   />
    //   </View>
    // }
    return (
      <View style={styles.container}>
        <Cam onPict={this.afterSnap.bind(this)}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
