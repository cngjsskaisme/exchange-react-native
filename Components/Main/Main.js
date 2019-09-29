/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 추헌남
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    받지 않습니다. (아직까진)
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import MainCarousel from './MainCarousel';
import MainGuides from './MainGuides';

class Main extends Component{
    static navigationOptions = {
        title: 'Main Page',
      };
    
    static defaultProps = {
      currentuserid : 0,
      userid: 0,
      boardid: 0,
      entrieslist: [],

      isLoading: true,
      isError: false,
      isSearching: false,
    }

    constructor(props){
      super(props);
      this.state = {
        currentuserid : "5d5373177443381df03f3040",
        userid: '5d5373177443381df03f3040',
        boardid : 'notifications',
        entrieslist: [],

        isLoading: true,
      }
    }

    _onSetState = (state) => {
      this.setState({
        ...state
      });
    }

    render(){
        return (
            <ScrollView>
              <View style={styles.container}>
                <MainCarousel/> 
                <MainGuides/>
              </View>
            </ScrollView>
          );
        }
      };
      
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 15,
      alignItems: "center",
    },
    cards:{
      justifyContent: 'center',
    }
  });

Main.propTypes = {
    
  };

export default Main;