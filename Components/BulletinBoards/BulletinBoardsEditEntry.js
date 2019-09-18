/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시글, 댓글을 수정하거나 새로운 글을 업로드할 수 있는 컴포넌트입니다.
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
import ConsoleLog from '../Tools/ConsoleLog';
import LoadingPage from '../Tools/LoadingPage';

class BulletinBoardsEditEntry extends Component{
    static defaultProps = {
        isUploadDone : false,
    }

    constructor(props){
        super(props);
        this.state = {
            isUploadDone: false,
        }
    }

    componentDidMount(){
        setTimeout(() => {this.setState({
            boardid: this.props.navigation.getParam('boardid', 0),
            entryid: this.props.navigation.getParam('entryid', 0),
            replyid: this.props.navigation.getParam('entryid', 0),
            userid: this.props.navigation.getParam('userid', 0),
            currentuserid: this.props.navigation.getParam('currentuserid', 0),
            username: this.props.navigation.getParam('username', ''),
            profile: this.props.navigation.getParam('profile', ''),
            likes: this.props.navigation.getParam('likes', 0),
            date: this.props.navigation.getParam('date', ''),
            ismine: this.props.navigation.getParam('ismine', false),
            title: this.props.navigation.getParam('title', ''),
            contents: this.props.navigation.getParam('contents', ''),
            pictures: this.props.navigation.getParam('pictures', ''),

            _onGetPostsLists: this.props.navigation.getParam('_onGetPostsLists', ''),
        })}, 50);
    }


    //데이터 요청 시 함수
    // 1. 게시글을 추가 or 수정하는 함수
    _handleSubmit = async () => {
        var url = server.serverURL + '/process/AddEditEntry';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: this.state.currentuserid, boardid: this.state.boardid, 
            entryid: this.state.entryid, title: this.state.title, contents: this.state.contents}) 
            .then((response) => {       
                if(response.data.msg === 'success')
                    this.setState({
                        isLoading: false,
                        isUploadDone: true,
                    }) 
            }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
        });  
}  

    //2. 댓글을 추가하는 함수 
    //onPress={this._handleAddComment.bind(this)} 
    _handleAddComment = async () => {
        var url = server.serverURL + '/process/AddComment';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: this.state.currentuserid, boardid: this.state.boardid, 
            entryid: this.state.entryid, contents: this.state.contents}) 
            .then((response) => {       
                this.setState({
                isLoading: false
                }) 
            }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
              );
        });    
    } 
    //3. 댓글을 수정하는 함수
    _handleEditComment = async () => {
        var url = server.serverURL + '/process/EditComment';
        this.setState({
            isLoading: true,
            isError: false
        }) 
        await axios.post(url, {userid: this.state.currentuserid, boardid: this.state.boardid, 
            entryid: this.state.entryid, replyid: this.state.replyid, 
            contents: this.state.contents}) 
            .then((response) => {       
                this.setState({
                isLoading: false
                }) 
            }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
              );
        });    
    }  

    // 렌더 함수   
    render() {
        return(
            <View>
                {this.state === null ? 
                    <LoadingPage/> :
                    <View>
                        <TextInput
                            placeholder='An awesome Title'
                            value = {this.state.title}
                            onChangeText={title => this.setState({ title })}/>
                        <TextInput
                            placeholder='Cool text for post (Optional)'
                            value = {this.state.contents}
                            onChangeText={contents => this.setState({ contents })}/>
                        <Button onPress={() => {
                            this._handleSubmit(); 
                            {this.state.isUploadDone? 
                                {/* 의미가 없는 곳 */} :
                            {/*Loading스크린 집어넣기 */}}}}>Submit</Button>
                        <View>
                            {this.state.isUploadDone?
                                () => {
                                    this.props.navigation.goBack();
                                    this.props.navigation._onGetPostsLists(0, 0, true)} :
                                <View></View>}
                        </View>
                    </View>
                    }
            </View>
        );
    }
}

BulletinBoardsEditEntry.propTypes = {
    name: PropTypes.string
};

export default withNavigation(BulletinBoardsEditEntry);