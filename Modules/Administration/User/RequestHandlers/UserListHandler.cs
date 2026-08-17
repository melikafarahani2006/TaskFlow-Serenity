using MyRow = TaskFlowSerenity.Administration.UserRow;

namespace TaskFlowSerenity.Administration;

public interface IUserListHandler :
    IListHandler<MyRow, UserListRequest, ListResponse<MyRow>>
{
}

public class UserListHandler(IRequestContext context)
    : ListRequestHandler<MyRow, UserListRequest, ListResponse<MyRow>>(context),
      IUserListHandler
{
    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (Request.ForWorkspaceMember == true)
        {
            var userRole = UserRoleRow.Fields.As("ur");
            var role = RoleRow.Fields.As("r");

            var adminRoleIds = query.SubQuery()
                .From(role)
                .Select(role.RoleId)
                .Where(role.RoleName == "Admin");

            var adminUserIds = query.SubQuery()
                .From(userRole)
                .Select(userRole.UserId)
                .Where(userRole.RoleId.In(adminRoleIds));

            query.Where(MyRow.Fields.UserId.NotIn(adminUserIds));


            var currentUserId = Convert.ToInt32(User.GetIdentifier());

            query.Where(MyRow.Fields.UserId != currentUserId);
        }
    }
}