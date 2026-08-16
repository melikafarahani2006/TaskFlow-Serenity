namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.Workspace")]
[BasedOnRow(typeof(WorkspaceRow), CheckNames = true)]
public class WorkspaceForm
{
    public string Name { get; set; }

    public string Description { get; set; }

    [DisplayName("Projects")]
    [ProjectEditor]
    [SkipNameCheck]
    public List<ProjectRow> ProjectList { get; set; }
}