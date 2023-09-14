import axios from "axios";

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
    try {
        const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    } catch (err) {
        console.log(err);
    }  
}