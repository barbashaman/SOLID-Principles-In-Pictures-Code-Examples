// ✅ GOOD — Abstraction-based dependency

public interface IDatabase
{
    User GetUser(string id);
}

public class MySqlDatabase : IDatabase
{
    public User GetUser(string id)
    {
        return new User(id);
    }
}

public class InMemoryDatabase : IDatabase
{
    public User GetUser(string id)
    {
        return new User("fake-user");
    }
}

public class UserService
{
    private readonly IDatabase _database;

    public UserService(IDatabase database)
    {
        _database = database;
    }

    public User GetUser(string id)
    {
        return _database.GetUser(id);
    }
}