import { EntityGrid } from '@serenity-is/corelib';
import { TaskStateColumns, TaskStateRow, TaskStateService } from '../../ServerTypes/TaskFlow';
import { TaskStateDialog } from './TaskStateDialog';

export class TaskStateGrid extends EntityGrid<TaskStateRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return TaskStateColumns.columnsKey; }
    protected override getDialogType() { return TaskStateDialog; }
    protected override getRowDefinition() { return TaskStateRow; }
    protected override getService() { return TaskStateService.baseUrl; }
}