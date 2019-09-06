
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ListView,
  FlatList,
  Alert,
} from 'react-native';
import propTypes from 'prop-types';
import { Button,ListItem,SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'
import FixedRatingStar from '../components/fixed_RatingStar'
import EvaluationScreen from './EvaluationScreen';

import {CourseRatingEntries_Mock} from '../../../Mockup_Datas/UnifiedEntries'

export default class EvaluationList extends Component {
    state = {
        search: '',
      };
    static navigationOptions = {
        title: 'Course Evaluation',
    };
    
    updateSearch = search => {
        this.setState({ search });
    };
    
    
  render() {
    const { search } = this.state;
 
    const list = [
        {
          name: 'Punreach RANY',
          subtitle: 'React Native'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
            name: 'Punrong Rany',
            subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Punrong Rany',
          subtitle: 'Kotlin'
        },
        {
          name: 'Lala',
          subtitle: 'Java'
        },
      ]
    return (
        <View>
            <SearchBar
                lightTheme
                round

                inputContainerStyle = {{backgroundColor : '#bdc3c7'}}
                placeholderTextColor = 'black'
                inputStyle = {{color : 'black'}}
                placeholder="Search Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <ScrollView>
            {
              /*
            list.map((l, i) => (
            <ListItem
                rounded
                key={i}
                leftIcon={{ name: 'person' }}
                title={l.subject}
                subtitle={l.subtitle}
                rightIcon={{ name:'chevron-right' }}
                onPress = {() => this.props.navigation.navigate('EvaluationScreen')}
            />
            ))
*/
            
            CourseRatingEntries_Mock.map((l, i) => (
            <ListItem
                rounded
                key={i}
                leftIcon={{ name: 'person' }}
                title={l.professor}
                subtitle={l.subject}
                rightIcon={{ name:'chevron-right' }}
                onPress = {() => this.props.navigation.navigate('EvaluationScreen', {
                  itemID : l.id,
                  SubjectName : l.subject,
                  ProfessorName : l.professor,
                  ExamNumber : l.doestest,
                  Assignment : l.homeworks

                  //more
                }
                
                )}

                
            
          
            />
            ))
            
        }
        <ListItem
                rounded
                //Empty Space
                title=''
                subtitle=''
            />
        </ScrollView>
        </View>
    );
  }
}

EvaluationList.propTypes = {

}

const styles = StyleSheet.create({
    
});