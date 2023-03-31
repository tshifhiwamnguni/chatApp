import axios from 'axios';
// free weather API
const URL = 'http://localhost:3001/api/'

export const postMessage = async (body) => {
    console.log(body);
    const data  = await axios.post(URL+'post',body);
    return data;
}


export const getMessages = async (body) => {
    console.log('body; ',body);
    let chatID = {
        chatID: body.chatID
    }
    const data  = await axios.post(URL+'allMessages',chatID);
    return data;
}

