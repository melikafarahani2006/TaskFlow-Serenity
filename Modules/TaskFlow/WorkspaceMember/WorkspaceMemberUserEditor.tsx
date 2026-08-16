import {
    ComboboxSearchQuery,
    EditorProps,
    ServiceLookupEditor,
    ServiceLookupEditorOptions
} from '@serenity-is/corelib';

export class WorkspaceMemberUserEditor
    extends ServiceLookupEditor<ServiceLookupEditorOptions> {

    static override[Symbol.typeInfo] =
        this.registerEditor(
            'TaskFlowSerenity.TaskFlow.WorkspaceMemberUserEditor'
        );

    constructor(props: EditorProps<ServiceLookupEditorOptions>) {
        super({
            ...props,
            service: 'Administration/User/List',
            idField: 'UserId',
            textField: 'DisplayName'
        });
    }

    protected override getListRequest(query: ComboboxSearchQuery) {
        const request = super.getListRequest(query) as any;

        request.ForWorkspaceMember = true;

        return request;
    }
}