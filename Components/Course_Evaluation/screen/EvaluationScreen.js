
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
import { Fab } from 'native-base';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'
import FixedRatingStar from '../components/fixed_RatingStar'
import LoadingScreen from './LoadingScreen'

import {CourseRatingEntries_Mock} from '../../../Mockup_Datas/UnifiedEntries'

//related to data transfer - start
import axios from 'axios'; 
import {server} from '../../ServerLib/config'; 
axios.defaults.timeout = 5000;
//related to data transfer - end

//loading page from 헌남 
import LoadingPage from '../../Tools/LoadingPage'

class EvaluationScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false, 
      // To indicate the start/end index of array that includes commentslist.  
      // CommentslistAmount: Amount of comments that will be shown in one screen 
      // At first, the server is requested to send 20 comments that written most recent time.
      CommentslistStartIndex: 0, 
      CommentslistEndIndex: 19,
      CommentslistAmount: 20, 
      courseid: this.props.navigation.getParam('itemID', 'NO-ID'),
      commentslist: null,   
      isLoading: true
    };
  }

  Test_Button() {
    Alert.alert(
      'You need to...'
   )
  } 

  /*
  data request function - start
   1. Get 20 elements from 'courseslist' array whoose start/end indexes are courseliststartindex/courselistendindex
    You need to pass to me: 
    userid: specifies current userid. located: x. (헌남 also didn't do this part.)
  */ 
   _handleGetCommentsList = async () => {
    var url = server.serverURL + '/process/CourseEvaluation/ShowCommentsList';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
        courseid: this.state.courseid,  
        userid: "5d5373177443381df03f3040",
        commentsliststartindex: this.state.CommentslistStartIndex, 
        commentslistendindex: this.state.CommentslistEndIndex}) 
        .then((response) => {       
            this.setState({
              commentslist: response.data.commentslist, 
              isLoading: false
            });  
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            ); 
        });    
    }

  // 2. Get Next 20 elements from courseslist 
  _handleGetNextCommentsList = async() => {
    await this.setState({
      CommentslistStartIndex: this.state.CommentslistEndIndex + 1, 
      CommentslistEndIndex: this.state.CommentslistEndIndex + this.state.CommentslistAmount
    }) 
    await this._handleGetCommentsList();
  }

  // It is necessary to execute '_handleGetCommentsList' 
  async componentDidMount(){  
    await this._handleGetCommentsList(); 
  }   

  // It is necessary to execute '_handleGetCommentsList' 
  async componentDidMount(){  
    await this._handleGetCommentsList(); 
  }
  
  _handletest = async () => {
    var url = server.serverURL + '/process/EventCalendar/EditEvent';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
       eventid: "000000000000000000000000", title: "Official& type1 test title3", contents: "Official& type1 test contents3"}) 
        .then((response) => {       
            this.setState({ 
              isLoading: false
            });  
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            ); 
        });    
    }

    
