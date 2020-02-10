import { Variables, Task } from 'camunda-external-task-client-js';
import { AxiosResponse } from 'axios';
import Api from '.';
import { ProcessInstance } from '../../@types';

const processDefinitionId = process.env.PROCESS_DEFINITION_ID;

export function startProcessInstance(loggedIn: boolean) {
    return new Promise((resolve, reject) => {
        const variables = new Variables();
        variables.set('loggedIn', loggedIn);
    
        Api.post(`/process-definition/${processDefinitionId}/start`, {
            variables: variables.getAllTyped()
        })
        .then(({ data }: AxiosResponse<ProcessInstance>) => {
            resolve(data.id);
        })
        .catch(error => {
            reject(error);
        });
    });
};

export function completeUserTask(processInstanceId: string, taskDefinitionKey: string): Promise<undefined> {
    return new Promise((resolve, reject) => {  
        Api.get(`/task`, {
            params: {
                taskDefinitionKey,
                processInstanceId
            }
        })
        .then(({ data }: AxiosResponse<Task[]>) => {
            const taskId = data[0].id;
            Api.post(`/task/${taskId}/complete`, {
                params: {
                    taskDefinitionKey,
                    processInstanceId
                }
            })
            .then(() => resolve())
            .catch(error => {
                reject(error);
            });
        })
        .catch(error => {
            reject(error);
        });
    })
};