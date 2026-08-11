import { EntityDialog } from '@serenity-is/corelib';
import { ProjectForm, ProjectRow, ProjectService } from '../../ServerTypes/TaskFlow';

export class ProjectDialog extends EntityDialog<ProjectRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getFormKey() { return ProjectForm.formKey; }
    protected override getRowDefinition() { return ProjectRow; }
    protected override getService() { return ProjectService.baseUrl; }

    protected form = new ProjectForm(this);
}