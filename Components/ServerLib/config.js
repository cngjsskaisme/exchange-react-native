import { AsyncStorage } from 'react-native';

// server 연결 관련 
const server = {
  serverURL: "http://172.16.144.97:3000",
}; 

//참고: https://medium.com/@njwest/building-a-react-native-jwt-client-api-requests-and-asyncstorage-d1a20ab60cf4 
// asyncstorage 관련
const deviceStorage = {
  async saveKey(key, valueToSave) {
    try {
      await AsyncStorage.setItem(key, valueToSave);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },  
  async getJWT(element) {
    let value = "";
    try { 
      value = await AsyncStorage.getItem(element); 
      return value;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }    
  }, 

  async deleteJWT() {
    try{
      await AsyncStorage.removeItem('id_token')
      .then(
        () => {
          this.setState({
            jwt: ''
          })
        }
      );
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }
}; 

// auth(인증) 관련
const auth = { 
   async logout(){  
     try{ 
      deviceStorage.deleteJWT(); 
          
      return "Auths";
     } 
     catch(error){
        console.log('AsyncStorage Error: ' + error.message);
     } 
  }, 

  async checkauth(){ //로그인 혹은 외원 가입이 되어있는 상태인지 확인
    try{
    return await deviceStorage.getJWT('id_token');  
    } 
    catch(error){
        console.log('AsyncStorage Error: ' + error.message);
     } 
  }, 
  goauthpage(){ // 홈페이지로 이동하기 위함. (현재의 auth를 다른 페이지가 수핼할 경우 대비)
    return "Auths";
  }
}; 

export {server, deviceStorage}
