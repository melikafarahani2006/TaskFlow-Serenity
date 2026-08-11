import { EntityGrid } from '@serenity-is/corelib';
import { WorkspaceColumns, WorkspaceRow, WorkspaceService } from '../../ServerTypes/TaskFlow';
import { WorkspaceDialog } from './WorkspaceDialog';

export class WorkspaceGrid extends EntityGrid<WorkspaceRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return WorkspaceColumns.columnsKey; }
    protected override getDialogType() { return WorkspaceDialog; }
    protected override getRowDefinition() { return WorkspaceRow; }
    protected override getService() { return WorkspaceService.baseUrl; }
}