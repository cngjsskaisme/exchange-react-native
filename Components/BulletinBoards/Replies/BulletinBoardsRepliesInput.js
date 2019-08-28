/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 게시판 댓글 달 수 있는 입력 칸입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation'

class BulletinBoardsRepliesInput extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        userid: 0,
        username: '',
        profile: '',
        contents: ''
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            contents: ''
        }
    }

    _postReply = () => {
        //여기에 창희의 API를 넣어 자료를 보낸다... (보낼 정보들은 위에 정의되어 있는 것들)
    }
    
    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText = {(contents) => {this.setState({contents})}}
                    placeholder = 'Enter to leave a comment.'
                    value = {this.state.contents}/>
                <Button onPress = {this._postReply}
                        title = 'Send'/>
            </View>
        );
    }
}

BulletinBoardsRepliesInput.propTypes = {
};

export default BulletinBoardsRepliesInput;