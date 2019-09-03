/*
작성자 : 추헌남
최초작성일 : 2019/09/03
설명 : 키보드 자동으로 피하는 View에 대하여 개선하는 컴포넌트입니다. 이거 쓰세요 사용법은 하단에 적혀있음
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/



import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Dimensions, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

class BetterKeyboardAvoidingView extends Component{
    static defaultProps ={
        keyboardHeight: 0,
        normalHeight: 0,
        shortHeight: 0
    }

    
    render(){
        return(
            <KeyboardAvoidingView 
            behavior='padding'
            keyboardVerticalOffset={this.props.keyboardHeight - 185}
            enabled>
                {this.props.children}
            </KeyboardAvoidingView>
        );
    }
}

/*
사용법 
1. 컴포넌트 앞부분에 붙이세요.
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );
      }

    componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (e) => {
        this.setState({keyboardHeight: e.endCoordinates.height});
        this.setState({normalHeight: Dimensions.get('window').height});
        this.setState({shortHeight: Dimensions.get('window').height - e.endCoordinates.height});
    }
*/

export default BetterKeyboardAvoidingView;