import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TaskRow } from "./TaskRow";

export interface TaskColumns {
    Title: Column<TaskRow>;
    ProjectName: Column<TaskRow>;
    Description: Column<TaskRow>;
    TaskStateName: Column<TaskRow>;
    TagNames: Column<TaskRow>;
    DueDate: Column<TaskRow>;
    CreatedAt: Column<TaskRow>;
    UpdatedAt: Column<TaskRow>;
}

export class TaskColumns extends ColumnsBase<TaskRow> {
    static readonly columnsKey = 'TaskFlow.Task';
    static readonly Fields = fieldsProxy<TaskColumns>();
}