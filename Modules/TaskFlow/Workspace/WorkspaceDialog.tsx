import { EntityDialog } from '@serenity-is/corelib';
import {
    WorkspaceForm,
    WorkspaceRow,
    WorkspaceService
} from '../../ServerTypes/TaskFlow';

import '../Project/ProjectEditor';

export class WorkspaceDialog extends EntityDialog<WorkspaceRow, any> {
    static override[Symbol.typeInfo] =
        this.registerClass("TaskFlowSerenity.TaskFlow.WorkspaceDialog");

    protected override getFormKey() {
        return WorkspaceForm.formKey;
    }

    protected override getRowDefinition() {
        return WorkspaceRow;
    }

    protected override getService() {
        return WorkspaceService.baseUrl;
    }

    protected override getSaveEntity() {

        const entity = super.getSaveEntity();

        entity.ProjectList?.forEach(project => {

            delete project.CreatedAt;
            delete project.UpdatedAt;
            delete project.IsDeleted;
            delete project.WorkspaceId;

        });

        return entity;
    }

    protected form = new WorkspaceForm(this);
}