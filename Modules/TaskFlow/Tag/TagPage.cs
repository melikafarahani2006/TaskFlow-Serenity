namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(TaskFlowPermissionKeys.Manage)]
public class TagPage : Controller
{
    [Route("TaskFlow/Tag")]
    public ActionResult Index()
    {
        return this.GridPage<TagRow>("@/TaskFlow/Tag/TagPage");
    }
}