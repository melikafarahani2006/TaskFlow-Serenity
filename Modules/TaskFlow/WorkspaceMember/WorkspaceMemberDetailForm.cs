namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.WorkspaceMemberDetail")]
[BasedOnRow(typeof(WorkspaceMemberRow), CheckNames = true)]
public class WorkspaceMemberDetailForm
{
    [EditorType("TaskFlowSerenity.TaskFlow.WorkspaceMemberUserEditor")]
    public int UserId { get; set; }
    public string Role { get; set; }
}