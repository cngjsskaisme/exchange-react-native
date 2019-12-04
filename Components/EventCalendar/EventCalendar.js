import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Button, Fab } from 'native-base';
//import {Agenda} from 'react-native-calendars';
import Agenda from './CalendarSourceCode/agenda/index';
import {EventEntries} from './CalendarEventEntries'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {_handleGetEventsList} from '../ServerLib/Requests/EventCalendar/_handleGetEvents';
import LoadingPage from '../Tools/LoadingPage';


export default class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      active: false,
      EventEntries : null,
      isLoading: true,  
    };
  }


// 컴포넌트 마운트 시
async componentDidMount(){
    // 일반 사용자 모드일 때
      await _handleGetEventsList(this._onSetState); 
}

  render() {
    
    return (


      
      <Agenda
        
        /*
        items={{
          '2019-09-22': [{name: 'item 1 - any js object'}],
          '2019-09-23': [{name: 'item 3 - any js object'},{name: 'item 3 - any js object'}, {name: 'item 3 - any js object'}],
          '2019-09-24' : [],
        }}
        */
        //dayComponent={CalendarDayComponent}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        //current = {'2019-09-21'}
        //selected={'2019-09-16'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        //markingType={'custom'}
         markedDates={{
            '2019-09-08' : {},
            '2019-09-09': {textColor: '#666'},
            '2019-09-23' : {textColor : 'blue'}
        }}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
      

    );
  }

  loadItems(day) {
    
    setTimeout(() => {
      
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        for (let m = 0; m < EventEntries.length; m++) {
          if(strTime == EventEntries[m].Date){
            this.state.items[strTime] = [];
            for (let j = 0; j < EventEntries[m].Events.length; j++) {
              this.state.items[strTime].push({
                name : EventEntries[m].Events[j].title,
                eventDate : EventEntries[m].Date,
                distributor : EventEntries[m].Events[j].distributor,
                isAdmin : EventEntries[m].isAdmin,
                time : EventEntries[m].Events[j].time,
                place : EventEntries[m].Events[j].place,
                //name: 'Item for ' + strTime + ' ' + EventEntries[1].text + ' ' + strTime + ' ' + EventEntries[0].Events.length,
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
            }
          }
        }
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

/*
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
*/
  renderItem(item) {
    return (
      <View style={[styles.item,]}>
        <Text style={{fontSize : 20, paddingTop : 10, paddingLeft : 10}}>{item.time}</Text>
        <Text style={{fontSize : 30, paddingTop : 10, paddingBottom : 10, paddingLeft : 10}}>{item.name} </Text>
        <Text style={{fontSize : 20, paddingLeft : 10}}>Location : {item.place}</Text>
        <Text style={{fontSize : 20, paddingLeft : 10}}>Distributor : {item.distributor}</Text>
        <TouchableOpacity onPress={() => alert(item.name)}><Text style={{fontSize : 20, paddingTop : 10, paddingLeft : 10}}>See more info</Text></TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
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
    height : 250,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 40,

    //flex:1,
    //backgroundColor: 'gray',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  eventText : {
 
  },
  fabStyle:{

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 15,
  },
});