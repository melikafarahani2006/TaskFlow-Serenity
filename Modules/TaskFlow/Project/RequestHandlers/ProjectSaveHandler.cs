using MyRow = TaskFlowSerenity.TaskFlow.ProjectRow;

namespace TaskFlowSerenity.TaskFlow;

public interface IProjectSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class ProjectSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IProjectSaveHandler
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
            Row.UpdatedAt = DateTime.UtcNow;
    }
}