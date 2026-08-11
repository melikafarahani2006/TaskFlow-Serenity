import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface WorkspaceForm {
    Name: StringEditor;
    Description: StringEditor;
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
                'Description', StringEditor
            ]);
        }
    }
}