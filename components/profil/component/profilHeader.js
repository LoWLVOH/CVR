import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { reduxForm, Field } from "redux-form";
import { Constants, Camera, FileSystem, Permissions } from 'expo';
import {Button,Avatar,Divider,Input,visible} from 'react-native-elements';
import DropAccount2 from './dropAccount2';
import { TextField } from 'react-native-material-textfield';
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
          const { input, fieldName } = props;
          return (
            <View>
              <Input
                onChangeText={input.onChange}
                placeholder={fieldName}
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
    let day = [{value: '1',}, {value: '2',}, {value: '3',}, {value: '4',}, {value: '5',}, {value: '6',}, {value: '7',}, {value: '8',}, {value: '9',}, {value: '10',},
{value: '11',}, {value: '12',}, {value: '13',}, {value: '14',}, {value: '15',}, {value: '16',}, {value: '17',}, {value: '18',}, {value: '19',}, {value: '20',},
{value: '21',}, {value: '22',}, {value: '23',}, {value: '24',}, {value: '25',}, {value: '26',}, {value: '27',}, {value: '28',}, {value: '29',}, {value: '30',}, {value: '31',}];

    let month = [{value: 'Janvier',}, {value: 'Fevrier',}, {value: 'Mars',}, {value: 'Avril',}, {value: 'Mai',}, {value: 'Juin',}, {value: 'Juillet',}, {value: 'Aout',}, {value: 'Septembre',}, {value: 'Octobre',},
{value: 'Novembre',}, {value: 'Decembre',}];

    var year=[];
for (var i = 1950; i < 2020; i++) {
  year.push({value: i})
}
    var display;
    console.log(this.state.camera);
if (this.state.camera) {
  display=<Modal visible={this.state.camera}>
             <Cam onPict={this.afterSnap.bind(this)} />
            </Modal>
} else {
  display=<Modal visible={this.state.edit}>

              <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

                <TouchableOpacity onPress={()=>{ this.setState({camera:true})}}>
                <View style={styles.profilepicWrap}>
                       <Image style={styles.profilepic}
                         source= {{uri: `${FileSystem.documentDirectory}photos/Photo_1.jpg`}}
                         // source ={require('../img/profilPic.jpg')}
                       />
                </View>
                  </TouchableOpacity>
                   <Field style={{height: 40, borderColor: 'gray', borderWidth: 1}} name="userName" fieldName="sajir" component={textInput}/>
                   <Field style={{height: 40, borderColor: 'gray', borderWidth: 1}} name="Password" fieldName="azerty" component={textInput}/>
                   <Field style={{height: 40, borderColor: 'gray', borderWidth: 1}} name="phone number" fieldName="0606060606" component={textInput}/>
                   <Field style={{height: 40, borderColor: 'gray', borderWidth: 1}} name="date_de_naissance" fieldName="09/06/1992" component={textInput}/>
                   {/* <Field name="ton_choisieversaire" fieldName="ton choisieversaire"  component={textInput} /> */}
                    <Text style={styles.baseText}>choisie ton choisieversaire</Text>
                   <View style={{flex: 0, flexDirection: 'row'}}>

                   <Field
                     name="day"
                     component={DropAccount2}
                     labelName = "Day"
                     data={day}
                   />
                   <Field
                     name="month"
                     component={DropAccount2}
                     labelName = "Month"
                     data={month}
                   />
                   <Field
                     name="year"
                     component={DropAccount2}
                     labelName = "Year"
                     data={year}
                   />
                   </View>

            {/* <Input placeholder='userName' component={textInput}/>
                <Input placeholder='Password' component={textInput}/>
                <Input placeholder='phone number' component={textInput}/>
                <Input placeholder='date de naissance' component={textInput}/>
                <Input placeholder='ton choisieversaire' component={textInput}/> */}

                <Button onPress={()=>{this.setState({edit:false})}}
                  title="enregistrer"
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

              <TouchableOpacity onPress={()=>{ this.setState({edit:true})}} >
               <View style={styles.profilepicWrap}>
                      <Image style={styles.profilepic}
                        source= {{uri: `${FileSystem.documentDirectory}photos/Photo_1.jpg`}}

                         // source ={require('../img/profilPic.jpg')}
                       />
               </View>
               </TouchableOpacity>
               {/* <TouchableOpacity onPress={()=>{ this.setState({edit:true})}} style={styles.ButtonEdit}>
                  <Text style={styles.ButtonText}>Modifier le profil</Text>
               </TouchableOpacity> */}

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

  titleText: {
      fontSize: 40,
      fontWeight: 'bold',
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
