/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'


class BulletinBoards extends Component{

    static navigationOptions = {
        title: 'BulletinBoards Page',
      };

    render(){
        const list = BulletinBoardsEntries_Mock.map(function(entry){
            return(<BulletinBoardsEntries   userid = {entry.userid}
                                            username = {entry.username}
                                            profile = {entry.profile}
                                            likes = {entry.likes}
                                            date = {entry.date}
                                            ismine = {entry.ismine}
                                            style = {styles.BulletinBoardsEntries}/>);
        });

        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {list}
            </View>
        );
    }
}

BulletinBoards.propTypes = {
  };

const styles = StyleSheet.create({
    BulletinBoards: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BulletinBoards;