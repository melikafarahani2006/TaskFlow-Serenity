namespace TaskFlowSerenity.TaskFlow;

public class WorkspaceListRequest : ListRequest
{
    public bool? OwnerOnly { get; set; }
}