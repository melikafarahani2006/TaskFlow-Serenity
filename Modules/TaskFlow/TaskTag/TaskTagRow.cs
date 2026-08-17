namespace TaskFlowSerenity.TaskFlow;

[ConnectionKey("Default"), Module("TaskFlow"), TableName("TaskTag")]
[DisplayName("Task Tag"), InstanceName("Task Tag")]
[ReadPermission(TaskFlowPermissionKeys.Access)]
[ModifyPermission(TaskFlowPermissionKeys.Manage)]
public sealed class TaskTagRow : Row<TaskTagRow.RowFields>, IIdRow
{
    const string jTask = nameof(jTask);
    const string jTag = nameof(jTag);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    [Insertable(false), Updatable(false)]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Task"), NotNull, ForeignKey(typeof(TaskRow)), LeftJoin(jTask), TextualField(nameof(TaskTitle))]
    [ServiceLookupEditor(typeof(TaskRow), Service = "TaskFlow/Task/List")]
    public Guid? TaskId { get => fields.TaskId[this]; set => fields.TaskId[this] = value; }

    [DisplayName("Tag"), NotNull, ForeignKey(typeof(TagRow)), LeftJoin(jTag), TextualField(nameof(TagName))]
    [ServiceLookupEditor(typeof(TagRow), Service = "TaskFlow/Tag/List")]
    public Guid? TagId { get => fields.TagId[this]; set => fields.TagId[this] = value; }

    [DisplayName("Task Title"), Origin(jTask, nameof(TaskRow.Title))]
    public string TaskTitle { get => fields.TaskTitle[this]; set => fields.TaskTitle[this] = value; }

    [DisplayName("Tag Name"), Origin(jTag, nameof(TagRow.Name))]
    public string TagName { get => fields.TagName[this]; set => fields.TagName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField TaskId;
        public GuidField TagId;

        public StringField TaskTitle;
        public StringField TagName;
    }
}