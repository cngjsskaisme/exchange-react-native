/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글에 대한 댓글들 컨테이너입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { CommentEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'

class BulletinBoardReplies extends Component{
    render(){
        const list = CommentEntries_Mock.map(function(entry){
            return(<BulletinBoardsEntries   userid = {entry.userid}
                                            username = {entry.username}
                                            profile = {entry.profile}
                                            likes = {entry.likes}
                                            date = {entry.date}
                                            ismine = {entry.ismine}/>);
        });

        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>===Comments===</Text>
                {list}
                <Text>==============</Text>
            </View>
        );
    }
}

BulletinBoardReplies.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardReplies;