using MyRow = TaskFlowSerenity.TaskFlow.TaskRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TaskSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITaskSaveHandler
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
        {
            Row.UpdatedAt = DateTime.UtcNow;
        }
    }
}