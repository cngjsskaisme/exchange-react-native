/*
작성자 : 추헌남
최초작성일 : 2019/08/28
설명 : 게시판들의 목록을 보여주는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback, Alert } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoards from './BulletinBoards';
import {TouchableRipple, Button, ActivityIndicator, Colors } from 'react-native-paper'
import { BulletinBoardsLists_Mock } from '../../Mockup_Datas/UnifiedEntries'
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import axios from 'axios'; 
import {server} from '../ServerLib/config';
import ErrorPage from '../Tools/ErrorPage';
import LoadingPage from '../Tools/LoadingPage';
import ConsoleLog from '../Tools/ConsoleLog';

axios.defaults.timeout = 5000;

class BulletinBoardsLists extends Component{
    static defaultProp = {
        boardslist: null,
        currentuserid: 0,
        isLoading: false,
        isError: false,
        isDev: false
    }

    constructor(props){
        super(props);
        this.state = {
            boardslist : null,
            currentuserid: "5d5373177443381df03f3040", //userid 반환 여기서 하게끔 boardslist에서 불러오기 (onget)
            isLoading: false,
            isError: false,
            isDev: true
        }
    }

    // 데이터 요청 함수
    // 1. 게시글 목록 불러오는 함수
    _onGetBulletinBoardsLists = async () => {   
        var url = server.serverURL + '/process/ShowBulletinBoardsList';
        this.setState({
            isLoading: true,
            isError: false
        })
        await axios.post(url) 
            .then((response) => {       
                this.setState({ 
                boardslist: response.data.boardslist,
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
                postslist: BulletinBoardsLists_Mock,
                isError: true
            })
        });    
    }

    // 컴포넌트 마운트 시
    async componentDidMount(){
        // 일반 사용자 모드일 때
        if (!this.state.isDev)
            await this._onGetBulletinBoardsLists(); 
    }

    // FlatList의 RenderItem 함수
      _renderItem = ({ item }) => { 
        return(
            <TouchableRipple
                key={item.boardid}
                onPress={() => {this.props.navigation.navigate('BulletinBoards', { 
                        boardid : item.boardid, 
                        userid : item.userid,
                        currentuserid: this.state.currentuserid,
                        boardname : item.boardname, 
                        isDev : this.state.isDev })}}>
                <View style={styles.BulletinBoards}>
                    <View style={styles.BulletinBoardsName}>
                        <TitleBold fontSize={20}>{item.boardname}</TitleBold>
                    </View>
                    <View style={styles.BulletinBoardsContents}>
                        <MetaLight fontSize={14}>{item.contents}</MetaLight>
                    </View>
                </View>
            </TouchableRipple>
        )
    };

    // FlatList의 KeyExtractor 함수
    _keyExtractor = (item, index) => item.boardid.toString();

    // 렌더 함수
    render(){  
        
        return(
            <View>{
                this.state.isDev ? 
                // 개발자 모드일 때
                    <FlatList 
                        data = {BulletinBoardsLists_Mock}
                        renderItem = {this._renderItem}
                        keyExtractor = {this._keyExtractor}
                        onRefresh = {() => {}}
                        refreshing = {this.state.isLoading}/> :
                this.state.isError ?
                // 에러발생 했을 때
                    <View>
                        <ErrorPage/>
                        <Button onPress={this._onGetBulletinBoardsLists}>Refresh</Button> 
                    </View> :
                this.state.isLoading ?
                // 로딩중일 때
                    <LoadingPage/>:
                // 게시판 목록을 보여줄 때
                    <FlatList 
                            data = {this.state.boardslist}
                            renderItem = {this._renderItem}
                            keyExtractor = {this._keyExtractor}
                            onRefresh = {this._onGetBulletinBoardsLists}
                            refreshing = {this.state.isLoading}/>

            }</View>)
    }
}

BulletinBoardsLists.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    BulletinBoards: {
        flexDirection: "column",
        width: '100%',
        height: 90,
        paddingTop: 15,
        paddingLeft: 10,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d4d4d4',
    },
    BulletinBoardsName: {
        flex: 4.5,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 5
        
    },
    BulletinBoardsContents: {
        flex: 5.5,
        flexDirection: 'row',
        alignItems: 'flex-start'
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

export default withNavigation(BulletinBoardsLists);