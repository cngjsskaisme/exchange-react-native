import axios from 'axios'; 

import {server} from './config' 

constructor(props){
    super(props); 
}

var BulletinBoardsLists = async () => {   
    try { 
        var url = server.serverURL + '/process/ShowBulletinBoardsList';
        axios.post(url) 
        .then(function(response) => {      
            this.setState({      
              boardlists: response.data.boardlists
            }) 
        .catch(function (error) {
            console.log(error); 
        });  
        }) 
    }//try 닫기 
    catch (error) {
        console.error(error);
    } 
}; 

var GetBulletinBoardsLists = async() => {
    await BulletinBoardsLists();
    return this.state.boardlists;
}

GetBulletinBoardsLists();