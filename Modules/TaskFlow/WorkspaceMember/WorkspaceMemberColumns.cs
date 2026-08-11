namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.WorkspaceMember")]
[BasedOnRow(typeof(WorkspaceMemberRow), CheckNames = true)]
public class WorkspaceMemberColumns
{
    [EditLink]
    public string WorkspaceName { get; set; }

    public string UserDisplayName { get; set; }

    [EditLink]
    public string Role { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
}