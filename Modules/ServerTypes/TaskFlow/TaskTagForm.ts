import { initFormType, PrefixedContext, ServiceLookupEditor } from "@serenity-is/corelib";

export interface TaskTagForm {
    TaskId: ServiceLookupEditor;
    TagId: ServiceLookupEditor;
}

export class TaskTagForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.TaskTag';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!TaskTagForm.init) {
            TaskTagForm.init = true;

            initFormType(TaskTagForm, [
                'TaskId', ServiceLookupEditor,
                'TagId', ServiceLookupEditor
            ]);
        }
    }
}