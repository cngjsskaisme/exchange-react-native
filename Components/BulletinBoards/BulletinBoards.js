/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 자유게시판 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    일단 안받습니다.
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert } from 'react-native';
import { FAB, ActivityIndicator, Colors } from 'react-native-paper'
import PropTypes from 'prop-types';
import BulletinBoardsEntries from './BulletinBoardsEntries';
import { BulletinBoardsEntries_Mock } from '../../Mockup_Datas/UnifiedEntries'
import { navigation, withNavigation } from 'react-navigation'; 
import axios from 'axios'; 
import {server} from '../ServerLib/config';
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'

class BulletinBoards extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.boardname}`,
      });
    
    static defaultProp = {
        boardid: 0,
        boardname: '',
        entrieslist: null,
        isLoading: true
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.navigation.getParam('boardid'),
            boardname: this.props.navigation.getParam('boardname'),
            isLoading: true
        }
    }
    
    async GetBulletinBoard(){   
        var url = server.serverURL + '/process/ShowBulletinBoard';
        await axios.post(url,{ boardid: this.state.boardid}) 
            .then((response) => {       
              this.setState({ 
               entrieslist: response.data.boardlist,
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
                      entrieslist: BulletinBoardsEntries_Mock
                  })
            });    
        }

    async componentDidMount(){
        await this.GetBulletinBoard()
    }


    _renderItem = ({ item }) => {
        return(
            <BulletinBoardsEntries
                key = {item.entryid}
                boardid = {item.boardid}
                userid = {item.userid}
                username = {item.username}
                profile = {item.profile}
                likes = {item.likes}
                date = {item.date}
                ismine = {item.ismine}
                title = {item.title}
                contents = {item.contents}
                style = {styles.BulletinBoardsEntries}/>
        )
    };

    _keyExtractor = (item, index) => item.entryid.toString();

    render(){ 
        
        return(
            <View>
                {this.state.isLoading ? 
                    <View style={styles.LoadingScreen}>
                        <View style={styles.LoadingScreen01}>
                            <ActivityIndicator animating= 'true' size = 'large'/>
                        </View>
                        <ContentMedium style={styles.LoadingScreen02}>Threads are loading...{"\n"}Wait Please...</ContentMedium>
                    </View> :
                    <View style = {styles.Container}>
                        <FlatList 
                            data = {this.state.entrieslist}
                            renderItem = {this._renderItem}
                            keyExtractor = {this._keyExtractor}
                            onRefresh = {() => {}}
                            refreshing = {false}/>
                        <FAB
                            style={styles.Floating}
                            icon='add'
                            onPress={() => this.props.navigation.navigate('EntryEdit', { 
                                boardid: this.state.boardid,
                                userid: this.state.userid,
                                username: this.state.username,
                                profile: this.state.profile})} />
                    </View>}
            </View>
        );
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
