using CsCheck;
using HelloApi;

namespace HelloApi.Tests;

[TestClass]
public class GreetingTests
{
    // Example test: one concrete input, one expected output.
    [TestMethod]
    public void For_Name_GreetsByName()
    {
        Assert.AreEqual("Hello, Ada!", Greeting.For("Ada"));
    }

    // Property test: CsCheck generates many random names and checks a rule
    // that must hold for every one of them.
    [TestMethod]
    public void For_AnyName_IsHelloTrimmedNameOrWorld()
    {
        Gen.String.Sample(name =>
        {
            var trimmed = name.Trim();
            var expected = trimmed.Length == 0 ? "Hello, World!" : $"Hello, {trimmed}!";
            return Greeting.For(name) == expected;
        });
    }
}
