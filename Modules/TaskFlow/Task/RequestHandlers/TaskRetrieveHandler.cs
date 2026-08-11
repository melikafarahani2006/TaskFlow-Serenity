using MyRow = TaskFlowSerenity.TaskFlow.TaskRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskRetrieveHandler :
    IRetrieveHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>
{
}

public class TaskRetrieveHandler(IRequestContext context) :
    RetrieveRequestHandler<MyRow, RetrieveRequest, RetrieveResponse<MyRow>>(context),
    ITaskRetrieveHandler
{
    protected override void PrepareQuery(SqlQuery query)
    {
        base.PrepareQuery(query);

        if (User.Identity?.Name == "admin")
            return;

        var userId = Convert.ToInt32(User.GetIdentifier());

        var task = MyRow.Fields;
        var project = ProjectRow.Fields.As("p");
        var member = WorkspaceMemberRow.Fields.As("wm");

        query.Where(
            Criteria.Exists(
                query.SubQuery()
                    .From(project)
                    .InnerJoin(
                        member,
                        member.WorkspaceId == project.WorkspaceId
                    )
                    .Select("1")
                    .Where(
                        project.Id == task.ProjectId &
                        member.UserId == userId &
                        member.IsDeleted == 0
                    )
            )
        );
    }
}