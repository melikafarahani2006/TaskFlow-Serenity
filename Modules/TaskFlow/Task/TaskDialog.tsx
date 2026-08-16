import { EntityDialog } from '@serenity-is/corelib';
import { TaskForm, TaskRow, TaskService, TaskStateService } from '../../ServerTypes/TaskFlow';
import '../../Common/PersianDateEditor';

export class TaskDialog extends EntityDialog<TaskRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return TaskForm.formKey; }
    protected override getRowDefinition() { return TaskRow; }
    protected override getService() { return TaskService.baseUrl; }

    protected form = new TaskForm(this);

    protected override afterLoadEntity() {
        super.afterLoadEntity();

        if (!this.isNew())
            return;

        TaskStateService.List({}, response => {

            const defaultState = response.Entities?.find(
                x => x.Name === "To Do" && !x.IsDeleted
            );

            if (defaultState?.Id) {
                this.form.TaskStateId.value = defaultState.Id;
            }
        });
    }
}