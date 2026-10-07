namespace HelloApi;

public static class Greeting
{
    public static string For(string? name)
    {
        var trimmed = name?.Trim();
        return string.IsNullOrEmpty(trimmed) ? "Hello, World!" : $"Hello, {trimmed}!";
    }
}
