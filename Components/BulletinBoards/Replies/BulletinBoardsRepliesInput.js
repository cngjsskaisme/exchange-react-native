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
            <View style={styles.Container}>
                <TextInput
                    style = {styles.TextInput}
                    label = 'Comment'
                    onChangeText = {(contents) => {this.setState({contents})}}
                    placeholder = 'Enter to leave a comment!'
                    value = {this.state.contents}
                    multiline = {true}/>                
                <IconButton
                    icon="arrow-upward"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
            </View>
        );
    }
}

BulletinBoardsRepliesInput.propTypes = {
};


const styles = StyleSheet.create({
  PostMenu:{
      position: 'absolute',
      margin: 0,
      right: 0,
      top: 0,
  },
  TextInput: {
      width: '85%',
  },
  Container: {
      display: 'flex',
      flexDirection: 'row'
  },
  Button: {
      paddingTop: 8
  },
});

export default BulletinBoardsRepliesInput;