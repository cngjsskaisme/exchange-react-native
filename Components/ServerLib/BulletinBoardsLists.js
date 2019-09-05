import axios from 'axios'; 
import {server} from './config';


/*
BulletinBoardsLists_Mock 대용  

*/
async GetBulletinBoardsLists(){   
    var url = server.serverURL + '/process/ShowBulletinBoardsList';
    await axios.post(url) 
    .then((response) => {       
        async this.setState({ 
            BulletinBoardsLists: response.data.boardslist    
      }) 
    }) 
    .catch(function (error) {
        console.log(error); 
    });    
};
