import { EntityDialog } from '@serenity-is/corelib';
import { TaskTagForm, TaskTagRow, TaskTagService } from '../../ServerTypes/TaskFlow';

export class TaskTagDialog extends EntityDialog<TaskTagRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return TaskTagForm.formKey; }
    protected override getRowDefinition() { return TaskTagRow; }
    protected override getService() { return TaskTagService.baseUrl; }

    protected form = new TaskTagForm(this);
}