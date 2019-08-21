/*
작성자 : 추헌남
최초작성일 : 2019/08/14
설명 : 하단의 컨텐츠들 구성하는 컴포넌트임.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음.
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './MainCards.styles'
import GlobalStyles from '../Styles/styles'

class MainCards extends Component{
    render(){
        return(
            <View style={this.props.style}>
                <Text style={this.props.contentStyle}>메인 카드들 구성 예정임.</Text>
            </View>
        );
    }
}

MainCards.propTypes = {
    
  };

export default MainCards;