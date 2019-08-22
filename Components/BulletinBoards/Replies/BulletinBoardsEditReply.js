/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 댓글을 수정하는 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class BulletinBoardEditReply extends Component{
    render(){
        return(
            <View></View>
        );
    }
}

BulletinBoardEditReply.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardEditReply;