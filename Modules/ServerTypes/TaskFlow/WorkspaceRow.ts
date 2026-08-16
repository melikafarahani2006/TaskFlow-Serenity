import { fieldsProxy } from "@serenity-is/corelib";
import { ProjectRow } from "./ProjectRow";
import { WorkspaceMemberRow } from "./WorkspaceMemberRow";

export interface WorkspaceRow {
    Id?: string;
    Name?: string;
    Description?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
    ProjectList?: ProjectRow[];
    MemberList?: WorkspaceMemberRow[];
}

export abstract class WorkspaceRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'TaskFlow.Workspace';
    static readonly deletePermission = 'TaskFlow:Manage';
    static readonly insertPermission = 'TaskFlow:Manage';
    static readonly readPermission = 'TaskFlow:Access';
    static readonly updatePermission = 'TaskFlow:Manage';

    static readonly Fields = fieldsProxy<WorkspaceRow>();
}