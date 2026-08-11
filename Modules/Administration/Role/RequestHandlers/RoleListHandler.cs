using MyRow = TaskFlowSerenity.Administration.RoleRow;

namespace TaskFlowSerenity.Administration;

public interface IRoleListHandler : IListHandler<MyRow> { }

public class RoleListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), IRoleListHandler
{
}