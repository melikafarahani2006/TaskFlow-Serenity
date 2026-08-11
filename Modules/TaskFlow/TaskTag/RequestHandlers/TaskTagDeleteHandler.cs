using MyRow = TaskFlowSerenity.TaskFlow.TaskTagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskTagDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class TaskTagDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITaskTagDeleteHandler
{
}