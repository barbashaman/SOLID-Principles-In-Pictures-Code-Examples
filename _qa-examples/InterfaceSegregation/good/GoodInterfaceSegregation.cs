//✅ GOOD — Small, behavior-focused interfaces

public interface ITappable
{
    void Tap();
}

public interface ITypable
{
    void Type(string text);
}

public interface ISwipeable
{
    void Swipe();
}

public class TextField : ITappable, ITypable
{
    public void Tap() { }
    public void Type(string text) { }
}

public class Button : ITappable
{
    public void Tap() { }
}

public class SwipeableImage : ITappable
{
    public void Tap() { }
    public void Swipe() { }
}

