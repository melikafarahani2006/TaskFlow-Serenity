import { fieldsProxy } from "@serenity-is/corelib";

export interface WorkspaceMemberRow {
    Id?: string;
    WorkspaceId?: string;
    UserId?: number;
    Role?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
    WorkspaceName?: string;
    UserDisplayName?: string;
}

export abstract class WorkspaceMemberRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Role';
    static readonly localTextPrefix = 'TaskFlow.WorkspaceMember';
    static readonly deletePermission = 'TaskFlow:Manage';
    static readonly insertPermission = 'TaskFlow:Manage';
    static readonly readPermission = 'TaskFlow:Access';
    static readonly updatePermission = 'TaskFlow:Manage';

    static readonly Fields = fieldsProxy<WorkspaceMemberRow>();
}