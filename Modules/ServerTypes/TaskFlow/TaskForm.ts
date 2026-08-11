import { DateEditor, initFormType, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";

export interface TaskForm {
    ProjectId: ServiceLookupEditor;
    Title: StringEditor;
    Description: StringEditor;
    TaskStateId: ServiceLookupEditor;
    DueDate: DateEditor;
    TagIds: ServiceLookupEditor;
}

export class TaskForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.Task';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!TaskForm.init) {
            TaskForm.init = true;

            initFormType(TaskForm, [
                'ProjectId', ServiceLookupEditor,
                'Title', StringEditor,
                'Description', StringEditor,
                'TaskStateId', ServiceLookupEditor,
                'DueDate', DateEditor,
                'TagIds', ServiceLookupEditor
            ]);
        }
    }
}