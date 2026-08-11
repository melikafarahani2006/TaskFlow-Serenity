namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.TaskState")]
[BasedOnRow(typeof(TaskStateRow), CheckNames = true)]
public class TaskStateColumns
{
    [EditLink]
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}