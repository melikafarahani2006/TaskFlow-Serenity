import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TaskTagRow } from "./TaskTagRow";

export interface TaskTagColumns {
    TaskTitle: Column<TaskTagRow>;
    TagName: Column<TaskTagRow>;
}

export class TaskTagColumns extends ColumnsBase<TaskTagRow> {
    static readonly columnsKey = 'TaskFlow.TaskTag';
    static readonly Fields = fieldsProxy<TaskTagColumns>();
}