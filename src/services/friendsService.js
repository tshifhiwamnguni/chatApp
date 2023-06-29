import axios from 'axios';
// free weather API
const URL = 'http://localhost:3001/api/'

// export const getFriends = async (body) => {
//     console.log('body; ',body);
//     let chatID = {
//         chatID: body.chatID
//     }
//     const data  = await axios.get(URL+'MyFriends',chatID);
//     return data;
// }


export const getFriends = async (body) => {
    const data  = await axios.get(URL+'getFriends',body);
    return data;
}
