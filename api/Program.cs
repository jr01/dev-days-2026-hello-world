using HelloApi;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/api/hello", (string? name) => Results.Ok(new { message = Greeting.For(name) }));

app.Run();
