import { startProcessInstance } from "../camunda/service/process-definition";
import { Request, Response } from "express";

export const start = async (req: Request, res: Response) => {
    const processInstanceId = await startProcessInstance(false);
    res.json({ processInstanceId });
};