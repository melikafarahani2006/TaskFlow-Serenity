using TaskFlowSerenity.TaskFlow.Columns;

namespace TaskFlowSerenity.TaskFlow;

[ConnectionKey("Default"), Module("TaskFlow"), TableName("Workspace")]
[DisplayName("Workspace"), InstanceName("Workspace")]
[ReadPermission(TaskFlowPermissionKeys.Access)]
[ModifyPermission(TaskFlowPermissionKeys.Manage)]
[ServiceLookupPermission(TaskFlowPermissionKeys.Access)]
public sealed class WorkspaceRow : Row<WorkspaceRow.RowFields>, IIdRow, INameRow, IIsDeletedRow
{
    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    [Insertable(false), Updatable(false)]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Description"), Size(100)]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Created At"), NotNull]
    [Insertable(false), Updatable(false)]
    public DateTime? CreatedAt { get => fields.CreatedAt[this]; set => fields.CreatedAt[this] = value; }

    [DisplayName("Updated At")]
    [Insertable(false), Updatable(false)]
    public DateTime? UpdatedAt { get => fields.UpdatedAt[this]; set => fields.UpdatedAt[this] = value; }

    [DisplayName("Is Deleted"), NotNull]
    [Insertable(false), Updatable(false)]
    public bool? IsDeleted { get => fields.IsDeleted[this]; set => fields.IsDeleted[this] = value; }

    [DisplayName("Projects"), NotMapped]
    [MasterDetailRelation(
    foreignKey: nameof(ProjectRow.WorkspaceId),
    ColumnsType = typeof(ProjectColumns))]
    public List<ProjectRow> ProjectList
    {
        get => fields.ProjectList[this];
        set => fields.ProjectList[this] = value;
    }

    [DisplayName("Members"), NotMapped]
    [MasterDetailRelation(
    foreignKey: nameof(WorkspaceMemberRow.WorkspaceId),
    ColumnsType = typeof(WorkspaceMemberColumns))]
    public List<WorkspaceMemberRow> MemberList
    {
        get => fields.MemberList[this];
        set => fields.MemberList[this] = value;
    }


    BooleanField IIsDeletedRow.IsDeletedField => fields.IsDeleted;
    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public StringField Name;
        public StringField Description;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;
        public BooleanField IsDeleted;

        public RowListField<ProjectRow> ProjectList;
        public RowListField<WorkspaceMemberRow> MemberList;
    }
}