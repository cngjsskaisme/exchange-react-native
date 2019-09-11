/*
courseID : 각각 강의를 식별하는 ID. EvaluationInput, EvaluationList, EvaluationScreen 파일에 필요함. integer,
professorID : Foreign Key. 각각 교수님을 식별하는 id. 강의평가 데이터에 반복해도 됨. 왜냐하면 한 사람이 2수업을 가르칠 수도 있어서.
              EvaluationInput, EvaluationList, EvaluationScreen 파일에 필요함. integer,
subject : 강의 이름. string,
professor : 교수님 이름 string,
overalRating : 여러 평가를 모아서 평균 rating를 계산하는 변수. integer (0-5)
exam : 여러 시험수를 모아서 제일 많이 나타나는 number를 선택. 
        (예시 : 0,1,2,3,more 4 중에 3가 많이 나오면 3 선택) string,
assignment : 여러 과제수를 모아서 제일 많이 나타나는 number를 선택. 
        (예시 : 0,1,2,3,more 4 중에 3가 많이 나오면 3 선택)string,
difficulty : 여러 수준을 모아서 제일 많이 나타나는 수준을 선택.
        (예시 : Average이 많이 입력되면 difficulty = 'Average' : string,
grade : 여러 학점을 모아서 제일 많이 나타나는 학점을 선택. 
        (예시 : A0이 많이 입력되면 difficulty = 'Average' : string,

위 데이터들이 다 UnifiedEntries.js의 CourseRatingEntries_Mock에 있음

*** Comment Part ***
commenterID : 각각 댓글 넘긴 사람의 ID. Foreign Key. integer
commenterName : string
comment : 댓글 : String.
commenterCourseID : 강의의 id: Foreign key. integer
commenterExam : commenter가 입력한 시험수. String
commenterAssignment : commenter가 입력한 과제수. String
commenterGrade : commenter가 입력한 학점. String
commenterDifficulty : commenter가 입력한 수준. String
rating : commenter가 입력한 rating. number (0-5)

위 comment 데이터들이 아직 없음
*/



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
                title={l.subject}
                rightSubtitle={l.professor}
                rightSubtitleStyle={{textAlign:'center',alignSelf:'center'}}
                subtitle = {<FixedRatingStar 
                    ratingSize = {10}
                    onPress_status = {true}
                    value = {l.overalRating}
                />}
                onPress = {() => this.props.navigation.navigate('EvaluationScreen', {
                  itemID : l.courseID,
                  SubjectName : l.subject,
                  ProfessorName : l.professor,
                  ExamNumber : l.exam,
                  Assignment : l.assignment,
                  Star : l.overalRating,
                  Difficulty : l.difficulty,
                  Grade : l.grade,

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