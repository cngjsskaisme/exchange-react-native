/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 내용 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import BulletinBoardsReplies from './Replies/BulletinBoardsReplies';
import PostMenu from '../PostMenu';


class BulletinBoardsContent extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        userid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        title: "",
        contents: "",
        pictures: ""
    }
    
    constructor(props){
        super(props)
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            entryid: this.props.navigation.getParam('entryid'),
            userid: this.props.navigation.getParam('userid'),
            username: this.props.navigation.getParam('username'),
            profile: this.props.navigation.getParam('profile'),
            likes: this.props.navigation.getParam('likes'),
            date: this.props.navigation.getParam('date'),
            ismine: this.props.navigation.getParam('ismine'),
            title: this.props.navigation.getParam('title'),
            contents: this.props.navigation.getParam('contents'),
            pictures: this.props.navigation.getParam('pictures')
        }
    }


    render(){
        return(
            <ScrollView>
                <Text>Username : {this.state.username}</Text>
                <Text>{this.state.likes} Likes</Text>
                <Text>Written at {this.state.date}</Text>
                <Text>{this.state.contents}</Text>
                <PostMenu ismine = {this.state.ismine}/>
                <BulletinBoardsReplies
                    parentid = {this.state.id}
                    userid = '10'
                    username = 'testing'
                    profile = 'hello'/>
            </ScrollView>
        );
    }
}

//<BulletinBoardsReplies parentid = {this.state.id} />

BulletinBoardsContent.propTypes = {
    
  };

export default withNavigation(BulletinBoardsContent);