//data request function - end 


  render() {
    const {navigation, subject, professor, place, exam, assignment, grade, again, text, difficulty} = this.props;

    const itemID = navigation.getParam('itemID', 'NO-ID')
    const SubjectName = navigation.getParam('SubjectName', 'NO-NAME')|| subject || 'React Native'
    const ProfessorName = navigation.getParam('ProfessorName', 'NO-NAME') || professor || "Punreach RANY" 
    //institutation 부분 수정 - ChangHee
    const Institution = navigation.getParam('Place')|| place || "Hanyang University"
    const ExamNumber = navigation.getParam('ExamNumber', 'NO-ID') || exam || 2
    const Assignment = navigation.getParam('Assignment', 'NO-ID') || assignment || 2
    const Star = navigation.getParam('Star', 5)
    const Difficulty = navigation.getParam('Difficulty', 'Easy')
    const Grade = navigation.getParam('Grade', 'A+')
    const Again = again ||  'Yes'
    const i = 0
    
    return (
      <View style={styles.container}>

      
      <ScrollView style={styles.container}>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>{SubjectName}</Text>
            </View>
          </View>


          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>

              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Taught by</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText,{textAlign:'center'}]}>{ProfessorName}</Text>
                </View> 
              </View>

              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Institution</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText,{textAlign:'center'}]}>{Institution}</Text>
                </View> 
              </View>

              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Rating</Text></View>
                <View style={styles.boxTwo}>
                  <View style = {{paddingLeft : 10, paddingRight : 10, paddingTop : 20,alignItems : 'center'}}>
                    <FixedRatingStar 
                        ratingSize = {10}
                        onPress_status = {true}
                        value = {Star}

                    />
                  </View>
                </View> 
              </View>

              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Difficulty</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText,{textAlign:'center'}]}>{Difficulty}</Text>
                </View> 
              </View>

              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Exam</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText, {textAlign:'center'}]}>{ExamNumber}</Text>
                </View> 
              </View>
              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Assignment</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText,{textAlign:'center'}]}>{Assignment}</Text>
                </View> 
              </View>
              <View style={[styles.cellTwo, styles.base]}>
                <View style={styles.boxOne}><Text style={[styles.boxText, {color : '#7f8c8d'}]}>Average Grade</Text></View>
                <View style={styles.boxTwo}>
                  <Text style = {[styles.boxText,{textAlign:'center'}]}>{Grade}</Text>
                </View> 
              </View>  
            </View>
            
            
          </View>

          <View style={styles.body}>
            
            <View style={styles.bodyContent}>
              <View style={styles.commentTitle}><Text style={{fontSize : 15, fontWeight:'bold'}}>Comments</Text></View>
              { 
                //Since 'commentslist' is also array, I changed this part into a 'map'. - ChangeHee
                this.state.isLoading ? <LoadingPage/>: 
                  
                  //If there's no comment - ChangeHee
                  this.state.commentslist.length <=0 ? 
                    <View> 
                      <Text> 
                        There's no comment
                      </Text> 
                    </View>
                  :this.state.commentslist.map( (l) => (
                    <Comment 
                    person = {l.username}
                    cmtText = {l.contents} 
                    key = {l.commentid} 
                    userid = {l.userid}
                    Star={l.rating} 
                    ismine = {l.ismine}
                    NumberLike = {l.likes}
                  /> 
                  ))
              }
              <View style={styles.bottomPart}>  
                <Button
                    title="More comments"
                    onPress = {this._handletest.bind(this)}
                  /> 
              </View>
            </View>
         </View>
      </ScrollView>
      <Fab
            active={this.state.active}
            direction="up"
            containerStyle={styles.fabStyle }
            style={{ backgroundColor: '#e74c3c' }}
            position="bottomRight"
            //onPress={() => this.setState({ active: !this.state.active })}
            onPress = {() => this.props.navigation.navigate('EvaluationInput',
                    {
                      SubjectName : SubjectName,
                      ProfessorName : ProfessorName,
                    }
                  )}
            >
            
            <Icon name="add" type="material"/>
      </Fab>
      
      </View>
    );
  }
}

EvaluationScreen.propTypes = {
  professor : propTypes.string, 
  place :  propTypes.string, 
  exam : propTypes.number, 
  assignment : propTypes.number, 
  difficulty : propTypes.string,
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
  base : {
    padding : 10,
  },
  cellTwo : {
    flex : 1,
    flexDirection : 'row',
    alignContent : 'center'
  },

  boxOne : {
    flex : 2,

    alignContent : 'center'
  },
  
  boxTwo : {
    flex : 3,
    //flexDirection : 'row',
    alignContent : 'center',
    //alignItems : 'center',
    //justifyContent: 'center',


    
  },
  boxText : {
    fontSize : 15,
    fontWeight : 'bold',
    //paddingBottom : 20,
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop : 20,
  },

  name:{
    fontSize:20,
    fontWeight:'600',
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

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
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
    flexDirection : 'column',
    justifyContent: 'space-between',
    width : "98%",
    margin: "1%",
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
    //marginTop : "3%",
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
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
}
});