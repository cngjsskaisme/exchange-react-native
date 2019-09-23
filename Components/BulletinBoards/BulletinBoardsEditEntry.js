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
import { _handleBulletinBoardsPostSubmit } from '../ServerLib/ServerRequest'

class BulletinBoardsEditEntry extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        currentuserid: 0,
        username: '',
        profile: '',
        likes: 0,
        date: '',
        ismine: false,
        title: '',
        contents: '',
        pictures: '',

        isUploadDone : false,
        isEditing: false,

        _refresher: () => {},
        _onSetState: () => {},
    }

    constructor(props){
        super(props);
        this.state = {
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

            _refresher : this.props.navigation.getParam('_refresher', () => {}),
            _onSetState: this.props.navigation.getParam('_onSetState', () => {}),
            isEditing: this.props.navigation.getParam('isEditing', false),
        }
        this._onSetState.bind(this);
    }

    // 데이터 요청 함수
    // 0. 함수로 내려보낼 SetState
    _onSetState = (state) => {
        this.setState({
            ...state
        })
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

    //4. 게시글 Submit 버튼 누를 시 제출 및 navigation.goBack() 및 부모 컴포넌트 새로고침
    _onSubmitPressed = () => {
        this.state._refresher();    
        this.props.navigation.goBack();       
    }

    // 렌더 함수   
    render() {
        if(this.state.isUploadDone)
            return(
                <View>
                    {this._onSubmitPressed()}
                </View>)
        else return(
            <View>
                {typeof this.state.currentuserid === 'undefined' || this.state.currentuserid === 0? 
                    <View>
                    <LoadingPage/>
                    </View> :
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
                            _handleBulletinBoardsPostSubmit({...this.state}, this._onSetState);
                            // 만약 수정 모드일 경우
                            if(this.state.isEditing)
                                // 만약 수정 모드인데 게시판에서 했을 경우
                                if(this.state.isBoardRoot)
                                    this.state._refresher
                                // 게시글 내부에서 했을 경우
                                else this.state._onSetState({
                                    boardid: this.state.boardid,
                                    entryid: this.state.entryid,
                                    replyid: this.state.replyid,
                                    userid: this.state.userid,
                                    currentuserid: this.state.currentuserid,
                                    username: this.state.username,
                                    profile: this.state.profile,
                                    likes: this.state.likes,
                                    date: this.state.date,
                                    ismine: this.state.ismine,
                                    title: this.state.title,
                                    contents: this.state.contents,
                                    pictures: this.state.pictures,
                                })}}>Submit</Button>
                        <View>
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