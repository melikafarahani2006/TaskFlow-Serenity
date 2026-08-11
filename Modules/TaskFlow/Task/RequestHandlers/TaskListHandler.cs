using MyRow = TaskFlowSerenity.TaskFlow.TaskRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskListHandler :
    IListHandler<MyRow, ListRequest, ListResponse<MyRow>>
{
}

public class TaskListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, ListRequest, ListResponse<MyRow>>(context),
    ITaskListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        var task = MyRow.Fields;
        var project = ProjectRow.Fields.As("p");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(project)
                    .Select("1")
                    .Where(
                        project.Id == task.ProjectId &
                        project.IsDeleted == 0
                    )
            )
        );

        if (User.Identity?.Name == "admin")
            return;

        var userId = Convert.ToInt32(User.GetIdentifier());
        var project2 = ProjectRow.Fields.As("p2");
        var member = WorkspaceMemberRow.Fields.As("wm");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(project2)
                    .InnerJoin(
                        member,
                        member.WorkspaceId == project2.WorkspaceId
                    )
                    .Select("1")
                    .Where(
                        project2.Id == task.ProjectId &
                        project2.IsDeleted == 0 &
                        member.UserId == userId &
                        member.IsDeleted == 0
                    )
            )
        );
    }
}