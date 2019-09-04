/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { FAB } from 'react-native-paper'
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'
import { withNavigation } from 'react-navigation';


class BulletinBoards extends Component{

    static navigationOptions = {
        title: 'BulletinBoards 0',
      };

    static defaultProp = {
        boardid: 0
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.navigation.getParam('boardid')
        }
    }
    
    _renderItem = ({ item }) => {
        return(
            <BulletinBoardsEntries
                key = {item.entryid}
                boardid = {item.boardid}
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

    _keyExtractor = (item, index) => item.entryid.toString();

    render(){
        return([
            <FlatList 
                data = {BulletinBoardsEntries_Mock}
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}
                onRefresh = {() => {}}
                refreshing = {false}/>, 
            
            <FAB
                style={styles.Floating}
                icon='add'
                onPress={() => this.props.navigation.navigate('EntryEdit', { 
                    boardid: this.state.boardid,
                    userid: this.state.userid,
                    username: this.state.username,
                    profile: this.state.profile})} />
            ]
        );
    }
}

BulletinBoards.propTypes = {
  };

const styles = StyleSheet.create({
    BulletinBoards: {
        flexDirection: 'column',
    },
    Floating: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
});

export default withNavigation(BulletinBoards);

