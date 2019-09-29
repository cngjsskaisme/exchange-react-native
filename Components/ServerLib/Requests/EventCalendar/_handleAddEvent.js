import { Alert } from 'react-native';
import axios from 'axios'; 
import {server} from '../../config';

export default _handleAddEvent = async(state, _onSetState) => {
    var url = server.serverURL + '/process/EventCalendar/AddEvent';
    _onSetState({
        isLoading: true,
        isError: false
    }) 
    await axios.post(url,{
            userid: "5d5cac858f549f46e0b2a76f", 
            startday: '2019-09-25', 
            days: 4,
            startindex: 0,
            //endindex: 19,  
            type: [],
            //filter: " "
        })   
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
