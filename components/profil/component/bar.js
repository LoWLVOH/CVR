import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { AppRegistry,
         StyleSheet,
         ScrollView,
         Text,
         View,
        } from 'react-native';

class Bar extends React.Component {

  render() {
    return(

       <View style={styles.bar}>
         <View style={[styles.barItem,styles.barseparator]}>
             <Text style={styles.barTop}>200</Text>
             <Text style={styles.barBottom}>Amis</Text>

         </View>

         <View style={[styles.barItem,styles.barseparator]}>
             <Text style={styles.barTop}>7</Text>
             <Text style={styles.barBottom}>Posts</Text>

         </View>

       </View>

    );
  }
}

export default Bar;

const styles = StyleSheet.create({
  bar:{
    borderTopColor:'#fff',
    borderTopWidth:4,
    backgroundColor:'#ec2e4a',
    flexDirection:'row'
  },
  barseparator:{
    borderRightWidth:4
  },
  barItem:{
    flex:1,
    padding:8,
    alignItems:'center',
  },
  barTop:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  barBottom:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold',

  }

}

);
