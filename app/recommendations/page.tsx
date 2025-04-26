import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Style Recommendations
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Based on your style preferences and current wardrobe, here are our
          recommendations to elevate your look.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              name: "Wool Trousers",
              brand: "JACQUES",
              price: "$395",
              type: "Essential",
            },
            {
              name: "Cashmere Sweater",
              brand: "JACQUES",
              price: "$495",
              type: "Essential",
            },
            {
              name: "Leather Loafers",
              brand: "JACQUES",
              price: "$645",
              type: "Character",
            },
            {
              name: "Linen Shirt",
              brand: "JACQUES",
              price: "$365",
              type: "Essential",
            },
            {
              name: "Silk Scarf",
              brand: "JACQUES",
              price: "$195",
              type: "Character",
            },
            {
              name: "Wool Coat",
              brand: "JACQUES",
              price: "$895",
              type: "Character",
            },
          ].map((item, index) => (
            <Card key={index} className="rounded-none overflow-hidden">
              <div className="relative">
                <div className="aspect-[3/4] bg-muted"></div>
                <div className="absolute top-3 right-3 bg-white px-2 py-1 text-xs">
                  {item.type}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {item.brand} • {item.price}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" size="sm" className="rounded-none">
                  <Heart className="h-4 w-4 mr-2" /> Save
                </Button>
                <Button size="sm" className="rounded-none">
                  <ShoppingBag className="h-4 w-4 mr-2" /> Add to Bag
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-light">Complete Your Elevated Look</h2>
          <p className="text-muted-foreground">
            These pieces will complement your existing wardrobe and help you
            achieve your desired style.
          </p>
          <Link href="/shop">
            <Button size="lg" className="rounded-none px-8 mt-4">
              Shop All Recommendations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
