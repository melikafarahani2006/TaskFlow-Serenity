namespace TaskFlowSerenity.TaskFlow;

public partial class TaskEditorAttribute : CustomEditorAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.TaskEditor";

    public TaskEditorAttribute()
        : base(Key)
    {
    }
}