import { initFormType, PrefixedContext, ServiceLookupEditor, StringEditor } from "@serenity-is/corelib";
import { TaskEditor } from "../../TaskFlow/Task/TaskEditor";

export interface ProjectForm {
    WorkspaceId: ServiceLookupEditor;
    Name: StringEditor;
    Description: StringEditor;
    TaskList: TaskEditor;
}

export class ProjectForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.Project';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!ProjectForm.init) {
            ProjectForm.init = true;

            initFormType(ProjectForm, [
                'WorkspaceId', ServiceLookupEditor,
                'Name', StringEditor,
                'Description', StringEditor,
                'TaskList', TaskEditor
            ]);
        }
    }
}