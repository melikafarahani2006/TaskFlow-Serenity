import { EntityGrid } from '@serenity-is/corelib';
import { TagColumns, TagRow, TagService } from '../../ServerTypes/TaskFlow';
import { TagDialog } from './TagDialog';

export class TagGrid extends EntityGrid<TagRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return TagColumns.columnsKey; }
    protected override getDialogType() { return TagDialog; }
    protected override getRowDefinition() { return TagRow; }
    protected override getService() { return TagService.baseUrl; }
}