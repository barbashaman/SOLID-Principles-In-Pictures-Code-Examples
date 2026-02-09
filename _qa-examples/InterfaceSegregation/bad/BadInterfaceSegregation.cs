// ❌ BAD — Fat UI element interface

public interface IMobileElement
{
    void Tap();
    void Swipe();
    void Type(string text);
    void Scroll();
}
public class Button : IMobileElement
{
    public void Tap()
    {
        // Tap logic
    }

    public void Swipe()
    {
        throw new NotImplementedException("Buttons can't swipe!");
    }

    public void Type(string text)
    {
        throw new NotImplementedException("Buttons can't type!");
    }

    public void Scroll()
    {
        throw new NotImplementedException("Buttons can't scroll!");
    }
}