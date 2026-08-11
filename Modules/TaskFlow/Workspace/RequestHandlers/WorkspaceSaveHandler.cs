using MyRow = TaskFlowSerenity.TaskFlow.WorkspaceRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IWorkspaceSaveHandler :
    ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse>
{
}

public class WorkspaceSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IWorkspaceSaveHandler
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

    protected override void AfterSave()
    {
        base.AfterSave();

        if (!IsCreate)
            return;

        var userId = Convert.ToInt32(Context.User.GetIdentifier());

        var member = new WorkspaceMemberRow
        {
            Id = Guid.NewGuid(),
            WorkspaceId = Row.Id,
            UserId = userId,
            Role = "Owner",
            CreatedAt = DateTime.UtcNow,
            IsDeleted = false
        };

        UnitOfWork.Connection.Insert(member);
    }
}