using MyRow = TaskFlowSerenity.TaskFlow.TaskTagRow;

namespace TaskFlowSerenity.TaskFlow;

public interface ITaskTagSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class TaskTagSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ITaskTagSaveHandler
{
}