import { GridEditorBase } from '@serenity-is/extensions';
import {
    WorkspaceMemberColumns,
    WorkspaceMemberRow
} from '../../ServerTypes/TaskFlow';

import { WorkspaceMemberEditDialog } from './WorkspaceMemberEditDialog';

export class WorkspaceMemberEditor<P = {}>
    extends GridEditorBase<WorkspaceMemberRow, P> {

    static override[Symbol.typeInfo] =
        this.registerEditor(
            'TaskFlowSerenity.TaskFlow.WorkspaceMemberEditor'
        );

    protected override getColumnsKey() {
        return WorkspaceMemberColumns.columnsKey;
    }

    protected override getDialogType() {
        return WorkspaceMemberEditDialog;
    }

    protected override getAddButtonCaption() {
        return 'عضو جدید';
    }
}