namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(TaskFlowPermissionKeys.Access)]
public class TaskPage : Controller
{
    [Route("TaskFlow/Task")]
    public ActionResult Index()
    {
        return this.GridPage<TaskRow>("@/TaskFlow/Task/TaskPage");
    }
}