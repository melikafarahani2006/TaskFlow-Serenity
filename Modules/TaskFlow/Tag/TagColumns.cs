namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.Tag")]
[BasedOnRow(typeof(TagRow), CheckNames = true)]
public class TagColumns
{
    [EditLink]
    public string Name { get; set; }
    public string Color { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}