using MyRow = TaskFlowSerenity.TaskFlow.TaskRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class TaskDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    ITaskDeleteHandler
{
}