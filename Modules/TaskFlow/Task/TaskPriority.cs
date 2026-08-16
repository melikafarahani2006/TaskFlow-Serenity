namespace TaskFlowSerenity.TaskFlow;

[EnumKey("TaskFlow.TaskPriority")]
public enum TaskPriority
{
    [Description("Low")]
    Low = 1,

    [Description("Medium")]
    Medium = 2,

    [Description("High")]
    High = 3
}