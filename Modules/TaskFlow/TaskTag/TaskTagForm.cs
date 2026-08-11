namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.TaskTag")]
[BasedOnRow(typeof(TaskTagRow), CheckNames = true)]
public class TaskTagForm
{
    [Hidden]
    public Guid TaskId { get; set; }
    public Guid TagId { get; set; }
}