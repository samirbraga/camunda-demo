import axios from 'axios';

const Api = axios.create({
    baseURL: `${process.env.CAMUNDA_SERVER}engine-rest`
});

export default Api;