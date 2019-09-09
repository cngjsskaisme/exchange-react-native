
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
import { Container, Header, Item, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'
import NoPaddingRate from '../components/NoPaddingRate'
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
    return (
        <View>
          
            <SearchBar
                lightTheme round
                platform = "ios"
                containerStyle = {{backgroundColor : '#ffffff', borderColor : '#ffffff'}}
                inputContainerStyle = {{backgroundColor : '#ecf0f1'}}
                placeholderTextColor = 'black'
                inputStyle = {{color : 'black'}}
                placeholder="Search Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
            <ScrollView>
            {
            
            
            CourseRatingEntries_Mock.map((l, i) => (
            <ListItem
                rounded
                key={i}
                containerStyle = {{borderTopColor : '#ecf0f1', borderTopWidth : 1, borderBottomColor : '#ecf0f1', borderBottomWidth : 1, }}
                leftIcon={{ name: 'person' }}
                title={l.subject}
                rightSubtitle={l.professor}
                subtitle = {<NoPaddingRate 
                    ratingSize = {10}
                    onPress_status = {true}
                    value = {l.ratings}
                />}
                rightIcon={{ name:'chevron-right' }}
                onPress = {() => this.props.navigation.navigate('EvaluationScreen', {
                  itemID : l.id,
                  SubjectName : l.subject,
                  ProfessorName : l.professor,
                  ExamNumber : l.doestest,
                  Assignment : l.homeworks,
                  Star : l.ratings,

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