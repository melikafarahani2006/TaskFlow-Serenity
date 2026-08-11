using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceMemberRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceMemberDeleteHandler : IDeleteHandler<MyRow, DeleteRequest, DeleteResponse> { }

public class WorkspaceMemberDeleteHandler(IRequestContext context) :
    DeleteRequestHandler<MyRow, DeleteRequest, DeleteResponse>(context),
    IWorkspaceMemberDeleteHandler
{
}