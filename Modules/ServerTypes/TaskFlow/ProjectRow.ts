import { fieldsProxy } from "@serenity-is/corelib";
import { TaskRow } from "./TaskRow";

export interface ProjectRow {
    Id?: string;
    WorkspaceId?: string;
    Name?: string;
    Description?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
    WorkspaceName?: string;
    TaskList?: TaskRow[];
}

export abstract class ProjectRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'TaskFlow.Project';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<ProjectRow>();
}