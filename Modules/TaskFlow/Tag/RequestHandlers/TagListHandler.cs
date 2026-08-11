using MyRow = TaskFlowSerenity.TaskFlow.TagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITagListHandler : IListHandler<MyRow, ListRequest, ListResponse<MyRow>> { }

public class TagListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITagListHandler
{
}