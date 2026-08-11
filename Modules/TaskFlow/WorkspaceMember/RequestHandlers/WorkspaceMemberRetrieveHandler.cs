using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceMemberRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceMemberRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class WorkspaceMemberRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IWorkspaceMemberRetrieveHandler
{
}