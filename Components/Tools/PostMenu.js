/*
작성자 : 추헌남
최초작성일 : 2019/08/26
설명 : 각 게시글에 대한 상세 메뉴입니다. ismine prop을 체크해 내 게시글인 경우 수정, 삭제하는 메뉴를 추가합니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    XX - XXX
*/


import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Menu, Divider, IconButton, Colors } from 'react-native-paper';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types';


class PostMenu extends Component{
    static defaultProps = {
        ismine: false,
        admin: false,
        visible: false,
        style: {},
        state: null
    }
    constructor(props){
        super(props);
        this.state = {
            ismine: this.props.ismine,
            false: this.props.admin,
            visible: false,
            style: this.props.style,
            state: this.props.state
        }
    }

    _openMenu = () => this.setState({ visible: true });

    _closeMenu = () => this.setState({ visible: false });

    render(){
        if(this.state.ismine || this.state.admin){
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                    icon='more-vert'
                    size={20}
                    onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={() => {}} title="Delete" />
                    <Menu.Item onPress={() => {
                                        this._closeMenu();
                                        this.props.navigation.navigate('EntryEdit', {...this.state.state});}} title="Modify" />
                    <Menu.Item onPress={() => {}} title="Report" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Like this!" />
                </Menu>
            </View>);
        }
        else{
            return (
                <View style={this.state.style}>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this._closeMenu}
                    anchor={
                    <IconButton
                    icon="more-vert"
                    color={Colors.red500}
                    size={20}
                    onPress={this._openMenu}
                    />
                    }
                >
                    <Menu.Item onPress={() => {}} title="Report" />
                    <Divider />
                    <Menu.Item onPress={() => {}} title="Like this!" />
                </Menu>
            </View>);
        }
    }
}

PostMenu.propTypes = {
};

export default withNavigation(PostMenu);