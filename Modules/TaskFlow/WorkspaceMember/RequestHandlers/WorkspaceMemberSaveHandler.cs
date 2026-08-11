using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceMemberRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceMemberSaveHandler :
    ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse>
{
}

public class WorkspaceMemberSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IWorkspaceMemberSaveHandler
{
    protected override void SetInternalFields()
    {
        base.SetInternalFields();

        if (IsCreate)
        {
            Row.Id = Guid.NewGuid();
            Row.CreatedAt = DateTime.UtcNow;
            Row.IsDeleted = false;
        }

        if (IsUpdate)
        {
            Row.UpdatedAt = DateTime.UtcNow;
        }
    }

    protected override void BeforeSave()
    {
        base.BeforeSave();

        var f = MyRow.Fields;

        var exists = Connection.Exists<MyRow>(
            f.WorkspaceId == Row.WorkspaceId.Value &
            f.UserId == Row.UserId.Value &
            f.IsDeleted == 0 &
            (IsCreate ? Criteria.Empty :
                f.Id != Row.Id.Value)
        );

        if (exists)
            throw new ValidationError(
                "DuplicateWorkspaceMember",
                nameof(Row.UserId),
                "This user is already a member of this workspace."
            );
    }
}