using MyRow = TaskFlowSerenity.TaskFlow.TaskStateRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskStateRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class TaskStateRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITaskStateRetrieveHandler
{
}