import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config'; 

export default _onGetBulletinBoardsLists = async (_onSetState) => {   
    var url =  server.serverURL + "/process/BulletinBoards/ShowBulletinBoardsList";
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
        _onSetState({
            isError: true,
        })
    });    
}