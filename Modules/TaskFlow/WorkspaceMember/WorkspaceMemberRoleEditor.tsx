import {
    EditorProps,
    SelectEditor,
    SelectEditorOptions
} from "@serenity-is/corelib";

export class WorkspaceMemberRoleEditor extends SelectEditor<SelectEditorOptions> {

    static override[Symbol.typeInfo] =
        this.registerEditor(
            "TaskFlowSerenity.TaskFlow.WorkspaceMemberRoleEditor"
        );

    constructor(props: EditorProps<SelectEditorOptions>) {
        super({
            ...props,
            items: [
                ["Member", "Member"],
                ["Owner", "Owner"]
            ],
            minimumResultsForSearch: -1
        });
    }
}