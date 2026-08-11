namespace TaskFlowSerenity.TaskFlow.Columns;

[ColumnsScript("TaskFlow.Workspace")]
[BasedOnRow(typeof(WorkspaceRow), CheckNames = true)]
public class WorkspaceColumns
{
    //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    //public Guid Id { get; set; }

    [EditLink, DisplayName("Name"), Width(200)]
    public string Name { get; set; }

    [DisplayName("Description"), Width(300)]
    public string Description { get; set; }

    [DisplayName("Created At"), Width(150)]
    public DateTime? CreatedAt { get; set; }

    [DisplayName("Updated At"), Width(150)]
    public DateTime? UpdatedAt { get; set; }
}