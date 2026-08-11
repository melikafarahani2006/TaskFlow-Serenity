import { EntityDialog } from '@serenity-is/corelib';
import { TagForm, TagRow, TagService } from '../../ServerTypes/TaskFlow';

export class TagDialog extends EntityDialog<TagRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return TagForm.formKey; }
    protected override getRowDefinition() { return TagRow; }
    protected override getService() { return TagService.baseUrl; }

    protected form = new TagForm(this);
}