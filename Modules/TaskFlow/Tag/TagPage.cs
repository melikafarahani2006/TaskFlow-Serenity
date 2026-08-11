namespace TaskFlowSerenity.TaskFlow.Pages;

[PageAuthorize(typeof(TagRow))]
public class TagPage : Controller
{
    [Route("TaskFlow/Tag")]
    public ActionResult Index()
    {
        return this.GridPage<TagRow>("@/TaskFlow/Tag/TagPage");
    }
}