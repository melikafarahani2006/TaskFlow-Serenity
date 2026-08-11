import { EntityDialog } from '@serenity-is/corelib';
import { WorkspaceMemberForm, WorkspaceMemberRow, WorkspaceMemberService } from '../../ServerTypes/TaskFlow';
import "./WorkspaceMemberRoleEditor";
import "./OwnerWorkspaceEditor";

export class WorkspaceMemberDialog extends EntityDialog<WorkspaceMemberRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return WorkspaceMemberForm.formKey; }
    protected override getRowDefinition() { return WorkspaceMemberRow; }
    protected override getService() { return WorkspaceMemberService.baseUrl; }

    protected form = new WorkspaceMemberForm(this);
}