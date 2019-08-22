/*
작성자 : 추헌남
최초작성일 : 2019/08/20
설명 : 게시판 게시글 목록 엔트리 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoardContentEntries_Mock from '../../Mockup_Datas/UnifiedEntries'
import { withNavigation } from 'react-navigation';


class BulletinBoardsEntries extends Component{
    static defaultProps = {
        userid: null,
        username: null,
        profile: null,
        likes: null,
        date: null,
        ismine: false
    }
    
    constructor(props){
        super(props)
        this.state = {
            userid: props.userid,
            username: props.username,
            profile: props.profile,
            likes: props.likes,
            date: props.date,
            ismine: props.ismine
        }
    }

    render(){
        const EditPost = ({ ismine }) => {
            if (ismine){
                return <Text>!!!In triple dots, Insert edit menu.!!!</Text>
            }
        }

        return(
            <View style={styles.BulletinBoardsEntries}>
                <Text>{this.state.userid}</Text>
                <Text>{this.state.username}</Text>
                <Text>{this.state.likes}</Text>
                <Text>{this.state.date}</Text>
                {EditPost(this.state.ismine)}
            </View>
        );
    }
}

BulletinBoardsEntries.propTypes = {
    
  };

const styles = StyleSheet.create({
    BulletinBoardsEntries: {
        width: '90%',
        height: '15%',
        margin: "2%",
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 10
    }
});

export default BulletinBoardsEntries;