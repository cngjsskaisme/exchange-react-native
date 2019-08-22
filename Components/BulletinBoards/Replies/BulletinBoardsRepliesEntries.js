/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시판 댓글을 표시하는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class BulletinBoardRepliesEntries extends Component{
    static defaultProps = {
        id: 0,
        userid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        contents: "",
        pictures: ""
    }

    constructor(props){
        super(props);
        this.state = {
            ...this.props
        }
    }

    render(){
        return(
            <View>
                <Text>{this.state.id}</Text>
                <Text>{this.state.userid}</Text>
                <Text>{this.state.username}</Text>
                <Text>{this.state.profile}</Text>
                <Text>{this.state.likes}</Text>
                <Text>{this.state.date}</Text>
                <Text>{this.state.ismine}</Text>
                <Text>{this.state.contents}</Text>
                <Text>{this.state.pictures}</Text>
            </View>
        );
    }
}

BulletinBoardRepliesEntries.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardRepliesEntries;