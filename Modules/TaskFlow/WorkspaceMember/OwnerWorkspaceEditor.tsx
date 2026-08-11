import {
    ComboboxSearchQuery,
    EditorProps,
    ServiceLookupEditor,
    ServiceLookupEditorOptions
} from "@serenity-is/corelib";

interface OwnerWorkspaceRequest {
    OwnerOnly?: boolean;
}

export class OwnerWorkspaceEditor
    extends ServiceLookupEditor<ServiceLookupEditorOptions> {

    static override[Symbol.typeInfo] =
        this.registerEditor(
            "TaskFlowSerenity.TaskFlow.OwnerWorkspaceEditor"
        );

    constructor(props: EditorProps<ServiceLookupEditorOptions>) {
        super({
            ...props,
            service: "TaskFlow/Workspace/List",
            idField: "Id",
            textField: "Name"
        });
    }

    protected override getListRequest(
        query: ComboboxSearchQuery
    ): any {

        const request = super.getListRequest(query) as OwnerWorkspaceRequest;

        request.OwnerOnly = true;

        return request;
    }
}