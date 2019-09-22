/*
작성자 : 추헌남
최초작성일 : 2019/09/18
설명 : 메인 컴포넌트의 카드를 구성하는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    picture - 카드에 표시될 사진
    title - 카드의 제목
    contents - 카드의 내용
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { TitleBold, ContentMedium, MetaLight } from '../Theming/Theme';

class MainCard extends Component{
    static defaultProps= {
        title: '',
        contents: '',
        pictures: '',
        date: '',
    }

    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            contents: this.props.contents,
            pictures: this.props.pictures,
            date: this.props.date,
        }
    }
    render(){
        return(
            <View style={styles.Card}>
                <Text>{this.state.pictures}</Text>
                <TitleBold>{this.state.title}</TitleBold>
                <ContentMedium>{this.state.contents}</ContentMedium>
                <MetaLight>{this.state.date}</MetaLight>
            </View>
        );
    }
}

MainCard.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    Card: {
        borderWidth: 2,
        borderRadius: 20,
        height: 150,
        width: 300,
        backgroundColor: 'white',

    }
});
export default MainCard;