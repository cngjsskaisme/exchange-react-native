import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _handleBulletinBoardsPostSubmit = async (state, _onSetState) => {
    var url = server.serverURL + '/process/AddEditEntry';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, {userid: state.currentuserid, boardid: state.boardid, 
        entryid: state.entryid, title: state.title, contents: state.contents}) 
        .then((response) => {       
            if(response.data.msg === 'success')
                _onSetState({
                    isLoading: false,
                    isUploadDone: true,
                }) 
        }) 
    .catch(( err ) => {
        Alert.alert(
            'Cannot connect to the server.',
            'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
            [{text: 'OK'}]
        );
    });  
}  