import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

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
    static readonly lookupKey = 'TaskFlow.TaskState';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<TaskStateRow>('TaskFlow.TaskState') }
    static async getLookupAsync() { return getLookupAsync<TaskStateRow>('TaskFlow.TaskState') }

    static readonly deletePermission = 'TaskFlow:Manage';
    static readonly insertPermission = 'TaskFlow:Manage';
    static readonly readPermission = 'TaskFlow:Access';
    static readonly updatePermission = 'TaskFlow:Manage';

    static readonly Fields = fieldsProxy<TaskStateRow>();
}