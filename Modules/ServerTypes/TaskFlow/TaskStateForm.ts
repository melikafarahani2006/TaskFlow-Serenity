import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface TaskStateForm {
    Name: StringEditor;
}

export class TaskStateForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.TaskState';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!TaskStateForm.init) {
            TaskStateForm.init = true;

            initFormType(TaskStateForm, [
                'Name', StringEditor
            ]);
        }
    }
}