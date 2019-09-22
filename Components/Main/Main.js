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
import Pagination from 'react-native-snap-carousel'
import { _onGetBulletinBoardsPost } from '../ServerLib/ServerRequest'
import LoadingPage from '../Tools/LoadingPage';
import ErrorPage from '../Tools/ErrorPage';
import { Button } from 'react-native-paper';
import {Dimensions } from "react-native";

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

    async componentDidMount() {
      await _onGetBulletinBoardsPost({...this.state}, this._onSetState, false, '', '', true);
    }

    _onSetState = (state) => {
      this.setState({
        ...state
      });
    }

    _renderItem = ({ item }) => { 
      return(
        <MainCard
          title = {item.title}
          contents = {item.contents}
          pictures = {item.pictures}
          date = {item.date} />
      )
  };
    
    _keyExtractor = (item, index) => item.entryid.toString();

    render(){
      const screenWidth = Math.round(Dimensions.get('window').width);

      if(this.state.isLoading)
        return (<LoadingPage What='Main Page'/>)
      if(this.state.isError){
        return(
          <View>
            <ErrorPage What='Main Page'/>
            <Button onPress={() => _onGetBulletinBoardsPost({...this.state}, this._onSetState, false, '', '', true)}>Reload</Button>
          </View>
        )
      }
      else
        return (
            <ScrollView style={styles.container}>
              <Carousel
                ref={(c) => { this._carousel = c; }}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                data={this.state.entrieslist}
                renderItem={this._renderItem}
                sliderWidth={screenWidth}
                itemWidth={340}
              />
            </ScrollView>
          );
        }
      };
      
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 15,
    },
    cards:{
      justifyContent: 'center',
    }
  });

Main.propTypes = {
    
  };

export default Main;