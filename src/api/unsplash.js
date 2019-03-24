import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID d743b2d252646751f4be86d64b2edf7d8ceaef19658af6bad7e1295384649e6d'
    }
});