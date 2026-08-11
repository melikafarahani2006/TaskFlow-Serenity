using MyRow = TaskFlowSerenity.Administration.LanguageRow;

namespace TaskFlowSerenity.Administration;

public interface ILanguageSaveHandler : ISaveHandler<MyRow> { }

public class LanguageSaveHandler(IRequestContext context)
    : SaveRequestHandler<MyRow>(context), ILanguageSaveHandler
{
}