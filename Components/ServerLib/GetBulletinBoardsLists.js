import axios from 'axios'; 
import {server} from './config';


/*
BulletinBoardsLists_Mock 대용  

*/ 

const GetBulletinBoardsLists = async () => {   
        const url = server.serverURL + '/process/ShowBulletinBoardsList';
        return axios.post(url);

    }

/*
    var url = server.serverURL + '/process/ShowBulletinBoardsList';
    await axios.post(url) 
    .then(function (response) {       
        return response.data.boardslist;
    })
    .catch(function (error) {
        console.log(error); 
    });    
*/

export default GetBulletinBoardsLists;