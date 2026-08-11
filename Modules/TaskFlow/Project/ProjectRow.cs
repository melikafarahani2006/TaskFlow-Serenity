namespace TaskFlowSerenity.TaskFlow;

[ConnectionKey("Default"), Module("TaskFlow"), TableName("Project")]
[DisplayName("Project"), InstanceName("Project")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class ProjectRow : Row<ProjectRow.RowFields>, IIdRow, INameRow, IIsDeletedRow
{
    const string jWorkspace = nameof(jWorkspace);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    [Insertable(false), Updatable(false)]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Workspace"), NotNull, ForeignKey(typeof(WorkspaceRow)), LeftJoin(jWorkspace), TextualField(nameof(WorkspaceName))]
    [ServiceLookupEditor(typeof(WorkspaceRow), Service = "TaskFlow/Workspace/List")]
    public Guid? WorkspaceId { get => fields.WorkspaceId[this]; set => fields.WorkspaceId[this] = value; }

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

    [DisplayName("Workspace Name"), Origin(jWorkspace, nameof(WorkspaceRow.Name))]
    public string WorkspaceName { get => fields.WorkspaceName[this]; set => fields.WorkspaceName[this] = value; }


    BooleanField IIsDeletedRow.IsDeletedField => fields.IsDeleted;
    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField WorkspaceId;
        public StringField Name;
        public StringField Description;
        public DateTimeField CreatedAt;
        public DateTimeField UpdatedAt;
        public BooleanField IsDeleted;

        public StringField WorkspaceName;
    }
}