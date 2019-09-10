/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글에 대한 댓글들 컨테이너입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { CommentEntries_Mock }  from '../../../Mockup_Datas/UnifiedEntries'; 
import BulletinBoardsRepliesEntries from './BulletinBoardsRepliesEntries'; 
import axios from 'axios'; 
import {server} from '../../ServerLib/config';


class BulletinBoardsReplies extends Component{
    static defaultProps = {
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: '',
        profile: '', 
        //가져올 댓글의 시작, 끝 인덱스 번호 
        commentstartindex: 0, 
        commentendindex: 19,
    }

    constructor(props){
        super(props);
        this.state = {
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            //가져올 댓글의 시작, 끝 인덱스 번호 
            commentstartindex: this.props.commentstartindex, 
            commentendindex: this.props.commentendindex,             
        }
    }

    //데이터 받아오기 시작 
    _onGetComments = async () => {   
        var url = server.serverURL + '/process/ShowComments';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: "5d5373177443381df03f3040", boardid: "board1", 
            entryid: "5d75a757d47cdf78a5ce79d1", 
            commentstartindex: this.state.commentstartindex, commentendindex: this.state.commentendindex}) 

            .then((response) => {       
                this.setState({ 
                commentslist: response.data.commentslist,
                isLoading: false
                }) 
            }) 
            .catch(( err ) => {
                Alert.alert(
                    'Cannot connect to the server. Falling back to default option.',
                    'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                    [{text: 'OK'}]
                );
            this.setState({
                commentslist: CommentEntries_Mock,
                isError: true
            })
        });    
    }
    async componentDidMount(){
      await this. _onGetComments(); 
    }
    //데이터 받아오기 끝 



    _renderItem = ({ item }) => {
        return(
            <BulletinBoardsRepliesEntries
                key = {item.replyid}
                boardid = {item.boardid}
                entryid = {item.entryid}
                userid = {item.userid}
                username = {item.username}
                profile = {item.profile}
                likes = {item.likes}
                date = {item.date}
                ismine = {item.ismine}
                contents = {item.contents}
                pictures = {item.pictures}/>
        )
    };

    _keyExtractor = (item, index) => item.replyid.toString();

    render(){
        return(
            <FlatList 
                data = {this.state.commentslist} 
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}/>
        );
    }
}

BulletinBoardsReplies.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardsReplies;