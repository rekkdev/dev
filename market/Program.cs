using Raylib_cs;

namespace market
{
    static class Program
    {
        public static void Main()
        {
            Raylib.InitWindow(1920,1080, "Hello World");
            Raylib.ToggleFullscreen();
            Raylib.SetExitKey(KeyboardKey.KEY_F11);
            Market market = new Market();
            Commodity rice = new Commodity();
            rice.price = 1.23;
            rice.name = "rice";
            rice.amount = 23;
            rice.shareholders = "pislify\t100\n";
            market.commodities.Add(rice);
            while (!Raylib.WindowShouldClose())
            {
                Raylib.BeginDrawing();
                market.Render();
                Raylib.ClearBackground(Color.WHITE);
                Raylib.EndDrawing();
            }

            Raylib.CloseWindow();
        }
    }
}