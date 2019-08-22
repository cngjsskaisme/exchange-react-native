/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 내용 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoardsReplies from './Replies/BulletinBoardsReplies'
import NavGoBack from '../NavButtons/NavGoBack';

const EditPost = ({ ismine }) => {
    if (ismine == true){
        return <Text>!!!insert edit, delete!!!</Text>
    }
}

class BulletinBoardsContent extends Component{
    defaultProps = {
        id: 0,
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
            userid: props.userid,
            username: props.username,
            profile: props.profile,
            likes: props.likes,
            date: props.date,
            ismine: props.ismine,
            title: props.title,
            contents: props.contents,
            pictures: props.pictures
            
        }
    }


    render(){
        return(
            <View>
                <Text>{this.state.userid}</Text>
                <Text>{this.state.username}</Text>
                <Text>{this.state.likes}</Text>
                <Text>{this.state.date}</Text>
                <Text>{this.EditPost}</Text>
                <Text>ReplyPanel</Text>
                <BulletinBoardsReplies parentid = {this.state.id} />
                <NavGoBack/>
            </View>
        );
    }
}

BulletinBoardsContent.propTypes = {
    
  };

export default BulletinBoardsContent;