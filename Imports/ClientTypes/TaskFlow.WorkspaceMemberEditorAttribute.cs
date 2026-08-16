namespace TaskFlowSerenity.TaskFlow;

public partial class WorkspaceMemberEditorAttribute : CustomEditorAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.WorkspaceMemberEditor";

    public WorkspaceMemberEditorAttribute()
        : base(Key)
    {
    }
}