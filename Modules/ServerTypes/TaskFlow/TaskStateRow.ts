import { fieldsProxy } from "@serenity-is/corelib";

export interface TaskStateRow {
    Id?: string;
    Name?: string;
    Order?: number;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
}

export abstract class TaskStateRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'TaskFlow.TaskState';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TaskStateRow>();
}