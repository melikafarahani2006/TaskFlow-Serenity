namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(TaskTagRow))]
public class TaskTagPage : Controller
{
    [Route("TaskFlow/TaskTag")]
    public ActionResult Index()
    {
        return this.GridPage<TaskTagRow>("@/TaskFlow/TaskTag/TaskTagPage");
    }
}