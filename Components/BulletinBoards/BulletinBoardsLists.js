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

axios.defaults.timeout = 5000;

class BulletinBoardsLists extends Component{
    static defaultProp = {
        boardlist: null,
        isLoading: false,
        isError: false,
        isDev: false
    }

    constructor(props){
        super(props);
        this.state = {
            boardslist : null,
            isLoading: false,
            isError: false,
            isDev: false
        }
    }
    
    static navigationOptions = {
        title: 'BulletinBoards Lists',
      };

    //데이터 불러오기 시작   
    _onGetBulletinBoardsLists = async () => {   
        var url = server.serverURL + '/process/ShowBulletinBoardsList';
        this.setState({
            isLoading: true
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
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
              );
            this.setState({
                postslist: BulletinBoardsLists_Mock,
                isError: true
            })
        });    
    }
    async componentDidMount(){
      await this._onGetBulletinBoardsLists(); 
    }
    //데이터 불러오기 끝 
      _renderItem = ({ item }) => { 
        return(
            <TouchableRipple
                key={item.boardid}
                onPress={() => {this.props.navigation.navigate('BulletinBoards', { boardid : item.boardid, boardname : item.boardname })}}>
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

    _keyExtractor = (item, index) => item.boardid.toString();

    render(){ 
        if(this.state.isDev){
            return(<FlatList 
                data = {this.state.boardslist}
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}
                onRefresh = {this._onGetBulletinBoardsLists}
                refreshing = {this.state.isLoading}/>)
        }

        if(this.state.isError){
            return(
            <ErrorPage/>);
        }
        
        if(this.state.isLoading){
            return(
                <View style={styles.LoadingScreen}>
                    <View style={styles.LoadingScreen01}>
                        <ActivityIndicator animating= 'true' size = 'large'/>
                    </View>
                    <ContentMedium style={styles.LoadingScreen02}>Lists are loading...{"\n"}Wait Please...</ContentMedium>
                </View>);
        }

        else{
            return(
            <View>
                <Text>{JSON.stringify(this.state.boardslist)}</Text>
                <FlatList 
                    data = {this.state.boardlist}
                    renderItem = {this._renderItem}
                    keyExtractor = {this._keyExtractor}
                    onRefresh = {this._onGetBulletinBoardsLists}
                    refreshing = {this.state.isLoading}/>
            </View>);
        }
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

export default BulletinBoardsLists;