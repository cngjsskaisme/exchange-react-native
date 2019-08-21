/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 상단의 카라우셀 구현 예정임.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MainCarousel.styles'
import GlobalStyles from '../Styles/styles'

class MainCarousel extends Component{
    render(){
        return(
            <View style={this.props.style}>
                <Text style={this.props.contentStyle}>
                    카라우셀 구현 예정입니다.
                    (Pagination 포함)
                </Text>
            </View>
        );
    }
}

MainCarousel.propTypes = {
    
  };

export default MainCarousel;