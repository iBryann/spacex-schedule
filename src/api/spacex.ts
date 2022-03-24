import axios from 'axios';

const spacex = axios.create({
    baseURL: 'https://api.spacexdata.com/v4',
});

export default spacex;