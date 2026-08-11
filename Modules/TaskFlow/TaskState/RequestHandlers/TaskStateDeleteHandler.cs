using MyRow = TaskFlowSerenity.TaskFlow.TaskStateRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskStateDeleteHandler :
    IDeleteHandler<MyRow, DeleteRequest, DeleteResponse>
{
}

public class TaskStateDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITaskStateDeleteHandler
{
    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();

        var task = TaskRow.Fields;

        var hasTasks = Connection.Exists<TaskRow>(
            task.TaskStateId == Row.Id.Value &
            task.IsDeleted == 0
        );

        if (hasTasks)
        {
            throw new ValidationError(
                "TaskStateHasTasks",
                "Task State",
                "This task state cannot be deleted because it is used by active tasks."
            );
        }
    }
}