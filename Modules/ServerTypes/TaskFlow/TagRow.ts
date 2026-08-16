import { fieldsProxy } from "@serenity-is/corelib";

export interface TagRow {
    Id?: string;
    Name?: string;
    Color?: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    IsDeleted?: boolean;
}

export abstract class TagRow {
    static readonly idProperty = 'Id';
    static readonly isDeletedProperty = 'IsDeleted';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'TaskFlow.Tag';
    static readonly deletePermission = 'TaskFlow:Manage';
    static readonly insertPermission = 'TaskFlow:Manage';
    static readonly readPermission = 'TaskFlow:Access';
    static readonly updatePermission = 'TaskFlow:Manage';

    static readonly Fields = fieldsProxy<TagRow>();
}