import { EntityGrid } from '@serenity-is/corelib';
import { TaskTagColumns, TaskTagRow, TaskTagService } from '../../ServerTypes/TaskFlow';
import { TaskTagDialog } from './TaskTagDialog';

export class TaskTagGrid extends EntityGrid<TaskTagRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return TaskTagColumns.columnsKey; }
    // protected override getDialogType() { return TaskTagDialog; }
    protected override getRowDefinition() { return TaskTagRow; }
    protected override getService() { return TaskTagService.baseUrl; }


    protected override getButtons() {
        return [];
    }

}