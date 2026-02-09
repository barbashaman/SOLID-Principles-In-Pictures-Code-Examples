// ✅ GOOD — Polymorphic data providers

public interface ITestDataProvider
{
    Dictionary<string, string> GetData();
}

public class CsvDataProvider : ITestDataProvider
{
    public CsvDataProvider(string filePath)
    {
        // Store file path for later use
    }

    public Dictionary<string, string> GetData()
    {
        //Csv Parsing logic here
        return new Dictionary<string, string>();
    }
}

public class JsonDataProvider : ITestDataProvider
{

        public JsonDataProvider(string filePath)
        {
            // Store file path for later use
        }   

    public Dictionary<string, string> GetData()
    {
        //Json Parsing logic here
        return new Dictionary<string, string>();
    }
}

public class DatabaseDataProvider : ITestDataProvider
{
    public Dictionary<string, string> GetData()
    {
        //Database fetching logic here
        return new Dictionary<string, string>();
    }
}
```