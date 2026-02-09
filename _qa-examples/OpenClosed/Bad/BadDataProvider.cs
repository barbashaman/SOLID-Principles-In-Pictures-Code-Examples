//❌ BAD — Conditional logic explosion
public class TestDataProvider
{
    public Dictionary<string, string> GetData(string sourceType)
    {
        if (sourceType == "CSV")
            return LoadFromCsv();

        if (sourceType == "JSON")
            return LoadFromJson();

        if (sourceType == "DB")
            return LoadFromDatabase();

        throw new Exception("Unsupported data source");
    }
}