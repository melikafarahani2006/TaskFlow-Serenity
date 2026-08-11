namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.TaskTag")]
[BasedOnRow(typeof(TaskTagRow), CheckNames = true)]
public class TaskTagColumns
{
    public string TaskTitle { get; set; }
    public string TagName { get; set; }
}