import { completeUserTask } from "../camunda/service/process-definition";
import { Request, Response } from "express";

export const signIn = async (req: Request, res: Response) => {
    const processInstanceId = req.header['x-process-instance-id'];
    await completeUserTask(processInstanceId, 'tk_inf_login');
    res.end();
};