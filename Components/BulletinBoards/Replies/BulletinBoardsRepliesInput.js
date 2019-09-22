/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 게시판 댓글 달 수 있는 입력 칸입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput, IconButton, Colors } from 'react-native-paper'
import axios from 'axios'; 
import {server} from '../../ServerLib/config';
import { _onAddBulletinBoardsReplies } from '../../ServerLib/ServerRequest'

class BulletinBoardsRepliesInput extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        currentuserid: 0,
        username: '',
        profile: '',
        contents: '',
        
        replyEditMode: false,
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            currentuserid: this.props.currentuserid,
            username: this.props.username,
            profile: this.props.profile,
            contents: '',

            replyEditMode: this.props.replyEditMode,
        }
    }


    // 데이터 요청 시 함수
    // 0. 내려보낼 _onSetState 함수
    _onSetState = (state) => {
        this.setState(state)
    }

    //렌더 함수
    render(){
        console.log(this.state)
        return(
            // Text 입력을 위한 TextInput 컴포넌트와 아이콘 버튼으로 구성
            <View style={styles.Container}>
                {this.state.replyEditMode ? 
                    <View>
                        <TextInput
                            style = {styles.TextInput}
                            label = 'Comment'
                            onChangeText = {(contents) => {this.setState({contents})}}
                            placeholder = {this.props.contents} // state 변경 전 prop으로 전달된 contents
                            value = {this.state.contents}
                            multiline = {true}/>                
                        <IconButton
                            icon="arrow-upward"
                            color={Colors.red500}
                            size={20}
                            onPress={() => _onAddBulletinBoardsReplies({...this.state}, this._onSetState)}/>
                    </View> :
                    <View style={styles.Container}>
                        <TextInput
                            style = {styles.TextInput}
                            label = 'Comment'
                            onChangeText = {(contents) => {this.setState({contents})}}
                            placeholder = 'Enter to leave a comment!'
                            multiline = {true}/>                
                        <IconButton
                            icon="arrow-upward"
                            style= {styles.Button}
                            size={15}
                            onPress={() => _onAddBulletinBoardsReplies({...this.state}, this._onSetState)}/>
                    </View>}
            </View>
        );
    }
}

BulletinBoardsRepliesInput.propTypes = {
};


const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    PostMenu:{
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    },
    TextInput: {
        flex: 9,
    },
    Button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BulletinBoardsRepliesInput;