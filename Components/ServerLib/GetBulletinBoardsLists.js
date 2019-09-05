import React, { Component } from 'react';
import axios from 'axios'; 
import {server} from './config';


/*
BulletinBoardsLists_Mock 대용  

*/ 

export class GetBulletinBoardsLists extends Component{
  async GetBulletinBoardsLists(){   
    var url = server.serverURL + '/process/ShowBulletinBoardsList';
    await axios.post(url) 
    .then((response) => {       
        this.setState({ 
            BulletinBoardsLists: response.data.boardslist    
      }); 
    }) 
    .catch(function (error) {
        console.log(error); 
    });    
    }
}