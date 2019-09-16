/*
작성자 : 추헌남
최초작성일 : 2019/09/14
설명 : BulletinBoards Wrapper 컴포넌트입니다. Context provider 제공용입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    안받습니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import BulletinBoardsLists from './BulletinBoardsLists'
import { BulletinBoardsContext } from './BulletinBoardsContext'; 
import {withNavigation} from 'react-navigation'
import ConsoleLog from '../Tools/ConsoleLog'

class BulletinBoardsMain extends Component{
    constructor(props){
        super(props);
        this._toggleDevMode = (isDev) => { this.setState({ isDev : isDev })},
        this._toggleReplyEditMode = (isReplyEditMode) => { this.setState({ isReplyEditMode : !isReplyEditMode });
        this._toggleChecker = () => {<ConsoleLog>{'Function also working!'}</ConsoleLog>}
        <ConsoleLog>{this.state.isReplyEditMode.toString()}</ConsoleLog>}

        this.state = {
            currentuserid : '5d5373177443381df03f3040',
            isDev : false,
            isReplyEditMode : false,
            
            checker: 'context is working',
            _toggleChecker: this._toggleChecker,
            
            _toggleDevMode : this._toggleDevMode,
            _toggleReplyEditMode: this._toggleReplyEditMode,
        }
    }

    static navigationOptions = {
        title: 'BulletinBoards Lists',
      };

    render(){
        return(
            <BulletinBoardsContext.Provider value={this.state}>
                <BulletinBoardsLists/>
            </BulletinBoardsContext.Provider>
        );
    }
}

export default withNavigation(BulletinBoardsMain);