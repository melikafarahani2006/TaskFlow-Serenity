using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceMemberRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceMemberListHandler :
    IListHandler<MyRow, ListRequest, ListResponse<MyRow>>
{
}

public class WorkspaceMemberListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IWorkspaceMemberListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        var userId = Convert.ToInt32(User.GetIdentifier());

        var member = MyRow.Fields;
        var owner = WorkspaceMemberRow.Fields.As("owner");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(owner)
                    .Select("1")
                    .Where(
                        owner.WorkspaceId == member.WorkspaceId &
                        owner.UserId == userId &
                        owner.Role == "Owner" &
                        owner.IsDeleted == 0
                    )
            )
        );
    }
}