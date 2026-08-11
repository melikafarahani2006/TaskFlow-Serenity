import { fieldsProxy } from "@serenity-is/corelib";

export interface WorkspaceRow {
    Id?: string;
    Name?: string;
    Description?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
}

export abstract class WorkspaceRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'TaskFlow.Workspace';
    static readonly deletePermission = 'TaskFlow:Workspace';
    static readonly insertPermission = 'TaskFlow:Workspace';
    static readonly readPermission = 'TaskFlow:Workspace';
    static readonly updatePermission = 'TaskFlow:Workspace';

    static readonly Fields = fieldsProxy<WorkspaceRow>();
}