//✅ GOOD — Responsibilities separated
public class LoginPage
{
    private IWebDriver _driver;
    private TestLogger _logger;
    private UserRepository _userRepository;

    public LoginPage(IWebDriver driver, TestLogger logger, UserRepository userRepository)
    {
        _driver = driver;
        _logger = logger;
        _userRepository = userRepository;
    }

    public void Login(UserRepository _userRepository)
    {
        var (username, password) = _userRepository.GetCredentials();

        _driver.FindElement(By.Id("user")).SendKeys(username);
        _driver.FindElement(By.Id("pass")).SendKeys(password);
        _driver.FindElement(By.Id("login")).Click();
        
        _logger.Log($"User {username} attempted to log in.");
    }
}

public class TestLogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

public class UserRepository
{
    private String username;
    private String password;

    public void SetCredentials(string username, string password)
    {
        this.username = username;
        this.password = password;
    }

    public (string, string) GetCredentials()
    {
        return (username, password);
    }

}