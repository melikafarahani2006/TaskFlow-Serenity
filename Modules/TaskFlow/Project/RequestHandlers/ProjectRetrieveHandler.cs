using MyRow = TaskFlowSerenity.TaskFlow.ProjectRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IProjectRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class ProjectRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    IProjectRetrieveHandler
{
}