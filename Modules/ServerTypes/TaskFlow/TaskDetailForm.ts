import { initFormType, IntegerEditor, LookupEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";
import { PersianDateEditor } from "../../Common/PersianDateEditor";

export interface TaskDetailForm {
    Title: StringEditor;
    Description: StringEditor;
    TaskStateId: LookupEditor;
    DueDate: PersianDateEditor;
    Duration: IntegerEditor;
    TagIds: ServiceLookupEditor;
}

export class TaskDetailForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.TaskDetail';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!TaskDetailForm.init) {
            TaskDetailForm.init = true;

            initFormType(TaskDetailForm, [
                'Title', StringEditor,
                'Description', StringEditor,
                'TaskStateId', LookupEditor,
                'DueDate', PersianDateEditor,
                'Duration', IntegerEditor,
                'TagIds', ServiceLookupEditor
            ]);
        }
    }
}