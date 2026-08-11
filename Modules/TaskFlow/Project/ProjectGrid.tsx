import { EntityGrid } from '@serenity-is/corelib';
import { ProjectColumns, ProjectRow, ProjectService } from '../../ServerTypes/TaskFlow';
import { ProjectDialog } from './ProjectDialog';

export class ProjectGrid extends EntityGrid<ProjectRow> {
    static override [Symbol.typeInfo] = this.registerClass("TaskFlowSerenity.TaskFlow.");

    protected override getColumnsKey() { return ProjectColumns.columnsKey; }
    protected override getDialogType() { return ProjectDialog; }
    protected override getRowDefinition() { return ProjectRow; }
    protected override getService() { return ProjectService.baseUrl; }
}