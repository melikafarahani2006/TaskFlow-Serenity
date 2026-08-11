using MyRow = TaskFlowSerenity.TaskFlow.TagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITagDeleteHandler :
    IDeleteHandler<MyRow, DeleteRequest, DeleteResponse>
{
}

public class TagDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITagDeleteHandler
{
    protected override void OnBeforeDelete()
    {
        base.OnBeforeDelete();

        var taskTag = TaskTagRow.Fields.As("tt");
        var task = TaskRow.Fields.As("t");

        var hasActiveTasks = new SqlQuery()
            .From(taskTag)
            .InnerJoin(
                task,
                task.Id == taskTag.TaskId
            )
            .Select("1")
            .Where(
                taskTag.TagId == Row.Id.Value &
                task.IsDeleted == 0
            )
            .Exists(Connection);

        if (hasActiveTasks)
        {
            throw new ValidationError(
                "TagHasTasks",
                "Tag",
                "This tag cannot be deleted because it is used by active tasks."
            );
        }
    }
}