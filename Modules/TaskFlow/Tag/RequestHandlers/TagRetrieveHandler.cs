using MyRow = TaskFlowSerenity.TaskFlow.TagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITagRetrieveHandler : IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>> { }

public class TagRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITagRetrieveHandler
{
}