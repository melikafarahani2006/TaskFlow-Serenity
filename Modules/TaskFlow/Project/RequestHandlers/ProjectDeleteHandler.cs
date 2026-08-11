using MyRow = TaskFlowSerenity.TaskFlow.ProjectRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IProjectDeleteHandler :
    IDeleteHandler<MyRow, DeleteRequest, DeleteResponse>
{
}

public class ProjectDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IProjectDeleteHandler
{
    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();

        var task = TaskRow.Fields;

        var hasTasks = Connection.Exists<TaskRow>(
            task.ProjectId == Row.Id.Value &
            task.IsDeleted == 0
        );

        if (hasTasks)
        {
            throw new ValidationError(
                "ProjectHasTasks",
                "Project",
                "This project cannot be deleted because it contains tasks."
            );
        }
    }
}