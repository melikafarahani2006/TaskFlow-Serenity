import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TaskStateRow } from "./TaskStateRow";

export interface TaskStateColumns {
    Name: Column<TaskStateRow>;
    CreatedAt: Column<TaskStateRow>;
    UpdatedAt: Column<TaskStateRow>;
}

export class TaskStateColumns extends ColumnsBase<TaskStateRow> {
    static readonly columnsKey = 'TaskFlow.TaskState';
    static readonly Fields = fieldsProxy<TaskStateColumns>();
}