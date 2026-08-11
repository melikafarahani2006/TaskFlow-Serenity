using MyRow = TaskFlowSerenity.TaskFlow.TagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITagSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TagSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITagSaveHandler
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