import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { WorkspaceRow } from "./WorkspaceRow";

export interface WorkspaceColumns {
    Name: Column<WorkspaceRow>;
    Description: Column<WorkspaceRow>;
    CreatedAt: Column<WorkspaceRow>;
    UpdatedAt: Column<WorkspaceRow>;
}

export class WorkspaceColumns extends ColumnsBase<WorkspaceRow> {
    static readonly columnsKey = 'TaskFlow.Workspace';
    static readonly Fields = fieldsProxy<WorkspaceColumns>();
}