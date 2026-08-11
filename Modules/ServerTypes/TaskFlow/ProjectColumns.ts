import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ProjectRow } from "./ProjectRow";

export interface ProjectColumns {
    Name: Column<ProjectRow>;
    WorkspaceName: Column<ProjectRow>;
    Description: Column<ProjectRow>;
    CreatedAt: Column<ProjectRow>;
    UpdatedAt: Column<ProjectRow>;
}

export class ProjectColumns extends ColumnsBase<ProjectRow> {
    static readonly columnsKey = 'TaskFlow.Project';
    static readonly Fields = fieldsProxy<ProjectColumns>();
}