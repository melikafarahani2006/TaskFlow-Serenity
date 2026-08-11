using MyRow = TaskFlowSerenity.Administration.LanguageRow;

namespace TaskFlowSerenity.Administration;

public interface ILanguageDeleteHandler : IDeleteHandler<MyRow> { }

public class LanguageDeleteHandler(IRequestContext context)
    : DeleteRequestHandler<MyRow>(context), ILanguageDeleteHandler
{
}