namespace TaskFlowSerenity.TaskFlow;

public partial class WorkspaceMemberRoleEditorAttribute : CustomEditorAttribute
{
    public const string Key = "TaskFlowSerenity.TaskFlow.WorkspaceMemberRoleEditor";

    public WorkspaceMemberRoleEditorAttribute()
        : base(Key)
    {
    }
}