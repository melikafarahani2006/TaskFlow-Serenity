import { initFormType, PrefixedContext, ServiceLookupEditor } from "@serenity-is/corelib";
import { OwnerWorkspaceEditor } from "../../TaskFlow/WorkspaceMember/OwnerWorkspaceEditor";
import { WorkspaceMemberRoleEditor } from "../../TaskFlow/WorkspaceMember/WorkspaceMemberRoleEditor";

export interface WorkspaceMemberForm {
    WorkspaceId: OwnerWorkspaceEditor;
    UserId: ServiceLookupEditor;
    Role: WorkspaceMemberRoleEditor;
}

export class WorkspaceMemberForm extends PrefixedContext {
    static readonly formKey = 'TaskFlow.WorkspaceMember';
    declare private static init: boolean;

    constructor(...args: ConstructorParameters<typeof PrefixedContext>) {
        super(...args);

        if (!WorkspaceMemberForm.init) {
            WorkspaceMemberForm.init = true;

            initFormType(WorkspaceMemberForm, [
                'WorkspaceId', OwnerWorkspaceEditor,
                'UserId', ServiceLookupEditor,
                'Role', WorkspaceMemberRoleEditor
            ]);
        }
    }
}