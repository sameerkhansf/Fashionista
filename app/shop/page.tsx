import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ShoppingBag, Heart, Filter } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Shop
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Discover curated pieces to complete your elevated wardrobe.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="rounded-none">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="essentials">Essentials</TabsTrigger>
              <TabsTrigger value="character">Character Pieces</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none flex items-center gap-2"
              >
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px] rounded-none">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Wool Stretch Shirt",
                  brand: "JACQUES",
                  price: "$465",
                  color: "Black",
                },
                {
                  name: "Wool Stretch Shirt",
                  brand: "JACQUES",
                  price: "$465",
                  color: "Beige",
                },
                {
                  name: "Cotton Nylon Jacket",
                  brand: "JACQUES",
                  price: "$565",
                  color: "Olive",
                },
                {
                  name: "Wool Trousers",
                  brand: "JACQUES",
                  price: "$395",
                  color: "Black",
                },
                {
                  name: "Cashmere Sweater",
                  brand: "JACQUES",
                  price: "$495",
                  color: "Grey",
                },
                {
                  name: "Leather Loafers",
                  brand: "JACQUES",
                  price: "$645",
                  color: "Brown",
                },
              ].map((item, index) => (
                <Card key={index} className="rounded-none overflow-hidden">
                  <div className="aspect-[3/4] bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.brand} • {item.price}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.color}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none"
                    >
                      <Heart className="h-4 w-4 mr-2" /> Save
                    </Button>
                    <Button size="sm" className="rounded-none">
                      <ShoppingBag className="h-4 w-4 mr-2" /> Add to Bag
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="essentials">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Wool Stretch Shirt",
                  brand: "JACQUES",
                  price: "$465",
                  color: "Black",
                },
                {
                  name: "Wool Trousers",
                  brand: "JACQUES",
                  price: "$395",
                  color: "Black",
                },
                {
                  name: "Cashmere Sweater",
                  brand: "JACQUES",
                  price: "$495",
                  color: "Grey",
                },
              ].map((item, index) => (
                <Card key={index} className="rounded-none overflow-hidden">
                  <div className="aspect-[3/4] bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.brand} • {item.price}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.color}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none"
                    >
                      <Heart className="h-4 w-4 mr-2" /> Save
                    </Button>
                    <Button size="sm" className="rounded-none">
                      <ShoppingBag className="h-4 w-4 mr-2" /> Add to Bag
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="character">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: "Cotton Nylon Jacket",
                  brand: "JACQUES",
                  price: "$565",
                  color: "Olive",
                },
                {
                  name: "Leather Loafers",
                  brand: "JACQUES",
                  price: "$645",
                  color: "Brown",
                },
              ].map((item, index) => (
                <Card key={index} className="rounded-none overflow-hidden">
                  <div className="aspect-[3/4] bg-muted"></div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.brand} • {item.price}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {item.color}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-none"
                    >
                      <Heart className="h-4 w-4 mr-2" /> Save
                    </Button>
                    <Button size="sm" className="rounded-none">
                      <ShoppingBag className="h-4 w-4 mr-2" /> Add to Bag
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Link href="/review">
            <Button size="lg" className="rounded-none px-8">
              Review Your Selections <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
