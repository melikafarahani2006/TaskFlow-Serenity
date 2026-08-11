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
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<WorkspaceMemberRow>();
}