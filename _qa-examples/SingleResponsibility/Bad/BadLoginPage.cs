
// ❌ BAD — Page Object doing too much
public class LoginPage
{
    private IWebDriver _driver;

    public LoginPage(IWebDriver driver)
    {
        _driver = driver;
    }

    public void Login(string username, string password)
    {
        _driver.FindElement(By.Id("user")).SendKeys(username);
        _driver.FindElement(By.Id("pass")).SendKeys(password);
        _driver.FindElement(By.Id("login")).Click();
    }

    public void LogStep(string message)
    {
        Console.WriteLine(message);
    }

    public void SaveUserToDatabase(string username)
    {
        // DB connection + insert logic
    }
}