import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface TagForm {
    Name: StringEditor;
    Color: StringEditor;
}

export class TagForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.Tag';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!TagForm.init) {
            TagForm.init = true;

            initFormType(TagForm, [
                'Name', StringEditor,
                'Color', StringEditor
            ]);
        }
    }
}