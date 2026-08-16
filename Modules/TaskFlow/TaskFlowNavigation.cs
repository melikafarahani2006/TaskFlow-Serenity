using MyPages = TaskFlowSerenity.TaskFlow.Pages;

[assembly: NavigationLink(int.MaxValue, "TaskFlow/Workspace", typeof(MyPages.WorkspacePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "TaskFlow/Project", typeof(MyPages.ProjectPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "TaskFlow/Task", typeof(MyPages.TaskPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "TaskFlow/Task State", typeof(MyPages.TaskStatePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "TaskFlow/Tag", typeof(MyPages.TagPage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "TaskFlow/Task Tag", typeof(MyPages.TaskTagPage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "TaskFlow/Workspace Member", typeof(MyPages.WorkspaceMemberPage), icon: null)]