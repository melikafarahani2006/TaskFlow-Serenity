namespace TaskFlowSerenity.TaskFlow;

[ConnectionKey("Default"), Module("TaskFlow"), TableName("Task")]
[DisplayName("Task"), InstanceName("Task")]
[ReadPermission(TaskFlowPermissionKeys.Access)]
[ModifyPermission(TaskFlowPermissionKeys.Manage)]
[ServiceLookupPermission(TaskFlowPermissionKeys.Access)]
public sealed class TaskRow : Row<TaskRow.RowFields>, IIdRow, INameRow, IIsDeletedRow
{
    const string jProject = nameof(jProject);
    const string jTaskState = nameof(jTaskState);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    [Insertable(false), Updatable(false)]
    public Guid? Id
    {
        get => fields.Id[this];
        set => fields.Id[this] = value;
    }

    [DisplayName("Project"), NotNull]
    [ForeignKey(typeof(ProjectRow))]
    [LeftJoin(jProject)]
    [TextualField(nameof(ProjectName))]
    [ServiceLookupEditor(
        typeof(ProjectRow),
        Service = "TaskFlow/Project/List")]
    public Guid? ProjectId
    {
        get => fields.ProjectId[this];
        set => fields.ProjectId[this] = value;
    }

    [DisplayName("Title"), Size(100), NotNull, QuickSearch, NameProperty]
    public string Title
    {
        get => fields.Title[this];
        set => fields.Title[this] = value;
    }

    [DisplayName("Description"), Size(100)]
    public string Description
    {
        get => fields.Description[this];
        set => fields.Description[this] = value;
    }

    [DisplayName("Due Date")]
    [EditorType("TaskFlowSerenity.Common.PersianDateEditor")]
    public DateTime? DueDate
    {
        get => fields.DueDate[this];
        set => fields.DueDate[this] = value;
    }

    [DisplayName("Order"), NotNull]
    [Insertable(false), Updatable(false)]
    public int? Order
    {
        get => fields.Order[this];
        set => fields.Order[this] = value;
    }

    [DisplayName("Duration"), NotNull]
    [DefaultValue(1)]
    public int? Duration
    {
        get => fields.Duration[this];
        set => fields.Duration[this] = value;
    }

    [DisplayName("Created At"), NotNull]
    [Insertable(false), Updatable(false)]
    public DateTime? CreatedAt
    {
        get => fields.CreatedAt[this];
        set => fields.CreatedAt[this] = value;
    }

    [DisplayName("Task State"), NotNull]
    [ForeignKey(typeof(TaskStateRow))]
    [LeftJoin(jTaskState)]
    [TextualField(nameof(TaskStateName))]
    [ServiceLookupEditor(
        typeof(TaskStateRow),
        Service = "TaskFlow/TaskState/List")]
    public Guid? TaskStateId
    {
        get => fields.TaskStateId[this];
        set => fields.TaskStateId[this] = value;
    }

    [DisplayName("Priority"), NotNull]
    [DefaultValue(TaskPriority.Medium)]
    public TaskPriority? Priority
    {
        get => fields.Priority[this];
        set => fields.Priority[this] = value;
    }

    [DisplayName("Updated At")]
    [Insertable(false), Updatable(false)]
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

    [DisplayName("Project Name")]
    [Origin(jProject, nameof(ProjectRow.Name))]
    public string ProjectName
    {
        get => fields.ProjectName[this];
        set => fields.ProjectName[this] = value;
    }

    [DisplayName("Task State Name")]
    [Origin(jTaskState, nameof(TaskStateRow.Name))]
    public string TaskStateName
    {
        get => fields.TaskStateName[this];
        set => fields.TaskStateName[this] = value;
    }

    // Many-to-Many relation: Task <-> Tag
    [DisplayName("Tags")]
    [ServiceLookupEditor(
        typeof(TagRow),
        Service = "TaskFlow/Tag/List",
        Multiple = true)]
    [NotMapped]
    [LinkingSetRelation(
        typeof(TaskTagRow),
        nameof(TaskTagRow.TaskId),
        nameof(TaskTagRow.TagId))]
    public List<Guid> TagIds
    {
        get => fields.TagIds[this];
        set => fields.TagIds[this] = value;
    }

    [DisplayName("Tags")]
    [Expression(@"(
    SELECT STRING_AGG(t.[Name], ', ')
    FROM [TaskTag] tt
    INNER JOIN [Tag] t ON t.[Id] = tt.[TagId]
    WHERE tt.[TaskId] = T0.[Id]
)")]
    public string TagNames
    {
        get => fields.TagNames[this];
        set => fields.TagNames[this] = value;
    }


    BooleanField IIsDeletedRow.IsDeletedField => fields.IsDeleted;
    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField ProjectId;
        public StringField Title;
        public StringField Description;
        public DateTimeField DueDate;
        public Int32Field Order;
        public Int32Field Duration;
        public DateTimeField CreatedAt;
        public GuidField TaskStateId;
        public EnumField<TaskPriority> Priority;
        public DateTimeField UpdatedAt;
        public BooleanField IsDeleted;

        public StringField ProjectName;
        public StringField TaskStateName;
        public StringField TagNames;

        public ListField<Guid> TagIds;
    }
}