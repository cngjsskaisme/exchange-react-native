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

class Main extends Component{
    static navigationOptions = {
        title: 'Main Page',
      };
    
    render(){
        return (
            <ScrollView style={styles.container}>
                <FlatList 
                  style={styles.carausel}
                  horizontal={true}>
                    <Text>Carousel 파트</Text>
                </FlatList>
                <View style={styles.boardpost}>
                    <Text>Content (CSS 개짜증)</Text>
                </View>
            </ScrollView>
          );
        }
      };
      
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    carausel: {
    },
    boardpost:{

    }
  });

Main.propTypes = {
    
  };

export default Main;