export type ProcessInstance = {
    id: string,
    definitionId: string,
    businessKey?: string,
    caseInstanceId?: string,
    ended: boolean,
    suspended: boolean,
    tenantId?: string
};