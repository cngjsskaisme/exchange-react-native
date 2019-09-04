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
import {TouchableRipple} from 'react-native-paper'
import { BulletinBoardsLists_Mock } from '../../Mockup_Datas/UnifiedEntries'

class BulletinBoardsLists extends Component{
    static navigationOptions = {
        title: 'BulletinBoards Lists',
      };
    

    
      _renderItem = ({ item }) => {
        return(
            <TouchableRipple
                key={item.boardid}
                onPress={() => {this.props.navigation.navigate('BulletinBoards', { boardid : item.boardid })}}>
                <View style={styles.BulletinBoards}>
                    <Text>
                        {item.boardname}
                    </Text>
                </View>
            </TouchableRipple>
        )
    };

    _keyExtractor = (item, index) => item.boardid.toString();

    render(){
        return(
            <FlatList 
                data = {BulletinBoardsLists_Mock}
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
        paddingTop: '2%',
        paddingLeft: '3%',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#d4d4d4',
    },
});

export default BulletinBoardsLists;