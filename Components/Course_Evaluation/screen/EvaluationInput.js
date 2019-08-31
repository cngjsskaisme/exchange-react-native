
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
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Picker
} from 'react-native';
import propTypes from 'prop-types';
import { Button, ButtonGroup, Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'

import RatingStar from '../components/RatingStar';
import RatingStar_Without_TextBox from '../components/RatingStar_Without_TextBox';
import Comment from '../components/Comment';
import TextBox from '../components/TextBox'

export default class EvaluationScreen extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: null,
      selectedIndex_Assignment: null,
      selectedIndex_Grade : null,
      selectedIndex_Again : null,
    }
    this.updateIndex_Exam = this.updateIndex_Exam.bind(this)
    this.updateIndex_Assignment = this.updateIndex_Assignment.bind(this)
    this.updateIndex_Grade = this.updateIndex_Grade.bind(this)
    this.updateIndex_Again = this.updateIndex_Again.bind(this)
  }
  
  updateIndex_Exam (selectedIndex_Exam) {
    this.setState({selectedIndex_Exam})
  }
  updateIndex_Assignment (selectedIndex_Assignment) {
    this.setState({selectedIndex_Assignment})
  }
  updateIndex_Grade (selectedIndex_Grade) {
    this.setState({selectedIndex_Grade})
  }
  updateIndex_Again (selectedIndex_Again) {
    this.setState({selectedIndex_Again})
  }
  Test_Button() {
    Alert.alert(
      'You need to...'
    )
    }
  render() {
    const ProfessorName = "Punreach RANY"
    const Institution = "Hanyang University"
    
    const { selectedIndex_Exam,selectedIndex_Assignment, selectedIndex_Grade, selectedIndex_Again } = this.state
    

    return (
      <ScrollView style={styles.container}>
      

      

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Text style={styles.name}>Write Your Evaluation</Text>
            </View>
          </View>


          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <View style={{alignItems : 'center', flex : 1.7}}>
                <Text style={styles.profileText}>Course </Text> 
                <Text style={styles.profileText}>Taught by </Text>  
                <Text style={styles.profileText}>Institution </Text>
                <Text style={styles.profileText}>Rating</Text>
                <Text style={styles.profileText}>Difficulty </Text>
                <Text style={styles.profileText}>Exam </Text>
                <Text style={styles.profileText}>Assignment </Text>
                <Text style={styles.profileText}>Grade</Text>
                
                <Text style={styles.profileText}>Write your comment </Text>
                
              </View>
              <View style={{alignItems : 'center', flex : 0.4}}>
    
                <Text style={styles.profileText}>:</Text>
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                <Text style={styles.profileText}>:</Text> 
                
              </View>
              <View style={{alignItems : 'center', flex : 3}}>
                <Text style={styles.profileText}>React Native</Text> 
                <Text style={styles.profileText}>{ProfessorName}</Text>  
                <Text style={styles.profileText}>{Institution}</Text>  
                <RatingStar_Without_TextBox 
                    ratingSize = {12}
                    onPress_status = {true}
                />
                <RatingStar_Without_TextBox
                    ratingSize = {12}
                    onPress_status = {true}
                />
                <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: 100, padding : 30, fontSize : 15,}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})}>

                  <Picker.Item label="0" value="None" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="More" value="More" />

                </Picker>
                <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: 100, padding : 30, fontSize : 15,}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})}>

                  <Picker.Item label="0" value="None" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="More" value="More" />


                </Picker>

                <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: 100, padding : 30, fontSize : 15,}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})}>

                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="A0" value="A0" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="B0" value="B0" />
                  <Picker.Item label="C+" value="C+" />
                  <Picker.Item label="C0" value="C0" />
                  <Picker.Item label="D+" value="D+" />
                  <Picker.Item label="D0" value="D0" />
                  <Picker.Item label="E+" value="E+" />
                  <Picker.Item label="E0" value="E+" />
                  <Picker.Item label="F" value="Failed" />



                </Picker>
               
              
                <TextInput 
                    style={{borderBottomColor: 'black', borderBottomWidth : 1, margin : 10, marginTop : 20, paddingBottom : 10, height : 100, width: '97%',alignSelf : 'flex-start', fontSize : 15,}}
                    multiline = {true}
                />
                <View style={{alignSelf : 'flex-end'}}>
                <Button
                  buttonStyle={{width : '100%'}}
                  title="Post"
                  onPress = {() => this.props.navigation.navigate('EvaluationScreen')}
                />
                </View>
                
                
              </View>
              
            </View>
            
            
          </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    height : '200%',
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