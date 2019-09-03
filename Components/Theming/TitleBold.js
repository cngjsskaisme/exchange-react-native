/*
작성자 : 추헌남
최초작성일 : 2019/09/02
설명 : 앱의 테마를 따르는 타이틀 굵게 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    fontSize = 기본값은 16입니다. 크기를 변경합니다.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class TitleBold extends Component{
    static defaultProps={
        fontSize: 16,
        color: '#262626'
    }

    constructor(props){
        super(props);
        this.state={
            fontSize: this.props.fontSize,
            color: this.props.color
        }
    }

    render(){
        return(
            <Text style={{
                fontSize: this.state.fontSize,
                fontWeight: 'bold',
                color: this.state.color}}>{this.props.children}</Text>
        );
    }
}

TitleBold.propTypes = {
    name: PropTypes.string
};

export default TitleBold;