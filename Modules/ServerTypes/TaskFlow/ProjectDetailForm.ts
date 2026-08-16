import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface ProjectDetailForm {
    Name: StringEditor;
    Description: StringEditor;
}

export class ProjectDetailForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.ProjectDetail';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!ProjectDetailForm.init) {
            ProjectDetailForm.init = true;

            initFormType(ProjectDetailForm, [
                'Name', StringEditor,
                'Description', StringEditor
            ]);
        }
    }
}