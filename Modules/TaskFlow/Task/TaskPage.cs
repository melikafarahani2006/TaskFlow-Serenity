namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(TaskRow))]
public class TaskPage : Controller
{
    [Route("TaskFlow/Task")]
    public ActionResult Index()
    {
        return this.GridPage<TaskRow>("@/TaskFlow/Task/TaskPage");
    }
}