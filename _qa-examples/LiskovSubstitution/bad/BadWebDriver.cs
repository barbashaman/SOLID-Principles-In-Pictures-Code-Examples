// ❌ BAD — Violating LSP with browser-specific assumptions

public abstract class WebDriverBase
{
    public abstract IWebDriver CreateDriver();
}

public class ChromeDriverFactory : WebDriverBase
{
    public override IWebDriver CreateDriver()
    {
        return new ChromeDriver();
    }

    public void EnableChromeDevTools()
    {
        // Chrome-only behavior
    }
}