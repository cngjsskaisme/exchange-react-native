import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _onAddBulletinBoardsReplies = async(state, _onSetState) => {
    var url = server.serverURL + '/process/AddComment';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, {userid: state.currentuserid, boardid: state.boardid, 
        entryid: state.entryid, contents: state.contents}) 
        .then((response) => {       
            _onSetState({
            isLoading: false
            });
        }) 
    .catch(( err ) => {
        Alert.alert(
            'Cannot connect to the server.',
            'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
            [{text: 'OK'}]
          );
    });    
} 