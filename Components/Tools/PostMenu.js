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
        ismine: false,
        admin: false,
        visible: false,
        style: {},
        state: null
    }
    constructor(props){
        super(props);
        this.state = {
            ismine: this.props.ismine,
            false: this.props.admin,
            visible: false,
            style: this.props.style,
            props: this.props.props
        }
    }

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false }); 

    //데이터 처리 시작  

    //하나의 게시글 삭제 
    _handleDeleteEntry = async() => {
        var url = server.serverURL + '/process/DeleteEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: "5d5373177443381df03f3040", boardid: "board1",
            entryid: "5d770b973d1ef85d049dd9a4", title: this.state.title, contents: this.state.contents}) 
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
    //좋아요 1 증가
    _handleIncreLikeEntry = async() => {
        var url = server.serverURL + '/process/IncreLikeEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {boardid: "board1", entryid: "5d75a757d47cdf78a5ce79d1"}) 
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

    //게시물 신고
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


    //데이터 처리 끝

    render(){ 
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
                    <Menu.Item onPress={this._handleDeleteEntry.bind(this)} title="Delete" />
                    <Menu.Item onPress={() => {
                                        this._closeMenu();
                                        this.props.navigation.navigate('EntryEdit', {...this.state.state});}} title="Modify" />
                    <Menu.Item onPress={this._handleAddReport.bind(this)} title="Report" />
                    <Divider />
                    <Menu.Item onPress={this._handleIncreLikeEntry.bind(this)} title="Like this!" />
                </Menu>
            </View>);
        }
        else{ 
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