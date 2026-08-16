import { EntityDialog } from '@serenity-is/corelib';
import {
    ProjectForm,
    ProjectRow,
    ProjectService
} from '../../ServerTypes/TaskFlow';

import '../Task/TaskEditor';

export class ProjectDialog extends EntityDialog<ProjectRow, any> {

    static override[Symbol.typeInfo] =
        this.registerClass(
            "TaskFlowSerenity.TaskFlow.ProjectDialog"
        );

    protected override getFormKey() {
        return ProjectForm.formKey;
    }

    protected override getRowDefinition() {
        return ProjectRow;
    }

    protected override getService() {
        return ProjectService.baseUrl;
    }

    protected form = new ProjectForm(this);


    protected override getSaveEntity() {

        const entity = super.getSaveEntity();

        entity.TaskList?.forEach(task => {

            delete task.CreatedAt;
            delete task.UpdatedAt;
            delete task.IsDeleted;
            delete task.ProjectId;

        });

        return entity;
    }
}