/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글에 대한 댓글들 컨테이너입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { CommentEntries_Mock }  from '../../../Mockup_Datas/UnifiedEntries'
import BulletinBoardsRepliesEntries from './BulletinBoardsRepliesEntries'
import BulletinBoardsRepliesInput from './BulletinBoardsRepliesInput';

class BulletinBoardsReplies extends Component{
    static defaultProps = {
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: '',
        profile: ''
    }

    constructor(props){
        super(props);
        this.state = {
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile
        }
    }

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
            <View>
                <Text>===Comments===</Text>
                <BulletinBoardsRepliesInput
                    entryid = {this.state.entryid}
                    userid = {this.state.userid}
                    username = {this.state.username}
                    profile = {this.state.profile}/>
                    
                <FlatList 
                    data = {CommentEntries_Mock} // !!!!<-- 창희야 여기에 json 댓글을 반환해야 돼!!!! //
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}/>
                <Text>==============</Text>
            </View>
        );
    }
}

BulletinBoardsReplies.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardsReplies;