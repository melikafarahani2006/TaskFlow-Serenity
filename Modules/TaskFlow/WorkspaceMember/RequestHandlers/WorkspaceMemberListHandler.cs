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

        if (Permissions.HasPermission(
             TaskFlowSerenity.Administration.PermissionKeys.Security))
            return;

        var member = MyRow.Fields;
        var membership = WorkspaceMemberRow.Fields.As("membership");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(membership)
                    .Select("1")
                    .Where(
                        membership.WorkspaceId == member.WorkspaceId &
                        membership.UserId == userId &
                        //owner.Role == "Owner" &
                        membership.IsDeleted == 0
                    )
            )
        );
    }
}