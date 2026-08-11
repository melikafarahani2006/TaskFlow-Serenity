import { EntityGrid } from '@serenity-is/corelib';
import { WorkspaceMemberColumns, WorkspaceMemberRow, WorkspaceMemberService } from '../../ServerTypes/TaskFlow';
import { WorkspaceMemberDialog } from './WorkspaceMemberDialog';

export class WorkspaceMemberGrid extends EntityGrid<WorkspaceMemberRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return WorkspaceMemberColumns.columnsKey; }
    protected override getDialogType() { return WorkspaceMemberDialog; }
    protected override getRowDefinition() { return WorkspaceMemberRow; }
    protected override getService() { return WorkspaceMemberService.baseUrl; }
}