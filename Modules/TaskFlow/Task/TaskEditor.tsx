import { GridEditorBase } from '@serenity-is/extensions';
import {
    TaskColumns,
    TaskRow
} from '../../ServerTypes/TaskFlow';
import { TaskEditDialog } from './TaskEditDialog';
import { persianDate } from '../../Common/PersianDateFormatter';

export class TaskEditor<P = {}> extends GridEditorBase<TaskRow, P> {

    static override[Symbol.typeInfo] =
        this.registerEditor('TaskFlowSerenity.TaskFlow.TaskEditor');

    protected override getColumnsKey() {
        return TaskColumns.columnsKey;
    }

    protected override getDialogType() {
        return TaskEditDialog;
    }

    protected override getAddButtonCaption() {
        return 'تسک جدید';
    }

    protected override getColumns() {
        const columns = super.getColumns();

        const dueDateColumn = columns.find(
            x => x.field === TaskRow.Fields.DueDate
        );

        if (dueDateColumn) {
            dueDateColumn.format = ctx =>
                persianDate(ctx.value);
        }

        return columns;
    }
}