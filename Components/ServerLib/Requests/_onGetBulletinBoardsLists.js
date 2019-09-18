import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _onGetBulletinBoardsLists = async (_onSetState) => {   
    var url = server.serverURL + '/process/ShowBulletinBoardsList';
    _onSetState({
        isLoading: true,
        isError: false
    })
    await axios.post(url) 
        .then((response) => {       
            _onSetState({ 
            boardslist: response.data.boardslist,
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
