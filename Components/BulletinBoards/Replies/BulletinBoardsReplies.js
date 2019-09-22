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
import ErrorPage from '../../Tools/ErrorPage';
import EmptyPage from '../../Tools/EmptyPage'
import LoadingPage from '../../Tools/LoadingPage'
import ConsoleLog from '../../Tools/ConsoleLog';
import { _onGetBulletinBoardsReplies } from '../../ServerLib/ServerRequest'


class BulletinBoardsReplies extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: '',
        profile: '', 
        commentslist: null,

        //가져올 댓글의 시작, 끝 인덱스 번호 
        commentstartindex: 0, 
        commentendindex: 0,

        isLoading: true,
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
            commentslist: this.props.commentslist,
            
            //가져올 댓글의 시작, 끝 인덱스 번호 
            commentstartindex: 0,
            commentendindex: 0,

            isLoading: true,
            isDev: this.props.isDev,
            replyEditMode: false,
        }
    }

    // 데이터 요청 시 함수
    // 0. 내려보낼 _onSetState 함수
    _onSetState = (state) => {
        this.setState(state)
    }

    //컴포넌트 마운트 시
    async componentDidMount(){
        // 일반 사용자 모드일 때
        if (!this.state.isDev)
            await _onGetBulletinBoardsReplies({...this.state}, this._onSetState);
        // 개발자 모드일 떄
        else{
            this.setState({commentslist : CommentEntries_Mock})
        }
    }

    // Flatlist RenderItem 함수
    _renderItem = ({ item }) => {
        return(
            <View>
            <BulletinBoardsRepliesEntries
                key = {item.replyid}
                boardid = {item.boardid}
                entryid = {item.entryid}
                replyid = {item.replyid}
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
                {this.state.isLoading ?
                //로딩중일 시
                <LoadingPage What={'Comments'}/> :
                this.state.commentslist.length == 0 ?
                //댓글이 비어있을 시
                <EmptyPage What={'Comment'}/> :
                this.state.isError ? 
                //오류 발생 시
                <View>
                <ErrorPage/>
                </View> :
                //댓글 정상 출력
                <FlatList 
                    data = {this.state.commentslist}
                    extraData = {this.state} 
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