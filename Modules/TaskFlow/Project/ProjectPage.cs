namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(TaskFlowPermissionKeys.Access)]
public class ProjectPage : Controller
{
    [Route("TaskFlow/Project")]
    public ActionResult Index()
    {
        return this.GridPage<ProjectRow>("@/TaskFlow/Project/ProjectPage");
    }
}