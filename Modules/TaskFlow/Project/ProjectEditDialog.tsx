import { GridEditorDialog } from '@serenity-is/extensions';
import {
    ProjectDetailForm,
    ProjectRow
} from '../../ServerTypes/TaskFlow';

export class ProjectEditDialog extends GridEditorDialog<ProjectRow> {
    static override[Symbol.typeInfo] =
        this.registerClass('TaskFlowSerenity.TaskFlow.ProjectEditDialog');

    protected override getFormKey() {
        return ProjectDetailForm.formKey;
    }

    protected override getLocalTextPrefix() {
        return ProjectRow.localTextPrefix;
    }

    protected form = new ProjectDetailForm(this.idPrefix);
}