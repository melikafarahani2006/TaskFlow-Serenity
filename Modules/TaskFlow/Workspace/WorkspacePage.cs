namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(WorkspaceRow))]
public class WorkspacePage : Controller
{
    [Route("TaskFlow/Workspace")]
    public ActionResult Index()
    {
        return this.GridPage<WorkspaceRow>("@/TaskFlow/Workspace/WorkspacePage");
    }
}