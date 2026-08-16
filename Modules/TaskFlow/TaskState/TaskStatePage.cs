namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(TaskFlowPermissionKeys.Manage)]
public class TaskStatePage : Controller
{
    [Route("TaskFlow/TaskState")]
    public ActionResult Index()
    {
        return this.GridPage<TaskStateRow>("@/TaskFlow/TaskState/TaskStatePage");
    }
}