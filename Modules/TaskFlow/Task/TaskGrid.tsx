import { EntityGrid } from '@serenity-is/corelib';
import {
    TaskColumns,
    TaskRow,
    TaskService
} from '../../ServerTypes/TaskFlow';

import { TaskDialog } from './TaskDialog';
import { persianDate } from '../../Common/PersianDateFormatter';

export class TaskGrid extends EntityGrid<TaskRow> {

    static override[Symbol.typeInfo] =
        this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() {
        return TaskColumns.columnsKey;
    }

    protected override getDialogType() {
        return TaskDialog;
    }

    protected override getRowDefinition() {
        return TaskRow;
    }

    protected override getService() {
        return TaskService.baseUrl;
    }

    protected override getColumns() {

        const columns = super.getColumns();

        const dateFields = [
            TaskRow.Fields.DueDate,
            TaskRow.Fields.CreatedAt,
            TaskRow.Fields.UpdatedAt
        ];

        for (const field of dateFields) {

            const column = columns.find(
                x => x.field === field
            );

            if (column) {
                column.format = ctx =>
                    persianDate(ctx.value);
            }
        }

        return columns;
    }
}