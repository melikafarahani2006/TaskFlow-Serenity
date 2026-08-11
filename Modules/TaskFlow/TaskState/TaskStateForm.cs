namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.TaskState")]
[BasedOnRow(typeof(TaskStateRow), CheckNames = true)]
public class TaskStateForm
{
    public string Name { get; set; }
}