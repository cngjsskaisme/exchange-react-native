/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 목록 엔트리 컴포넌트입니다. (게시판 목록의 한 칸 한 칸들)
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions, withNavigation } from 'react-navigation';
import {TouchableRipple} from 'react-native-paper'
import PostMenu from '../Tools/PostMenu';
import ConsoleLog from '../Tools/ConsoleLog';


class BulletinBoardsEntries extends Component{
    static defaultProps = {
        navigation: null,
        boardid: 0,
        entryid: 0,
        userid: 0,
        currentuserid: 0,
        username: '',
        profile: '',
        likes: 0,
        date: '2019-01-01',
        ismine: false,
        title: '',
        contents: '',
        
        _refresher: () => {}
    }

    constructor(props){
        super(props)
        this.state = {
            boardid: props.boardid,
            entryid: props.entryid, 
            userid: props.userid,
            currentuserid: props.currentuserid,
            username: props.username,
            profile: props.profile,
            likes: props.likes,
            date: props.date,
            ismine: props.ismine,
            title: props.title,
            contents: props.contents,
            isDev: props.isDev,

            _refresher: this.props._refresher,
        }
    }

    // 렌더 함수
    render(){        
        return(
            <TouchableRipple
                key={this.state.entryid}
                onPress={() => this.props.navigation.navigate('Post', { 
                    boardid: this.state.boardid,
                    entryid: this.state.entryid,
                    userid: this.state.userid,
                    currentuserid: this.state.currentuserid,
                    username: this.state.username,
                    profile: this.state.profile,
                    likes: this.state.likes,
                    date: this.state.date,
                    ismine: this.state.ismine,
                    title: this.state.title,
                    contents: this.state.contents,
                    pictures: this.state.pictures,
                    isDev: this.state.isDev,
                    
                    _refresher: this.state._refresher})}>
                <View style={styles.BulletinBoardsEntries}>
                    <Text 
                        style={styles.BulletinBoardsEntriesTitle}
                        numberOfLines= {3}
                        ellipsizeMode= {'tail'}>{this.state.title}</Text> 
                    <Text 
                        style={styles.BulletinBoardsEntriesContents}
                        numberOfLines = {5}
                        ellipsizeMode = 'tail'>{this.state.contents}</Text>
                    <Text style={styles.BulletinBoardsEntriesMetadata}> written by {this.state.username} at {this.state.date}, {this.state.likes} Likes</Text>
                    <PostMenu 
                        ismine = {this.state.ismine}
                        boardid = {this.state.boardid}
                        entryid = {this.state.entryid}
                        currentuserid = {this.state.currentuserid}
                        title = {this.state.title}
                        contents = {this.state.contents}
                        style = {styles.PostMenu}
                        
                        isBoardRoot = {true}
                        _refresher= {this.state._refresher}/>
                </View>
            </TouchableRipple>
        );
    }
}


navigateToSettings = () => {

  }
BulletinBoardsEntries.propTypes = {
    
  };

const styles = StyleSheet.create({
    BulletinBoardsEntries: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: 10,
        paddingLeft: 15,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d4d4d4',
    },
    BulletinBoardsEntriesTitle:{
        display: 'flex',
        width: '80%',
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    BulletinBoardsEntriesContents:{
        fontSize: 14,
        width: '95%',
        paddingLeft: 2,
        paddingBottom: 10
    },
    BulletinBoardsEntriesMetadata:{
        fontSize: 12,
        color: 'gray',
        textAlign: "right",
        paddingBottom: 5,
    },
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    }
});

export default withNavigation(BulletinBoardsEntries);