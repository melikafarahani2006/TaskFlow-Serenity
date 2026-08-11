import { fieldsProxy } from "@serenity-is/corelib";

export interface TaskRow {
    Id?: string;
    ProjectId?: string;
    Title?: string;
    Description?: string;
    DueDate?: string;
    Order?: number;
    CreatedAt?: string;
    TaskStateId?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
    ProjectName?: string;
    TaskStateName?: string;
    TagNames?: string;
    TagIds?: string[];
}

export abstract class TaskRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'TaskFlow.Task';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TaskRow>();
}