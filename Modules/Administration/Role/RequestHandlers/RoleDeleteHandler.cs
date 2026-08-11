using MyRow = TaskFlowSerenity.Administration.RoleRow;

namespace TaskFlowSerenity.Administration;

public interface IRoleDeleteHandler : IDeleteHandler<MyRow> { }

public class RoleDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), IRoleDeleteHandler
{
}