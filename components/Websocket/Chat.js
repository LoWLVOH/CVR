import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Input, ListItem, List , Button  } from 'react-native-elements';
import io from 'socket.io-client';

export default class App extends React.Component {

 constructor(props) {
     super(props);
     this.socket = io('https://afternoon-coast-15284.herokuapp.com', { transports: ['websocket'] });
     // this.socket = io('http://10.2.1.56:3000', { transports: ['websocket'] });
     this.state = {text : null, message: []}
     this.socket.on('chat message', this.showMessage.bind(this))
   }

showMessage = (msg) => {
  // FAUUUUUUUXXXXXXXXXXX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // this.state.message.push(msg) >>> A NE PAS FAIRE
  var messageList = [...this.state.message];
  messageList.push(msg);
  this.setState({message: messageList})
}

 sendMessage = () => {
   var messageList = [...this.state.message];
     console.log('ok');
     this.socket.emit('chat message', this.state.text);
     messageList.push(this.state.text)
     this.setState({message: messageList})
     this.setState({text: null})
     console.log('message')
 }

 render() {
   return (
     <ScrollView>
       <View>
       {/* <View>{this.state.message.map(item => <Text>{item}</Text>)}</View> */}
         <List>
           {this.state.message.map((l, i) => (
               <ListItem
                 hideChevron
                 key={i}
                 title={l}
                />
              )
            )}
         </List>
         <View style={styles.container}>
           <Input
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}>
           </Input>
         </View>
          <Button
            title='Send'
            onPress={()=>this.sendMessage()}
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
        </View>
     </ScrollView>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
