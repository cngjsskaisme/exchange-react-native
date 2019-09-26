import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _onGetBulletinBoardsReplies = async (state, _onSetState) => {   
    var url = server.serverURL + '/process/BulletinBoards/ShowComments';
    _onSetState({
        isLoading: true,
        isError: false,

        commentstartindex: 0,
        commentendindex: 19,
    }) 
    await axios.post(url, {userid: state.userid, boardid: state.boardid, 
        entryid: state.entryid, 
        commentstartindex: state.commentstartindex, commentendindex: state.commentendindex}) 

        .then((response) => {       
            _onSetState({ 
            commentslist: response.data.commentslist,
            isLoading: false
            }) 
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            );
        _onSetState({
            isError: true,
        })
    });    
}