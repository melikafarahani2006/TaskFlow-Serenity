using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceListHandler :
    IListHandler<MyRow, WorkspaceListRequest, ListResponse<MyRow>>
{
}

public class WorkspaceListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, WorkspaceListRequest, ListResponse<MyRow>>(context),
    IWorkspaceListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        var userId = Convert.ToInt32(User.GetIdentifier());

        var workspace = MyRow.Fields;
        var member = WorkspaceMemberRow.Fields.As("wm");

        if (Request.OwnerOnly == true)
        {
            query.Where(
                Criteria.Exists(
                    query.SubQuery()
                        .From(member)
                        .Select("1")
                        .Where(
                            member.WorkspaceId == workspace.Id &
                            member.UserId == userId &
                            member.Role == "Owner" &
                            member.IsDeleted == 0
                        )
                )
            );

            return;
        }

        if (User.Identity?.Name == "admin")
            return;

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(member)
                    .Select("1")
                    .Where(
                        member.WorkspaceId == workspace.Id &
                        member.UserId == userId &
                        member.IsDeleted == 0
                    )
            )
        );
    }
}