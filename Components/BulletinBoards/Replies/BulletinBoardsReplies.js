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
import ErrorPage from '../../Tools/ErrorPage';
import ConsoleLog from '../../Tools/ConsoleLog';


class BulletinBoardsReplies extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: '',
        profile: '', 

        //가져올 댓글의 시작, 끝 인덱스 번호 
        commentstartindex: 0, 
        commentendindex: 19,

        isDev: false,
        replyEditMode: false,
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            
            //가져올 댓글의 시작, 끝 인덱스 번호 
            commentstartindex: this.props.commentstartindex, 
            commentendindex: this.props.commentendindex,             

            isDev: this.props.isDev,
            replyEditMode: false,
        }
    }

    //데이터 요청 시 함수
    // 1. 댓글 목록 얻기 요청
    _onGetComments = async () => {   
        var url = server.serverURL + '/process/ShowComments';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: this.state.userid, boardid: this.state.boardid, 
            entryid: this.state.entryid, 
            commentstartindex: this.state.commentstartindex, commentendindex: this.state.commentendindex}) 

            .then((response) => {       
                this.setState({ 
                commentslist: response.data.commentslist,
                isLoading: false
                }) 
            }) 
            .catch(( err ) => {
                Alert.alert(
                    'Cannot connect to the server.',
                    'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                    [{text: 'OK'}]
                );
            this.setState({
                isError: true
            })
        });    
    }

    //컴포넌트 마운트 시
    async componentDidMount(){
        // 일반 사용자 모드일 때
        if (!this.state.isDev)
            await this. _onGetComments();
        // 개발자 모드일 떄
        else{
            this.setState({commentslist : CommentEntries_Mock})
        }
    }
   


    // Flatlist RenderItem 함수
    _renderItem = ({ item }) => {
        return(
            <View>
            <ConsoleLog>{this.props}</ConsoleLog>
            <BulletinBoardsRepliesEntries
                _handleReplyEdit = {this._handleReplyEdit}

                key = {item.replyid}
                boardid = {item.boardid}
                entryid = {item.entryid}
                userid = {item.userid}
                username = {item.username}
                profile = {item.profile}
                likes = {item.likes}
                date = {item.date}
                ismine = {item.ismine}
                title = {''}
                contents = {item.contents}
                pictures = {item.pictures}
                
                replyEditMode = {this.state.replyEditMode}/>
                </View>
        )
    };

    // Flatlist keyExtractor 함수
    _keyExtractor = (item, index) => item.replyid.toString();

    // 페이지 렌더 함수
    render(){
        return(
            <View>
                {this.state.isError ? 
                    //오류 발생 시
                    <View>
                    <ErrorPage/>
                    </View> :
                    //댓글 정상 출력
                    <FlatList 
                        data = {this.state.commentslist} 
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}/>
                }
            </View>
        );
    }
}

BulletinBoardsReplies.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardsReplies;