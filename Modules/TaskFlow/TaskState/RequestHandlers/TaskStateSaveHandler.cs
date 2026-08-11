using MyRow = TaskFlowSerenity.TaskFlow.TaskStateRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskStateSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TaskStateSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITaskStateSaveHandler
{
    protected override void SetInternalFields()
    {
        base.SetInternalFields();

        if (IsCreate)
        {
            Row.Id = Guid.NewGuid();
            Row.CreatedAt = DateTime.UtcNow;
            Row.IsDeleted = false;

            if (Row.Order == null)
                Row.Order = 0;
        }

        if (IsUpdate)
            Row.UpdatedAt = DateTime.UtcNow;
    }
}