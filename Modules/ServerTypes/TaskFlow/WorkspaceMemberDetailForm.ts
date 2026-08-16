import { initFormType, PrefixedContext } from "@serenity-is/corelib";
import { WorkspaceMemberRoleEditor } from "../../TaskFlow/WorkspaceMember/WorkspaceMemberRoleEditor";
import { WorkspaceMemberUserEditor } from "../../TaskFlow/WorkspaceMember/WorkspaceMemberUserEditor";

export interface WorkspaceMemberDetailForm {
    UserId: WorkspaceMemberUserEditor;
    Role: WorkspaceMemberRoleEditor;
}

export class WorkspaceMemberDetailForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.WorkspaceMemberDetail';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!WorkspaceMemberDetailForm.init) {
            WorkspaceMemberDetailForm.init = true;

            initFormType(WorkspaceMemberDetailForm, [
                'UserId', WorkspaceMemberUserEditor,
                'Role', WorkspaceMemberRoleEditor
            ]);
        }
    }
}