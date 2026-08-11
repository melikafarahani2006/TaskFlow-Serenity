namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(TaskStateRow))]
public class TaskStatePage : Controller
{
    [Route("TaskFlow/TaskState")]
    public ActionResult Index()
    {
        return this.GridPage<TaskStateRow>("@/TaskFlow/TaskState/TaskStatePage");
    }
}