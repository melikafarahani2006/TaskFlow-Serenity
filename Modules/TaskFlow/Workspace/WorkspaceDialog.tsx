import { EntityDialog } from '@serenity-is/corelib';
import { WorkspaceForm, WorkspaceRow, WorkspaceService } from '../../ServerTypes/TaskFlow';

export class WorkspaceDialog extends EntityDialog<WorkspaceRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return WorkspaceForm.formKey; }
    protected override getRowDefinition() { return WorkspaceRow; }
    protected override getService() { return WorkspaceService.baseUrl; }

    protected form = new WorkspaceForm(this);
}