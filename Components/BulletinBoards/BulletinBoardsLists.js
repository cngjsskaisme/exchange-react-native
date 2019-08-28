/*
작성자 : 추헌남
최초작성일 : 2019/08/28
설명 : 게시판들의 목록을 보여주는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoards from './BulletinBoards';

class BulletinBoardsLists extends Component{
    static navigationOptions = {
        title: 'BulletinBoards Lists',
      };
    
    render(){
        return(
            <BulletinBoards/>
        );
    }
}

BulletinBoardsLists.propTypes = {
    name: PropTypes.string
};

export default BulletinBoardsLists;