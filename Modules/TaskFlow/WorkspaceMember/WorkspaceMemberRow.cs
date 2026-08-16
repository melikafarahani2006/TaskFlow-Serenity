using TaskFlowSerenity.Administration;

namespace TaskFlowSerenity.TaskFlow;

[ConnectionKey("Default"), Module("TaskFlow"), TableName("WorkspaceMember")]
[DisplayName("Workspace Member"), InstanceName("Workspace Member")]
[ReadPermission(TaskFlowPermissionKeys.Access)]
[ModifyPermission(TaskFlowPermissionKeys.Manage)]
[ServiceLookupPermission(TaskFlowPermissionKeys.Manage)]
public sealed class WorkspaceMemberRow :
    Row<WorkspaceMemberRow.RowFields>,
    IIdRow,
    INameRow
{
    const string jWorkspace = nameof(jWorkspace);
    const string jUser = nameof(jUser);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    [Insertable(false), Updatable(false)]
    public Guid? Id
    {
        get => fields.Id[this];
        set => fields.Id[this] = value;
    }

    [DisplayName("Workspace"), NotNull]
    [ForeignKey(typeof(WorkspaceRow))]
    [LeftJoin(jWorkspace)]
    [TextualField(nameof(WorkspaceName))]
    [EditorType("TaskFlowSerenity.TaskFlow.OwnerWorkspaceEditor")]
    public Guid? WorkspaceId
    {
        get => fields.WorkspaceId[this];
        set => fields.WorkspaceId[this] = value;
    }

    [DisplayName("User"), NotNull]
    [ForeignKey(typeof(UserRow))]
    [LeftJoin(jUser)]
    [TextualField(nameof(UserDisplayName))]
    [ServiceLookupEditor(
        typeof(UserRow),
        Service = "Administration/User/List",
        TextField = nameof(UserRow.DisplayName))]
    public int? UserId
    {
        get => fields.UserId[this];
        set => fields.UserId[this] = value;
    }

    [DisplayName("Role"), Size(20), NotNull, QuickSearch, NameProperty]
    [DefaultValue("Member")]
    [EditorType("TaskFlowSerenity.TaskFlow.WorkspaceMemberRoleEditor")]
    public string Role
    {
        get => fields.Role[this];
        set => fields.Role[this] = value;
    }

    [DisplayName("Created At"), NotNull]
    [Insertable(false), Updatable(false)]
    public DateTime? CreatedAt
    {
        get => fields.CreatedAt[this];
        set => fields.CreatedAt[this] = value;
    }

    [DisplayName("Updated At")]
    public DateTime? UpdatedAt
    {
        get => fields.UpdatedAt[this];
        set => fields.UpdatedAt[this] = value;
    }

    [DisplayName("Is Deleted"), NotNull]
    [Insertable(false), Updatable(false)]
    public bool? IsDeleted
    {
        get => fields.IsDeleted[this];
        set => fields.IsDeleted[this] = value;
    }

    [DisplayName("Workspace Name")]
    [Origin(jWorkspace, nameof(WorkspaceRow.Name))]
    public string WorkspaceName
    {
        get => fields.WorkspaceName[this];
        set => fields.WorkspaceName[this] = value;
    }

    [DisplayName("User")]
    [Origin(jUser, nameof(UserRow.DisplayName))]
    public string UserDisplayName
    {
        get => fields.UserDisplayName[this];
        set => fields.UserDisplayName[this] = value;
    }

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField WorkspaceId;
        public Int32Field UserId;
        public StringField Role;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;
        public BooleanField IsDeleted;

        public StringField WorkspaceName;
        public StringField UserDisplayName;
    }
}