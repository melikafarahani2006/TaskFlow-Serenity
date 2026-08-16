import { GridEditorDialog } from '@serenity-is/extensions';
import {
    WorkspaceMemberDetailForm,
    WorkspaceMemberRow
} from '../../ServerTypes/TaskFlow';

import './WorkspaceMemberRoleEditor';
import './WorkspaceMemberUserEditor';

export class WorkspaceMemberEditDialog
    extends GridEditorDialog<WorkspaceMemberRow> {

    static override[Symbol.typeInfo] =
        this.registerClass(
            'TaskFlowSerenity.TaskFlow.WorkspaceMemberEditDialog'
        );

    protected override getFormKey() {
        return WorkspaceMemberDetailForm.formKey;
    }

    protected override getLocalTextPrefix() {
        return WorkspaceMemberRow.localTextPrefix;
    }

    protected form =
        new WorkspaceMemberDetailForm(this.idPrefix);

    protected override getSaveEntity() {
        const entity = super.getSaveEntity();

        entity.UserDisplayName = this.form.UserId.text;

        return entity;
    }
}