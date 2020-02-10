import Api from './api';

export const startProcess = () => {
    return Api.get('/start');
};