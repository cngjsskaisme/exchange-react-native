import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _handleDeleteReplies = async(state, _onSetState) => {
    var url = server.serverURL + '/process/DeleteComment';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, { boardid: "board1", entryid: "5d75a757d47cdf78a5ce79d1", replyid: "5d78f145a039958385f9c75d"}) 
        .then((response) => {       
            _onSetState({
            isLoading: false
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