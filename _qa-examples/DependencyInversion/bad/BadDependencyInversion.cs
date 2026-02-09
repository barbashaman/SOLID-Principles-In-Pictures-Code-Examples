// ❌ BAD — Hard dependency on DB implementation

public class UserService
{
    private MySqlDatabase _database = new MySqlDatabase();

    public User GetUser(string id)
    {
        return _database.GetUser(id);
    }
}