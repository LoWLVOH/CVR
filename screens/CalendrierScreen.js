import React, { Component } from 'react';
import {Text,  View,StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class CalendrierScreen extends Component {
  static navigationOptions = {
    title: 'Calendrier',
  };
  constructor(props) {
    super(props);
    this.state = {
      party: [{name:"Sajir"},{name:"Tom"},{name:"Tristan la pute"},{name:"Madhvi la chaude"},{name:"Sajir encore"}],
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-01-01'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = 0; i < 1; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          //construit un nb d'item random
          // const numItems = Math.floor(Math.random() * 2);
          for (let j = 0; j < this.state.party.length; j++) {
            this.state.items[strTime].push({
              name: this.state.party[j].name + strTime,
              //créé la taille random des items
              height: Math.max(50, Math.floor(150))
            });
          }
        }
      }
      console.log(this.state.items);
      // const newItems = {};
      // Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      // this.setState({
      //   items: newItems
      // });
    }, 0);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>Rien de prévu</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
