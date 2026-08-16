namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.ProjectDetail")]
[BasedOnRow(typeof(ProjectRow), CheckNames = true)]
public class ProjectDetailForm
{
    public string Name { get; set; }

    public string Description { get; set; }
}