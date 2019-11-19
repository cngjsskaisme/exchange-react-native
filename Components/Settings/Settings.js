/*
작성자 : 추헌남
최초작성일 : 2019/09/17
설명 : 비어있는 페이지입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    없음
*/



import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { ContentMedium, TitleBold, MetaLight } from '../Theming/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import LoadingPage from '../Tools/LoadingPage'; 
import {auth} from '../ServerLib/config'

class ErrorPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
        }
    } 

    _onSettings = (state) => {
        this.setState({
            ...state
        })
    } 

    _Logout = async () => {
        await auth.logout(); 
        this.props.navigation.navigate('Auth');
    } //_Logout 종료 

    _DeleteAccount = async () => {
        //await auth.logout();  
        this.setState({jwt: await auth.checkauth()})
        await _handleAuthDeleteAccount({...this.state}, this._onSettings);
        this.props.navigation.navigate('Auth');
    } //_DeleteAccount 종료



    render(){
        return(
            <View> 
                {this.state.isLoading?
                     <View>
                     <LoadingPage/>
                     </View> : 
                        <View style={{ paddingTop: 250}}>   
                            <Button onPress={this._Logout}>Logout</Button>
                            <Button onPress={this._DeleteAccount}>Delete Account</Button>
                        </View>
                } 
            </View>    
        );
    }
}
export default ErrorPage;