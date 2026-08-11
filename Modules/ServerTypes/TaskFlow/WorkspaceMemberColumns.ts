import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { WorkspaceMemberRow } from "./WorkspaceMemberRow";

export interface WorkspaceMemberColumns {
    WorkspaceName: Column<WorkspaceMemberRow>;
    UserDisplayName: Column<WorkspaceMemberRow>;
    Role: Column<WorkspaceMemberRow>;
    CreatedAt: Column<WorkspaceMemberRow>;
    UpdatedAt: Column<WorkspaceMemberRow>;
}

export class WorkspaceMemberColumns extends ColumnsBase<WorkspaceMemberRow> {
    static readonly columnsKey = 'TaskFlow.WorkspaceMember';
    static readonly Fields = fieldsProxy<WorkspaceMemberColumns>();
}