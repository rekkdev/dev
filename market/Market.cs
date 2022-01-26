using static Raylib_cs.Raylib;
using static Raylib_cs.Color;
using static Raylib_cs.KeyboardKey;

using System;
using System.Collections.Generic;
using System.Collections;
namespace market
{
    public class Commodity
    {
        public string name;
        public double price;
        public int amount;
        public string shareholders;
        public static void 
    }
    public class Market{
        public List<Commodity> commodities = new List<Commodity>();
        public void Render(){
            foreach (Commodity commodity in commodities)
            {
                int i = commodities.IndexOf(commodity);
                DrawText(commodity.name + " $" + commodity.price,10,10*i,9,BLACK );

            }
        }
    }
}