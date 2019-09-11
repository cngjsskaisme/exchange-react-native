/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 내용 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView, Text, View, Dimensions, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation, Header } from 'react-navigation';
import BulletinBoardsReplies from './Replies/BulletinBoardsReplies';
import PostMenu from '../Tools/PostMenu';
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import BulletinBoardsRepliesInput from './Replies/BulletinBoardsRepliesInput'
import { Divider } from 'react-native-elements';

class BulletinBoardsContent extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        userid: 0,
        currentuserid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        title: "",
        contents: "",
        pictures: "",

        keyboardHeight:0,
        normalHeight: 0,
        shortHeight: 0
    }
    
    constructor(props){
        super(props)
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            entryid: this.props.navigation.getParam('entryid'),
            userid: this.props.navigation.getParam('userid'),
            currentuserid: this.props.navigation.getParam('currentuserid'),
            username: this.props.navigation.getParam('username'),
            profile: this.props.navigation.getParam('profile'),
            likes: this.props.navigation.getParam('likes'),
            date: this.props.navigation.getParam('date'),
            ismine: this.props.navigation.getParam('ismine'),
            title: this.props.navigation.getParam('title'),
            contents: this.props.navigation.getParam('contents'),
            pictures: this.props.navigation.getParam('pictures'),

            keyboardHeight: 0,
            normalHeight: 0,
            shortHeight: 0,
            isdev: this.props.navigation.getParam('isDev')
        }
    }

    // 렌더 함수
    render(){
        return(
            // 게시글의 상세 내용과 댓글들을 보여주는 컴포넌트. 각 내용의 컴포넌트, BulletinBoardsReplies 컴포넌트, KeyboardAvoidingView 속 댓글 입력 컴포넌트로 구성됨
            <View style={styles.Container}>
                <ScrollView>
                    <View style={styles.EntryTitle}>
                        <TitleBold fontSize={25}>{this.state.title}</TitleBold>
                        <MetaLight>by {this.state.username}, {this.state.date}, {this.state.likes} Likes</MetaLight>
                    </View>
                    <View style={styles.EntryContent}>
                        <ContentMedium>{this.state.contents}</ContentMedium>                        
                    </View>
                    <Divider />
                        <PostMenu
                            ismine = {this.state.ismine}
                            style = {styles.PostMenu}
                            props = {this.state}
                            />
                    <View style={styles.EntryReplies}>
                        <BulletinBoardsReplies
                            boardid = {this.state.boardid}
                            entryid = {this.state.entryid}
                            userid = {this.state.userid}
                            username = {this.state.username}
                            profile = {this.state.profile}
                            isDev = {this.state.isdev}/>
                    </View>
                </ScrollView>
                <KeyboardAvoidingView
                    behavior='padding' 
                    style={styles.container}
                    keyboardVerticalOffset = {Header.HEIGHT + 40}>
                    <BulletinBoardsRepliesInput
                            boardid = {this.state.boardid}
                            entryid = {this.state.entryid}
                            userid = {this.state.userid}
                            currentuserid = {this.state.currentuserid}
                            username = {this.state.username}
                            profile = {this.state.profile}/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


BulletinBoardsContent.propTypes = {
    
  };


  const styles = StyleSheet.create({
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    },
    Container:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        padding: 15
    },
    BottomInput: {
        position: 'absolute',
        alignSelf: 'flex-end',
        margin: 0,
        bottom: 0,
    },
    EntryTitle: {
        paddingBottom: 10,
    },
    EntryContent: {
        paddingBottom: 15,
    },
    EntryReplies: {
        paddingTop: 10,
    }
});

export default withNavigation(BulletinBoardsContent);