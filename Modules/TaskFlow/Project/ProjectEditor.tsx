import { GridEditorBase } from '@serenity-is/extensions';
import {
    ProjectColumns,
    ProjectRow
} from '../../ServerTypes/TaskFlow';
import { ProjectEditDialog } from './ProjectEditDialog';

export class ProjectEditor extends GridEditorBase<ProjectRow> {
    static override[Symbol.typeInfo] =
        this.registerEditor('TaskFlowSerenity.TaskFlow.ProjectEditor');

    protected override getColumnsKey() {
        return ProjectColumns.columnsKey;
    }

    protected override getDialogType() {
        return ProjectEditDialog;
    }

    protected override getAddButtonCaption() {
        return 'پروژه جدید';
    }
}