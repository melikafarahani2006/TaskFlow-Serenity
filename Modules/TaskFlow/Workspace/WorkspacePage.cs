namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(TaskFlowPermissionKeys.Access)]
public class WorkspacePage : Controller
{
    [Route("TaskFlow/Workspace")]
    public ActionResult Index()
    {
        return this.GridPage<WorkspaceRow>("@/TaskFlow/Workspace/WorkspacePage");
    }
}