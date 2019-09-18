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
import MainCard from './MainCard';
import Carousel from 'react-native-snap-carousel';


class Main extends Component{
    static navigationOptions = {
        title: 'Main Page',
      };
    

    
    render(){
      /*<Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
              />*/
        return (
            <ScrollView style={styles.container}>
              
                <MainCard/>
            </ScrollView>
          );
        }
      };
      
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 15,
      paddingLeft: 15,
    },
    cards:{
      justifyContent: 'center',
    }
  });

Main.propTypes = {
    
  };

export default Main;