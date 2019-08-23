/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'


class BulletinBoards extends Component{

    static navigationOptions = {
        title: 'BulletinBoards Page',
      };
    
    _renderItem = ({ item }) => {
        return(
            <BulletinBoardsEntries   
                key = {item.id}
                userid = {item.userid}
                username = {item.username}
                profile = {item.profile}
                likes = {item.likes}
                date = {item.date}
                ismine = {item.ismine}
                title = {item.title}
                contents = {item.contents}
                style = {styles.BulletinBoardsEntries}/>
        )
    };

    _keyExtractor = (item, index) => item.id.toString();

    render(){
        return(
            <FlatList 
                data = {BulletinBoardsEntries_Mock}
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}/>
        );
    }
}

BulletinBoards.propTypes = {
  };

const styles = StyleSheet.create({
    BulletinBoards: {
        flexDirection: 'column',
    }
});

export default BulletinBoards;

