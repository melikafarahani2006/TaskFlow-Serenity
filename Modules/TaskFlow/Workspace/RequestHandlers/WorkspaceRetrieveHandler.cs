using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class WorkspaceRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IWorkspaceRetrieveHandler
{
}