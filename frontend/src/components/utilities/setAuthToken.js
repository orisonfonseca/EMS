import axios from 'axios';
const setAuthToken=(token)=>{
    if(token){
        axios.defaults.headers.common['authetication']=token;
    }else{
        delete axios.defaults.headers.common['authetication']
    }
}

export default setAuthToken;