/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글을 수정하거나 새로운 게시글을 업로드할 수 있는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음 

추: BulletinBoards.js의 boardid와 entryid를 constructor에서 받기 바람.
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { withNavigation, NavigationEvents } from 'react-navigation'; 
import axios from 'axios'; 
import {server} from '../ServerLib/config';

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
        title: '',
        contents: "",
        pictures: ""
    }
//데이터 처리 시작
    _handleSubmit = async() => {
        var url = server.serverURL + '/process/AddEditEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: "5d5373177443381df03f3040", boardid: "board1", 
            entryid: "5d7712357fc8e726d002fd99", title: this.state.title, contents: this.state.contents}) 
            .then((response) => {       
                this.setState({
                isLoading: false
                }) 
            }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
              );
        });    
    }
//데이터 처리 끝
    render(){
        return(
            <View>
                <NavigationEvents onDidFocus={() => {
                    this.setState({
                        boardid: this.props.navigation.getParam('boardid'),
                        entryid: this.props.navigation.getParam('entryid'),
                        userid: this.props.navigation.getParam('userid'),
                        username: this.props.navigation.getParam('username'),
                        profile: this.props.navigation.getParam('profile'),
                        likes: this.props.navigation.getParam('likes'),
                        date: this.props.navigation.getParam('date'),
                        ismine: this.props.navigation.getParam('ismine'),
                        title: this.props.navigation.getParam('title'),
                        contents: this.props.navigation.getParam('contents'),
                        pictures: this.props.navigation.getParam('pictures')
                    })
                }} />
                <Input
                    placeholder='An awesome Title'
                />
                <TextInput
                    placeholder='An awesome Title'
                    value= {this.props.navigation.getParam('title')}
                    onChangeText={title => this.setState({ title })}/>
                <TextInput
                    placeholder='Cool text for post (Optional)'
                    value= {this.props.navigation.getParam('contents')}
                    onChangeText={contents => this.setState({ contents })}/>
                <Button onPress={this._handleSubmit.bind(this)}>Submit</Button>
            </View>
        );
    }
}

BulletinBoardsEditEntry.propTypes = {
    name: PropTypes.string
};

export default withNavigation(BulletinBoardsEditEntry);