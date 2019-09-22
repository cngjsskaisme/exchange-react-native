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
import { StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
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
            <View style={styles.Card} >
                <Surface style={styles.surface}>
                    <TitleBold
                        fontSize = {20}
                        numberOfLines = {1}
                        ellipsizeMode = {'tail'}>{this.state.title}</TitleBold>
                    <ContentMedium
                        fontSize = {12}
                        numberOfLines = {4}
                        ellipsizeMode = {'tail'}>{this.state.contents}</ContentMedium>
                    <MetaLight>{this.state.date}</MetaLight>
                </Surface>
            </View>
        );
    }
}

/*
<Text>{this.state.pictures}</Text>

*/

MainCard.propTypes = {
    name: PropTypes.string
};


const styles = StyleSheet.create({
    Card: {
        display: 'flex',
        height: 190,
        width: 320,
        justifyContent : 'center',
        alignContent: 'center',
        paddingLeft: 10,
    },
    surface: {
        padding: 8,
        height: 150,
        width: 300,
        borderWidth: 0.5,
        borderColor: '#c4c4c4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 12,
    },
  });
export default MainCard;