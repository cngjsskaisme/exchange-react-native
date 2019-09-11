/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 각 게시글에 대한 상세 메뉴입니다. ismine prop을 체크해 내 게시글인 경우 수정, 삭제하는 메뉴를 추가합니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Button, Menu, Divider, IconButton, Colors } from 'react-native-paper';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'; 
import axios from 'axios';
import {server} from '../ServerLib/config';

class PostMenu extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: '',
        profile: '',
        likes: 0,
        date: '2019-01-01',
        ismine: false,
        title: '',
        contents: '',
        pictures: '',

        admin: false,
        visible: false,
        style: {},
        state: null
    }
    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            likes: this.props.likes,
            date: this.props.date,
            ismine: this.props.ismine,
            title: this.props.title,
            contents: this.props.contents,
            pictures: this.props.pictures,

            admin: this.props.admin,
            visible: false,
            style: this.props.style,
        }
    }

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false }); 

    // 데이터 요청 함수
    // 1. 하나의 게시글 삭제 
    _handleDeleteEntry = async() => {
        var url = server.serverURL + '/process/DeleteEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: this.state.userid, boardid: this.state.boardid,
            entryid: this.state.entryid, title: this.state.title, contents: this.state.contents}) 
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
    // 2. 좋아요 1 증가
    _handleIncreLikeEntry = async() => {
        var url = server.serverURL + '/process/IncreLikeEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {boardid: this.state.boardid, entryid: this.state.entryid}) 
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

    // 3. 게시물 신고
    _handleAddReport = async() => {
        var url = server.serverURL + '/process/AddReport';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {title: "report title1", contents: "report contents1", userid: "5d5373177443381df03f3040", boardid: "board1", 
            entryid: "5d75a757d47cdf78a5ce79d1", commentid: null }) 
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

    // 4. 댓글 삭제
    _handleDeleteComment = async() => {
        var url = server.serverURL + '/process/DeleteComment';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, { boardid: this.state.boardid, entryid: this.state.entryid, replyid: "5d783833ebecb9af8be1c309"}) 
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

    // 렌더 함수 시작
    render(){ 
        //내 글이거나 관리자 모드일 때
        if(this.state.ismine || this.state.admin){
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                        icon='more-vert'
                        size={20}
                        onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={this._handleDeleteComment()} title="Delete" />
                    <Menu.Item onPress={() => {
                                        this._closeMenu();
                                        //{this.state.replyid == 0 ? }//게시글 편집모드와 댓글 편집모드가 다르게 렌더링됨.
                                            this.props.navigation.navigate('EntryEdit', {
                                                boardid: this.state.boardid,
                                                entryid: this.state.entryid,
                                                replyid: this.state.replyid,
                                                userid: this.state.userid,
                                                username: this.state.username,
                                                profile: this.state.profile,
                                                likes: this.state.likes,
                                                date: this.state.date,
                                                ismine: this.state.ismine,
                                                title: this.state.title,
                                                contents: this.state.contents,
                                                pictures: this.state.pictures
                                            })}} title="Modify" />
                    <Menu.Item onPress={this._handleAddReport.bind(this)} title="Report" />
                    <Divider />
                    <Menu.Item onPress={this._handleIncreLikeEntry.bind(this)} title="Like this!" />
                </Menu>
            </View>);
        }
        else{ 
            //내 글이 아닐 때
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                    icon="more-vert"
                    size={20}
                    onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={this._handleAddReport.bind(this)} title="Report" />
                    <Divider />
                    <Menu.Item onPress={this._handleIncreLikeEntry.bind(this)} title="Like this!" />
                </Menu>
            </View>);
        }
    }
}


PostMenu.propTypes = {
};

export default withNavigation(PostMenu);