
namespace TaskFlowSerenity;

public interface IDirectoryService
{
    AppServices.DirectoryEntry Validate(string username, string password);
}