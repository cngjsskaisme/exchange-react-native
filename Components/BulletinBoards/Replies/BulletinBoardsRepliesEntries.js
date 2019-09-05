/*
작성자 : 추헌남
최초작성일 : 2019/08/22
설명 : 게시판 댓글을 표시하는 컴포넌트입니다.
다음을 Prop으로 받겠습니다 (받는 타입은 PropTypes에서 기술) :
    아직 안받음
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import PostMenu from '../../Tools/PostMenu';
import {ContentMedium, MetaLight, TitleBold} from '../../Theming/Theme'

class BulletinBoardRepliesEntries extends Component{
    static defaultProps = {
        boardid: 0,
        entryid: 0,
        replyid: 0,
        userid: 0,
        username: "",
        profile: "",
        likes: 0,
        date: "2019-01-01",
        ismine: false,
        contents: "",
        pictures: ""
    }

    constructor(props){
        super(props);
        this.state = {
            boardid: this.props.boardid,
            entryid: this.props.entryid,
            replyid: this.props.replyid,
            userid: this.props.userid,
            username: this.props.username,
            profile: this.props.profile,
            likes: this.props.likes,
            date: this.props.date,
            ismine: this.props.ismine,
            contents: this.props.contents,
            pictures: this.props.pictures
        }
    }

    render(){
        return(
            <View 
                key={this.state.replyid}
                style={styles.RepliesEntry}>
                <View style={styles.RepliesEntryContents}>
                    <ContentMedium>{this.state.contents}</ContentMedium>
                </View>
                <View style={styles.RepliesEntryMeta}>
                    <MetaLight>by {this.state.username}, {this.state.date}, {this.state.likes} Likes</MetaLight>
                </View>
                <PostMenu
                    ismine = {this.state.ismine}
                    style = {styles.PostMenu}/>
            </View>
        );
    }
}

BulletinBoardRepliesEntries.propTypes = {
    name: PropTypes.string
};

const styles = StyleSheet.create({
    PostMenu: {
        position: 'absolute',
        margin: 0,
        right: 0,
        top: 0,
    },
    RepliesEntry: {
        paddingBottom: 5
    },
    RepliesEntryContents: {
        paddingTop: 5
    },
    RepliesEntryMeta: {
        paddingTop: 1
    }
});

export default BulletinBoardRepliesEntries;