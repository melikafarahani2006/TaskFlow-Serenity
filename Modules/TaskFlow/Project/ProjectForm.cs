namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.Project")]
[BasedOnRow(typeof(ProjectRow), CheckNames = true)]
public class ProjectForm
{
    public Guid WorkspaceId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }


    [DisplayName("Tasks")]
    [TaskEditor]
    [SkipNameCheck]
    public List<TaskRow> TaskList { get; set; }
}