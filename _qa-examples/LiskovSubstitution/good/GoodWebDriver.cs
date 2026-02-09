// ✅ GOOD — LSP-compliant WebDriver factories


public abstract class WebDriverFactory
{
    public abstract IWebDriver Create();
}

public class ChromeDriverFactory : WebDriverFactory
{
    public override IWebDriver Create()
    {
        var options = new ChromeOptions();
        options.AddArgument("--start-maximized");

        return new ChromeDriver(options);
    }
}

public class FirefoxDriverFactory : WebDriverFactory
{
    public override IWebDriver Create()
    {
        var options = new FirefoxOptions();
        options.AddArgument("--width=1920");

        return new FirefoxDriver(options);
    }
}

public class EdgeDriverFactory : WebDriverFactory
{
    public override IWebDriver Create()
    {
        var options = new EdgeOptions();
        return new EdgeDriver(options);
    }
}

//usage example
public void RunTest(WebDriverFactory factory)
{
    IWebDriver driver = factory.Create();
    driver.Navigate().GoToUrl("https://app.test");
}
```