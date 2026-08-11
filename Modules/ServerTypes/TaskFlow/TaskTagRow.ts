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
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TaskTagRow>();
}