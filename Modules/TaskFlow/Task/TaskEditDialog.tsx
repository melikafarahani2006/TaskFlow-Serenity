import { GridEditorDialog } from '@serenity-is/extensions';
import {
    TaskDetailForm,
    TaskRow,
    TaskStateService
} from '../../ServerTypes/TaskFlow';
import '../../Common/PersianDateEditor';

export class TaskEditDialog extends GridEditorDialog<TaskRow> {

    static override[Symbol.typeInfo] =
        this.registerClass('TaskFlowSerenity.TaskFlow.TaskEditDialog');

    protected override getFormKey() {
        return TaskDetailForm.formKey;
    }

    protected override getLocalTextPrefix() {
        return TaskRow.localTextPrefix;
    }

    protected form =
        new TaskDetailForm(this.idPrefix);

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