import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../config';

export default _handleAddReport = async(state, _onSetState) => {
    var url = server.serverURL + '/process/AddReport';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url, {title: "report title1", contents: "report contents1", userid: "5d5373177443381df03f3040", boardid: "board1", 
        entryid: "5d75a757d47cdf78a5ce79d1", commentid: null }) 
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