namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.Project")]
[BasedOnRow(typeof(ProjectRow), CheckNames = true)]
public class ProjectColumns
{
    [EditLink]
    public string Name { get; set; }
    public string WorkspaceName { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}