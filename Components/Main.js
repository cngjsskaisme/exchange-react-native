/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 추헌남
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    받지 않습니다. (아직까진)
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Fragment } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Main.styles'
import GlobalStyles from '../Styles/styles'
import MainCards from './MainCards';
import MainCarousel from './MainCarousel';
import MainHeader from './MainHeader';

class Main extends Component{
    static navigationOptions = {
        title: 'Main Page',
      };
    
    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: '100%', height: 200, backgroundColor: 'powderblue'}}>
                    <Text>Carousel 파트</Text>
                </View>
                <View style={{width: '100%', height: 600, backgroundColor: 'skyblue'}}>
                    <Text>Content (CSS 개짜증)</Text>
                </View>
            </View>
          );
        }
      };
      
  
  const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    case1: {
      flex: 1,
      height: "20%",
      backgroundColor: 'red',
    },
    case2: {
      flex: 3,
      height: '40%',
      backgroundColor: 'green',
    },
    case3: {
      flex: 1,
      backgroundColor: 'blue',
    },
  });

Main.propTypes = {
    
  };

export default Main;