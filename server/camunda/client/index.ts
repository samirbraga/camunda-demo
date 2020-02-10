import { Client, Variables, logger } from "camunda-external-task-client-js";
import * as Topics from './topics';

const config = {
    baseUrl: `${process.env.CAMUNDA_SERVER}engine-rest`,
    // use: logger
};
const client = new Client(config);

client.subscribe(Topics.SignIn, async ({ task, taskService }) => {
  setTimeout(() => {
    taskService.complete(task);
  }, 8000);
});