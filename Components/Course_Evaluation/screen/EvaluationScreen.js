
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
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'
import FixedRatingStar from '../components/fixed_RatingStar'
import LoadingScreen from './LoadingScreen'

import {CourseRatingEntries_Mock} from '../../../Mockup_Datas/UnifiedEntries'


class EvaluationScreen extends Component {

  Test_Button() {
    Alert.alert(
      'You need to...'
   )
  }

  render() {
    const {navigation, subject, professor, place, exam, assignment, grade, again, text} = this.props;

    const itemID = navigation.getParam('itemID', 'NO-ID')
    const SubjectName = navigation.getParam('SubjectName', 'NO-NAME')|| subject || 'React Native'
    const ProfessorName = navigation.getParam('ProfessorName', 'NO-NAME') || professor || "Punreach RANY" 
    const Institution = place || "Hanyang University"
    const ExamNumber = navigation.getParam('ExamNumber', 'NO-ID') || exam || 2
    const Assignment = navigation.getParam('Assignment', 'NO-ID') || assignment || 2
    const Star = navigation.getParam('Star', 5)
    const Grade = grade || 'A+'
    const Again = again ||  'Yes'
    const i = 0

    

    return (
      <ScrollView style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>{SubjectName}</Text>
            </View>
          </View>


          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <View style={{alignItems : 'center', flex : 2}}>
                <Text style={styles.profileText}>Taught by </Text>  
                <Text style={styles.profileText}>Institution </Text>
                <Text style={styles.profileText}>Rating</Text>
                <Text style={styles.profileText}>Difficulty </Text>
                <Text style={styles.profileText}>Exam </Text>
                <Text style={styles.profileText}>Assignment </Text>
                <Text style={styles.profileText}>Average Grade</Text>
                <Button
                  icon={
                    <Icon
                      name="pencil"
                      size={15}
                      color="white"
                    />
                  }
                  title=" Write my evaluation"
                  onPress = {() => this.props.navigation.navigate('EvaluationInput',
                    {
                      SubjectName : SubjectName,
                      ProfessorName : ProfessorName,
                    }
                  )}
                />
              </View>
              <View style={{alignItems : 'center', flex : 0.5}}>
                <Text style={styles.profileText}>:</Text>  
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text>  
                
              </View>
              <View style={{alignItems : 'center', flex : 3}}>
                <Text style={styles.profileText}>{ProfessorName}</Text>  
                <Text style={styles.profileText}>{Institution}</Text>  
                <FixedRatingStar 
                    ratingSize = {10}
                    onPress_status = {true}
                    value = {Star}

                />
                <FixedRatingStar 
                    ratingSize = {10}
                    onPress_status = {true}
                    value = {5}
                    starText = {["Easy", "Okay", "Average", "Hard","Crazy"]}
                    color = {["#2ecc71", "#3498db","#f1c40f","#e67e22","red"]}

                />
                <Text style={styles.profileText}>{ExamNumber}</Text>
                <Text style={styles.profileText}>{Assignment}</Text>
                <Text style={styles.profileText}>{Grade}</Text>
                
              </View>
              
            </View>
            
            
          </View>

          <View style={styles.body}>
            
            <View style={styles.bodyContent}>
              <View style={styles.commentTitle}><Text style={{fontSize : 15, fontWeight:'bold'}}>Comments</Text></View>
              <Comment />
              <Comment 
                person = "Kevin lala"
                cmtText = "If you prefer to exclude prop-types from your application and use it globally via window.PropTypes, the prop-types package provides single-file distributions, which are hosted on the following CDNs:"
              />
              <Comment 
                person = "Hellay Cool"
              />
              <Comment />
              <Comment />
              <Comment />
              <View style={styles.bottomPart}>
                
              <Button
                  title="More comments"
                  onPress = {() => this.Test_Button()}
                />
                
                
              </View>
              
              
            </View>
         </View>
      </ScrollView>
    );
  }
}

EvaluationScreen.propTypes = {
  professor : propTypes.string, 
  place :  propTypes.string, 
  exam : propTypes.number, 
  assignment : propTypes.number, 
  grade : propTypes.string, 
  again : propTypes.string,
  text : propTypes.string,
  subject : propTypes.string,
  //navigation : propTypes.
}

const RootNavigator = createSwitchNavigator({
  EvaluationScreen: EvaluationScreen,
  LoadingScreen: LoadingScreen
}, {
  initialRouteName: 'LoadingScreen'
});

export default createAppContainer(RootNavigator);

const styles = StyleSheet.create({
    container : {
        flex : 1,
        height : '100%',
        width : '100%'
    },
    bottomPart : { 
      width : '100%',
      flexDirection : 'row',
      padding : 15,      
    },
    profileText : {
      fontSize : 15,
      fontWeight : 'bold',
      paddingBottom : 20,
      paddingLeft : 10,
      paddingRight : 10,
      paddingTop : 20,
    } ,
  header:{
    backgroundColor: "#00CED1",
    height : 150,
    alignContent : 'center',
    alignItems : 'center',
    //zIndex : 2,
    marginBottom : "100%"
  },
  headerContent:{
    
    alignItems: 'center',
    //zIndex : 2,
  },

  profileDetail:{
    flex : 1,
    width : "95%",
    alignSelf: 'center',
    marginTop: "15%",

    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: '#d6d7da',
    borderRadius : 10,
    zIndex : 1,
    alignContent : 'center'
    
  },
  detailContent:{
    flex : 1,
    justifyContent: 'space-between',
    width : "98%",
    margin: "1%",
    flexDirection : 'row',
    alignItems: 'flex-start',
    alignContent : 'center',
    alignSelf : 'center',
    //borderWidth: 0.5,
    //borderColor: '#d6d7da',
    //borderRadius : 10,
   
    //zIndex : 1,
  },
  body : {
    //zIndex : 1,
    //height : '100%',
    alignItems : 'center'
    
  },
  bodyContent: {
    width : '95%',
    flex: 1,
    alignItems: 'flex-start',
    //padding:30,
    marginTop : "15%",
    borderWidth: 2,
    borderColor: '#d6d7da',
    borderRadius : 10,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:20,
    color:"#FFFFFF",
    fontWeight:'600',
    paddingTop:'5%',
    zIndex : 2,
  },
  commentTitle : {
    alignSelf : 'center',
    padding : 15,
  },
  title:{
    fontSize:15,
    color: "#00CED1"
  },
  
  count:{
    fontSize:15,
  },
 
  textInfo:{
    fontSize:15,
    marginTop:20,
    color: "black",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:15,
    color: "black",
    marginTop:10,
    textAlign: 'center'
  },
});