namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.WorkspaceMember")]
[BasedOnRow(typeof(WorkspaceMemberRow), CheckNames = true)]
public class WorkspaceMemberForm
{
    public Guid WorkspaceId { get; set; }

    public int UserId { get; set; }

    public string Role { get; set; }
}