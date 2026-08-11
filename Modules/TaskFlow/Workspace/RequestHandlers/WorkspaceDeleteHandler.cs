using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceDeleteHandler :
    IDeleteHandler<MyRow, DeleteRequest, DeleteResponse>
{
}

public class WorkspaceDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IWorkspaceDeleteHandler
{
    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();

        var project = ProjectRow.Fields;

        var hasProjects = Connection.Exists<ProjectRow>(
            project.WorkspaceId == Row.Id.Value &
            project.IsDeleted == 0
        );

        if (hasProjects)
        {
            throw new ValidationError(
                "WorkspaceHasProjects",
                "Workspace",
                "This workspace cannot be deleted because it contains projects."
            );
        }
    }
}