/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글을 수정하거나 새로운 게시글을 업로드할 수 있는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

class BulletinBoardsEditEntry extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
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
        this.setState({
            boardid: this.props.navigation.getParam('boardid'),
            entryid: this.props.navigation.getParam('entryid'),
            userid: this.props.navigation.getParam('userid'),
            username: this.props.navigation.getParam('username'),
            profile: this.props.navigation.getParam('profile'),
            likes: this.props.navigation.getParam('likes'),
            date: this.props.navigation.getParam('date'),
            ismine: this.props.navigation.getParam('ismine'),
            contents: this.props.navigation.getParam('contents'),
            pictures: this.props.navigation.getParam('pictures')
        })
    }

    _handleSubmit = () => {} //<- 창희야 게시글을 수정하거나 새로운 게시글을 업로드할 떄 처리해야되는 곳이다!!!

    render(){
        return(
            <View>
                <TextInput
                    placeholder='Write your opinions!'
                    onChangeText={contents => this.setState({ contents })}/>
                <Button onPress={this._handleSubmit}>Submit</Button>
            </View>
        );
    }
}

BulletinBoardsEditEntry.propTypes = {
    name: PropTypes.string
};

export default withNavigation(BulletinBoardsEditEntry);