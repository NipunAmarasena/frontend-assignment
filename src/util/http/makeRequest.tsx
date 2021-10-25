import axios from 'axios';

export const getRequest = async (url) => {
    let result = await axios.get(url);
    return result.data;
}
