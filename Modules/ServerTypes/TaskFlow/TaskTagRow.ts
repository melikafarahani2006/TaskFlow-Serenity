import { fieldsProxy } from "@serenity-is/corelib";

export interface TaskTagRow {
    Id?: string;
    TaskId?: string;
    TagId?: string;
    TaskTitle?: string;
    TagName?: string;
}

export abstract class TaskTagRow {
    static readonly idProperty = 'Id';
    static readonly localTextPrefix = 'TaskFlow.TaskTag';
    static readonly deletePermission = 'TaskFlow:Manage';
    static readonly insertPermission = 'TaskFlow:Manage';
    static readonly readPermission = 'TaskFlow:Access';
    static readonly updatePermission = 'TaskFlow:Manage';

    static readonly Fields = fieldsProxy<TaskTagRow>();
}