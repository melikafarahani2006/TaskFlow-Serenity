import { EnumEditor, initFormType, IntegerEditor, LookupEditor, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";
import { PersianDateEditor } from "../../Common/PersianDateEditor";
import { TaskPriority } from "./TaskPriority";

export interface TaskForm {
    ProjectId: ServiceLookupEditor;
    Title: StringEditor;
    Description: StringEditor;
    TaskStateId: LookupEditor;
    Priority: EnumEditor;
    DueDate: PersianDateEditor;
    Duration: IntegerEditor;
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
                'TaskStateId', LookupEditor,
                'Priority', EnumEditor,
                'DueDate', PersianDateEditor,
                'Duration', IntegerEditor,
                'TagIds', ServiceLookupEditor
            ]);
        }
    }
}

[TaskPriority]; // referenced types