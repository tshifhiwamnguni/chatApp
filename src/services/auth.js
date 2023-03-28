import axios from 'axios';
// free weather API
const URL = 'http://localhost:3001/api/'


export const login = async (body) => {
    // console.log(body);
    const data  = await axios.post(URL+'login',body);
    return data;
}

export const register = async(body)=>{
    const data = await axios.post(URL+'register');
    return data
}