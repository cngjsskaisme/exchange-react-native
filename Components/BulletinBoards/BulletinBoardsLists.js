/*
작성자 : 추헌남
최초작성일 : 2019/08/28
설명 : 게시판들의 목록을 보여주는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoards from './BulletinBoards';
import {TouchableRipple, Button } from 'react-native-paper'
import { BulletinBoardsLists_Mock } from '../../Mockup_Datas/UnifiedEntries'
import {ContentMedium, MetaLight, TitleBold} from '../Theming/Theme'
import GetBulletinBoardsLists from '../ServerLib/GetBulletinBoardsLists';

import axios from 'axios'; 
import {server} from '../ServerLib/config';

class BulletinBoardsLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            boardslist : null
        }
    }
    
    componentDidMount(){
        ReturnValue = BulletinBoardsListsReturned();
    }
    static navigationOptions = {
        title: 'BulletinBoards Lists',
      };
    
    async bulletinBoardsLists2(){   
        var url = server.serverURL + '/process/ShowBulletinBoardsList';
          await axios.post(url,{ timeout: 3000 }) 
        .then((response) => {       
          this.setState({ 
           boardslist: response.data.boardslist    
        }) 
        }) 
        .catch(( err ) => {
            this.setState({
                boardslist: BulletinBoardsLists_Mock
            })
            Alert.alert(
                'Cannot connect to the server.',
                'There\'s two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [
                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        });    
    }
    async componentDidMount(){
      await this.bulletinBoardsLists2(); 
    }

      _renderItem = ({ item }) => {
        return(
            <TouchableRipple
                key={item.boardid}
                onPress={() => {this.props.navigation.navigate('BulletinBoards', { boardid : item.boardid })}}>
                <View style={styles.BulletinBoards}>
                    <View style={styles.BulletinBoardsName}>
                        <TitleBold fontSize={20}>{item.boardname}</TitleBold>
                    </View>
                    <View style={styles.BulletinBoardsContents}>
                        <MetaLight fontSize={14}> {item.contents}</MetaLight>
                    </View>
                </View>
            </TouchableRipple>
        )
    };

    _keyExtractor = (item, index) => item.boardid.toString();

    render(){
        return(
            <FlatList 
                data = {this.state.boardslist}
                renderItem = {this._renderItem}
                keyExtractor = {this._keyExtractor}/>
        );
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
    }
});

export default BulletinBoardsLists;