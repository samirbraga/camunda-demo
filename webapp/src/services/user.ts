import Api from './api';

export const signIn = () => {
    return Api.get('/signin', {
        headers: {
            'x-process-instance-id': localStorage.getItem('processInstanceId')
        }
    });
};