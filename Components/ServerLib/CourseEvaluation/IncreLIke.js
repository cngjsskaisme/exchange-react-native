/*
5. Increase value of 'likes' 1 of a requested reply
     courseid: specifies current courseid. located: 'this.state.courseid' in EvaluationScreen 
     commentid: specifies current courseid. located: 'l.commentid' in EvaluationScreen
*/  

_handleIncreLike = async () => {
    var url = server.serverURL + '/process/IncreLikeCourseEvaluation';  
    
    await this.setState({
      isLoading: true
    });
    await axios.post(url, {
      courseid: "5d7c784f4f5664d7652bec5b",  
      commentid: "5d7dd78efbc83a72bb7b4dec",  
      }) 
        .then((response) => {       
            this.setState({ 
              isLoading: false
            });  
        }) 
        .catch(( err ) => {
            Alert.alert(
                'Cannot connect to the server. Falling back to default option.',
                'There are two possible errors : \n 1. Your Phone is not connected to the internet. \n 2. The server is not available right now.',
                [{text: 'OK'}]
            ); 
        });    
    }