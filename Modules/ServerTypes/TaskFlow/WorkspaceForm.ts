import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";
import { ProjectEditor } from "../../TaskFlow/Project/ProjectEditor";

export interface WorkspaceForm {
    Name: StringEditor;
    Description: StringEditor;
    ProjectList: ProjectEditor;
}

export class WorkspaceForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.Workspace';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!WorkspaceForm.init) {
            WorkspaceForm.init = true;

            initFormType(WorkspaceForm, [
                'Name', StringEditor,
                'Description', StringEditor,
                'ProjectList', ProjectEditor
            ]);
        }
    }
}