using MyRow = TaskFlowSerenity.TaskFlow.TaskTagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskTagRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class TaskTagRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITaskTagRetrieveHandler
{
}