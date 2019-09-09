import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarScreen from './screen/CalendarScreen'
import ViewInventoryMain from './screen/ViewInventoryMain'
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'


class EventCalendar extends Component{
  render(){
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
    CalendarScreen  : CalendarScreen,
    ViewInventoryMain : ViewInventoryMain,
    
})

const AppContainer = createAppContainer(AppStackNavigator)

export default AppContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
