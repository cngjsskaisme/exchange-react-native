/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 각 게시글에 대한 상세 메뉴입니다. ismine prop을 체크해 내 게시글인 경우 수정, 삭제하는 메뉴를 추가합니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const showMenu = (ismine) => {
    if(ismine){
        return <Text>Add menus for MyPost!</Text>
    }
    else{
        return <Text>Add menus for just Post!</Text>
    }
};

class PostMenu extends Component{
    static defaultProps = {
        ismine: false
    }
    constructor(props){
        super(props);
        this.state = {
            ismine: this.props.ismine
        }
    }



    render(){
        return(
            <View>
                {showMenu(this.state.ismine)}
            </View>
        );
    }
}

PostMenu.propTypes = {
};

export default PostMenu;