namespace TaskFlowSerenity.TaskFlow;

public partial class WorkspaceMemberUserEditorAttribute : ServiceLookupEditorBaseAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.WorkspaceMemberUserEditor";

    public WorkspaceMemberUserEditorAttribute()
        : base(Key)
    {
    }
}