using MyRow = TaskFlowSerenity.TaskFlow.TaskStateRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskStateListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class TaskStateListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITaskStateListHandler
{
}