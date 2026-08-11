using MyRow = TaskFlowSerenity.TaskFlow.ProjectRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IProjectListHandler :
    IListHandler<MyRow, ListRequest, ListResponse<MyRow>>
{
}

public class ProjectListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    IProjectListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        var project = MyRow.Fields;
        var workspace = WorkspaceRow.Fields.As("w");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(workspace)
                    .Select("1")
                    .Where(
                        workspace.Id == project.WorkspaceId &
                        workspace.IsDeleted == 0
                    )
            )
        );

        if (User.Identity?.Name == "admin")
            return;

        var userId = Convert.ToInt32(User.GetIdentifier());
        var member = WorkspaceMemberRow.Fields.As("wm");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(member)
                    .Select("1")
                    .Where(
                        member.WorkspaceId == project.WorkspaceId &
                        member.UserId == userId &
                        member.IsDeleted == 0
                    )
            )
        );
    }
}