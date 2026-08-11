using MyRow = TaskFlowSerenity.Administration.LanguageRow;

namespace TaskFlowSerenity.Administration;

public interface ILanguageListHandler : IListHandler<MyRow> { }

public class LanguageListHandler(IRequestContext context)
    : ListRequestHandler<MyRow>(context), ILanguageListHandler
{
}