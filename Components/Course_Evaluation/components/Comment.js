import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated, 
    TouchableOpacity,
    Image,
} from 'react-native';
import propTypes from 'prop-types';
import RatingStar from './RatingStar';
import RatingStar_Without_TextBox from './RatingStar_Without_TextBox'

export default class Comment extends Component{
    render(){
        const {person, cmtText} = this.props
        const CommentPerson = person || "Punreach RANY"
        const CommentText = cmtText || "This is my comment"

        return(         
            <View style={styles.wrapper}>

                <View style={styles.personView}>
                    <Text style={styles.personName}>{CommentPerson[0]+"*****"}</Text>
                    <RatingStar_Without_TextBox
                        ratingSize = {15}
                        onPress_status = {false}
                    />
                    <Text style={{paddingRight : 15}}>CommentText</Text>
                </View>

                <View style={styles.CommentView}><Text>{CommentText}</Text></View>
            </View>    
        )
    }
}

Comment.propTypes = {
    person : propTypes.string,
    cmtText : propTypes.string,
}
const styles = StyleSheet.create({
    wrapper : { 
        
        flexDirection : 'column',
        
        padding : 10,
    },
    personName : {
        
        fontSize : 15,
        fontWeight : 'bold',
        paddingTop : 15,
        paddingLeft : 15,
        paddingBottom : 15,
    },
    CommentView : {
        padding : 15,
        fontSize : 15,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        borderBottomLeftRadius : 10,
        backgroundColor : '#bdc3c7',
    },
    personView : {
        width : '50%',
        flexDirection : 'row',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    }
})