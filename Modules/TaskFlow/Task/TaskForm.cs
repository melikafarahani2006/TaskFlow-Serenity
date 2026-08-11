namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.Task")]
[BasedOnRow(typeof(TaskRow), CheckNames = true)]
public class TaskForm
{
    public Guid ProjectId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public Guid TaskStateId { get; set; }
    public DateTime DueDate { get; set; }

    [DisplayName("Tags")]
    public List<Guid> TagIds { get; set; }
}