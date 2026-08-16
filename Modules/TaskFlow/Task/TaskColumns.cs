namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.Task")]
[BasedOnRow(typeof(TaskRow), CheckNames = true)]
public class TaskColumns
{
    [EditLink]
    public string Title { get; set; }
    public string ProjectName { get; set; }
    public string Description { get; set; }
    public string TaskStateName { get; set; }

    [QuickFilter]
    public TaskPriority Priority { get; set; }
    [DisplayName("Tags")]
    public string TagNames { get; set; }
    public DateTime DueDate { get; set; }

    [DisplayName("Duration (Hours)")]
    public int Duration { get; set; }

    [SortOrder(1, descending: true)]
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}