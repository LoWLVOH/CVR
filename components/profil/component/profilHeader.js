import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { reduxForm, Field } from "redux-form";
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import {Button,Avatar,Divider,Input,visible} from 'react-native-elements';

import { AppRegistry,
         StyleSheet,
         ScrollView,
         Text,
         View,
         Image,
         ImageBackground,
         TouchableOpacity,
         Modal,
         TextInput,
        } from 'react-native';
        import Cam from './cam';
        import CameraScreen from './cameraScreen';

        function textInput(props) {
          const { input } = props;
          return (
            <View>
              <Input
                onChangeText={input.onChange}
                placeholder={'userName'}
                value={input.value}
              />
            </View>
          );
        }
class ProfileHeader extends React.Component {
constructor()
       {
         super()
         this.state={edit:false, camera:false}
       }

       afterSnap(id){
         var picId = id - 1;
         this.setState({
        camera: false, photoId: picId
      });
      }
  render() {
    var display;
    console.log(this.state.camera);
if (this.state.camera) {
  display=<Modal visible={this.state.camera}>
             <Cam onPict={this.afterSnap.bind(this)} />
            </Modal>
} else {
  display=<Modal visible={this.state.edit}>

              <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                <Text> Modifie ton profil</Text>

                <View style={styles.profilepicWrap}>
                       <Image style={styles.profilepic}
                         source= {{uri: `${FileSystem.documentDirectory}photos/Photo_1.jpg`}}
                         // source ={require('../img/profilPic.jpg')}

                       />
                </View>
                <TouchableOpacity onPress={()=>{ this.setState({camera:true})}} style={styles.ButtonEdit}>

                <Text> Modifie ta photo</Text>
                   </TouchableOpacity>
                   <Field name="userName" component={textInput}/>
                   <Field name="Password" component={textInput}/>
                   <Field name="phone number" component={textInput}/>
                   <Field name="date de naissance" component={textInput}/>
                   <Field name="ton choisieversaire" component={textInput} />
                {/* <Input placeholder='userName' component={textInput}/>
                <Input placeholder='Password' component={textInput}/>
                <Input placeholder='phone number' component={textInput}/>
                <Input placeholder='date de naissance' component={textInput}/>
                <Input placeholder='ton choisieversaire' component={textInput}/> */}

                <Button onPress={()=>{this.setState({edit:false})}}
                  text="update"
                  textStyle={{ fontWeight: "700" }}
                  buttonStyle={{
                    backgroundColor: "#3498db",
                    width: 200,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                  }}
                  containerStyle={{ marginTop: 20 }}
                />

                <Divider style={{ backgroundColor: 'blue' }} />

              </View>

  </Modal>
}

    return(

        <ImageBackground style={styles.headerBackground} source ={require('../img/headerPic.jpg')}>

            <View style={styles.header}>

               <View style={styles.profilepicWrap}>
                      <Image style={styles.profilepic}
                        source= {{uri: `${FileSystem.documentDirectory}photos/Photo_1.jpg`}}

                         // source ={require('../img/profilPic.jpg')}
                       />
               </View>
               <TouchableOpacity onPress={()=>{ this.setState({edit:true})}} style={styles.ButtonEdit}>
                  <Text style={styles.ButtonText}>Modifier le profil</Text>
               </TouchableOpacity>

                  <Text style={styles.name}>sajir khenissi</Text>
                  <Text style={styles.pos}>-le boss-</Text>

            </View>

            {display}
        </ImageBackground>

    );
  }
}

export default reduxForm({
  form: 'update'
})(ProfileHeader)

const styles = StyleSheet.create({
  headerBackground:{
      flex:1,
      width:null,
      alignSelf: 'stretch'
                  },
 header:{
             flex:1,
             alignItems:'center',
             justifyContent:'center',
             padding:20,
             backgroundColor: 'rgba(0,0,0, 0.5)'
       },
 profilepicWrap:{
             width:180,
             height:180,
             borderRadius:100,
             borderColor: 'rgba(0,0,0, 0.4)',
             borderWidth:7
               },
  profilepic:{
            flex:1,
            width:null,
            alignSelf:'stretch',
            borderRadius:70,
            borderColor: '#fff',
            borderWidth:4
  },
  name:{
           marginTop:20,
           fontSize:16,
           color:'#fff',
           fontWeight:'bold'
      },
  pos:{
           fontSize:14,
           color:'#0394c0',
           fontWeight: '300',
           fontStyle:'italic'
     },
  ButtonEdit:{
            alignSelf:'stretch',
            margin:10,
            marginBottom:3,
            padding:2,
            // backgroundColor:'gray',
            // borderWidth:7,
            // borderColor:'#fff',
            // backgroundColor:'rgba(257,257,257,0.6)',
          },
 ButtonText:{
            fontSize:14,
            fontWeight:'bold',
            textAlign:'center',
            },
  },
);
