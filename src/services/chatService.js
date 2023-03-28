import axios from 'axios';
// free weather API
const URL = 'http://localhost:3001/api/'

export const postMessage = async (body) => {
    console.log(body);
    const data  = await axios.post(URL+'post',body);
    return data;
}
