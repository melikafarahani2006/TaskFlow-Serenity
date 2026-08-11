import { EntityDialog } from '@serenity-is/corelib';
import { TaskStateForm, TaskStateRow, TaskStateService } from '../../ServerTypes/TaskFlow';

export class TaskStateDialog extends EntityDialog<TaskStateRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return TaskStateForm.formKey; }
    protected override getRowDefinition() { return TaskStateRow; }
    protected override getService() { return TaskStateService.baseUrl; }

    protected form = new TaskStateForm(this);
}