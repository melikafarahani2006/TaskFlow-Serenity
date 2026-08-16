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

            if (Row.TaskStateId == null)
            {
                var f = TaskStateRow.Fields;

                Row.TaskStateId = Connection
                    .TryFirst<TaskStateRow>(q => q
                        .Select(f.Id)
                        .Where(f.Name == "To Do" & f.IsDeleted == 0))
                    ?.Id;
            }

            if (Row.Duration == null || Row.Duration <= 0)
                Row.Duration = 1;
        }

        if (IsUpdate)
        {
            Row.UpdatedAt = DateTime.UtcNow;
        }
    }
}