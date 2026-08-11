namespace TaskFlowSerenity.TaskFlow;

public partial class OwnerWorkspaceEditorAttribute : ServiceLookupEditorBaseAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.OwnerWorkspaceEditor";

    public OwnerWorkspaceEditorAttribute()
        : base(Key)
    {
    }
}