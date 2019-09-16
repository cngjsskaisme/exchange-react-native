/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert, Image } from 'react-native';
import { FAB, ActivityIndicator, Colors, Button } from 'react-native-paper'
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'
import { navigation, withNavigation } from 'react-navigation'; 
import axios from 'axios'; 
import {server} from '../ServerLib/config';
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import ErrorPage from '../Tools/ErrorPage';
import LoadingPage from '../Tools/LoadingPage'

axios.defaults.timeout = 5000;

class BulletinBoards extends Component{
    // 네비게이션 옵션
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.boardname}`,
      });
    
    static defaultProp = {
        boardid: 0,
        userid: 0,
        currentuserid: 0,
        boardname: '',
        entrieslist: null,
        isLoading: false,
        isError: false,
        isDev: false,
        postStartIndex: 0,
        postEndIndex: 0
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            userid: this.props.navigation.getParam('userid'),
            currentuserid: this.props.navigation.getParam('currentuserid'),
            boardname: this.props.navigation.getParam('boardname'),
            isLoading: false,
            isError: false,
            isDev: false,//this.props.navigation.getParam('isDev'), 
            //데이터 관련. 불러올 첫/마지막 게시물의 index 번호 
            postStartIndex: 0, 
            postEndIndex: 0
        }
    }
    
    // 데이터 요청 함수
    // 1. 게시글 목록 불러오는 함수
    _onGetPostsLists = async () => {   
        var url = server.serverURL + '/process/ShowBulletinBoard';
        this.setState({
            isLoading: true,
            isError: false,

            postStartIndex: postEndIndex,
            postEndIndex: postStartIndex + 19
        }) 
        await axios.post(url, {userid: this.state.userid, boardid: this.state.boardid, 
            postStartIndex: this.state.postStartIndex, postEndIndex: this.state.postEndIndex})
            .then((response) => {       
                this.setState({ 
                entrieslist: [...this.state.entrieslist, ...response.data.postslist],
                isLoading: false
            }) 
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
              );
            this.setState({
                postslist: BulletinBoardsEntries_Mock,
                isError: true
            })
        });    
    }

    //컴포넌트 마운트 시
    async componentDidMount(){
        // 일반 사용자 모드일 때 게시글 목록 불러오기
        if(!this.state.isDev)
            await this._onGetPostsLists(); 
    }

    // Flatlist RenderItem 함수
    _renderItem = ({ item }) => {
        return(
            <BulletinBoardsEntries
                key = {item.entryid}
                boardid = {item.boardid}
                userid = {item.userid}
                entryid = {item.entryid}
                username = {item.username}
                profile = {item.profile}
                likes = {item.likes}
                date = {item.date}
                ismine = {item.ismine}
                title = {item.title}
                contents = {item.contents}
                isDev = {this.state.isDev}
                style = {styles.BulletinBoardsEntries}/>
        )
    };

    // Flatlist keyExtractor 함수
    _keyExtractor = (item, index) => item.entryid.toString();

    
    // 렌더 함수
    render(){ 
        return(
            // 게시판의 게시글들을 목록으로 보여주는 함수임.
            <View>{
                this.state.isDev ? 
                // 개발자 모드일 때
                    <FlatList 
                        data = {BulletinBoardsEntries_Mock}
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        onRefresh = {() => {}}
                        refreshing = {this.state.isLoading}/> :
                this.state.isError ?
                // 에러발생 했을 때
                    <View>
                        <ErrorPage/>
                        <Button onPress={this._onGetPostsLists}>Refresh</Button> 
                    </View> :
                this.state.isLoading ?
                // 로딩중일 때
                    <LoadingPage/>:
                // 게시판 목록을 보여줄 때, FlatList와 FAB 컴포넌트로 구성되어 있음
                <View style={{width: '100%', height: '100%'}}>
                    <FlatList 
                            data = {this.state.entrieslist}
                            extraData = {this.state}
                            renderItem = {this._renderItem}
                            keyExtractor = {this._keyExtractor}
                            onRefresh = {this._onGetPostsLists}
                            refreshing = {this.state.isLoading}
                            onEndReached = {this._onGetPostsLists}/>
                    <FAB
                            style={styles.Floating}
                            icon='add'
                            onPress={() => this.props.navigation.navigate('EntryEdit', { 
                                boardid: this.state.boardid,
                                userid: this.state.userid,
                                username: this.state.username,
                                profile: this.state.profile})} />        
                </View>

            }</View>)
    }
}


BulletinBoards.propTypes = {
  };

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%'
    },
    BulletinBoards: {
        flexDirection: 'column',
    },
    Floating: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    LoadingScreen: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    LoadingScreen01: {
        flex: 5,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    LoadingScreen02: {
        flex: 5,
        justifyContent: 'flex-start',
        textAlign: 'center'
    }
});

export default withNavigation(BulletinBoards);
