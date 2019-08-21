/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 추헌남
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class MainHeader extends Component{
    render(){
        return(
            <View style={this.props.style}>
                <Text style={this.props.contentStyle}>메인 헤더입니다</Text>
            </View>
        );
    }
}

MainHeader.propTypes = {
    name: PropTypes.string
  };

export default MainHeader;