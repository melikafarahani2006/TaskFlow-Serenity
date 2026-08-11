namespace TaskFlowSerenity.TaskFlow.Forms;

[FormScript("TaskFlow.Tag")]
[BasedOnRow(typeof(TagRow), CheckNames = true)]
public class TagForm
{
    public string Name { get; set; }
    public string Color { get; set; }
}