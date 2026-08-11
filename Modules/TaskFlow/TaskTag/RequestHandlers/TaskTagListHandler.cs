using MyRow = TaskFlowSerenity.TaskFlow.TaskTagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskTagListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class TaskTagListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITaskTagListHandler
{
}