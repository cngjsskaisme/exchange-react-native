/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 목록 엔트리 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Dimensions, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions, withNavigation } from 'react-navigation';
import {TouchableRipple} from 'react-native-paper'
import PostMenu from '../PostMenu';


class BulletinBoardsEntries extends Component{
    static defaultProps = {
        navigation: null,
        boardid: 0,
        entryid: 0,
        userid: 0,
        username: '',
        profile: '',
        likes: 0,
        date: '2019-01-01',
        ismine: false,
        title: '',
        contents: ''
    }

    constructor(props){
        super(props)
        this.state = {
            boardid: props.boardid,
            entryid: props.key, 
            userid: props.userid,
            username: props.username,
            profile: props.profile,
            likes: props.likes,
            date: props.date,
            ismine: props.ismine,
            title: props.title,
            contents: props.contents
        }
    }

    _handlePress = () => {
        
    };

    render(){
        return(
            <TouchableRipple key={this.state.entryid} 
                                    onPress={() => this.props.navigation.navigate('Post', { 
                                                                                    boardid: this.state.boardid,
                                                                                    entryid: this.state.entryid,
                                                                                    userid: this.state.userid,
                                                                                    username: this.state.username,
                                                                                    profile: this.state.profile,
                                                                                    likes: this.state.likes,
                                                                                    date: this.state.date,
                                                                                    ismine: this.state.ismine,
                                                                                    title: this.state.title,
                                                                                    contents: this.state.contents,
                                                                                    pictures: this.state.pictures})}>
                <View style={styles.BulletinBoardsEntries}>
                    <Text style={styles.BulletinBoardsEntriesTitle}>{this.state.title}</Text> 
                    <Text style={styles.BulletinBoardsEntriesContents}>  {this.state.contents} </Text>
                    <Text style={styles.BulletinBoardsEntriesMetadata}> written by {this.state.username} at {this.state.date}, {this.state.likes} Likes</Text>
                    <PostMenu ismine = {this.state.ismine} style={styles.PostMenu}/>
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
        height: 90,
        paddingTop: '2%',
        paddingLeft: '3%',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d4d4d4',
    },
    BulletinBoardsEntriesTitle:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 3,
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 3
    },
    BulletinBoardsEntriesContents:{
        flex: 5,
        fontSize: 14,
    },
    BulletinBoardsEntriesMetadata:{
        flex: 2,
        fontSize: 12,
        color: 'gray',
        textAlign: "right",
        paddingBottom: 5
    },
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    }
});

export default withNavigation(BulletinBoardsEntries);