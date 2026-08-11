namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(WorkspaceMemberRow))]
public class WorkspaceMemberPage : Controller
{
    [Route("TaskFlow/WorkspaceMember")]
    public ActionResult Index()
    {
        return this.GridPage<WorkspaceMemberRow>("@/TaskFlow/WorkspaceMember/WorkspaceMemberPage");
    }
}