namespace TaskFlowSerenity.TaskFlow;

public partial class ProjectEditorAttribute : CustomEditorAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.ProjectEditor";

    public ProjectEditorAttribute()
        : base(Key)
    {
    }
}