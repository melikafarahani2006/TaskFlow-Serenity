namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.TaskDetail")]
[BasedOnRow(typeof(TaskRow), CheckNames = true)]
public class TaskDetailForm
{
    public string Title { get; set; }

    public string Description { get; set; }

    public Guid TaskStateId { get; set; }

    public DateTime? DueDate { get; set; }

    public int Duration { get; set; }

    public List<Guid> TagIds { get; set; }
}