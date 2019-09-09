/*
작성자 : 추헌남
최초작성일 : 2019/09/09
설명 : 추헌남
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    What - 무엇을 로딩중인지?
    Plural - 단수형 복수형? true -> 단수형, false -> 복수형
    Message - 따로 추가할 메시지가 있는지?
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ActivityIndicator} from 'react-native-paper'
import {ContentMedium} from '../Theming/Theme'
import PropTypes from 'prop-types';

class LoadingPage extends Component{
    static defaultProps = {
        What: '',
        Plural: false,
        Message: ''
    }

    render(){
        return(
            <View style={styles.LoadingScreen}>
                    <View style={styles.LoadingScreen01}>
                        <ActivityIndicator animating= 'true' size = 'large'/>
                    </View>
                    <ContentMedium style={styles.LoadingScreen02}>Threads are loading...{"\n"}Wait Please...</ContentMedium>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoadingScreen: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    LoadingScreen01: {
        flex: 5,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    LoadingScreen02: {
        flex: 5,
        justifyContent: 'flex-start',
        textAlign: 'center'
    }
});


export default LoadingPage;