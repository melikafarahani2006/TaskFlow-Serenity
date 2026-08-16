import { registerEnum } from "@serenity-is/corelib";

export enum TaskPriority {
    Low = 1,
    Medium = 2,
    High = 3
}
registerEnum(TaskPriority, 'TaskFlowSerenity.TaskFlow.TaskPriority', 'TaskFlow.TaskPriority');