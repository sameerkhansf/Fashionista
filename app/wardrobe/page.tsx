"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductPurchase {
  name: string;
  color: string;
  size: string;
  price: string;
  image: string;  // Added image field
}

interface Order {
  order_number: string;
  brand: string;
  order_date: string;
  website: string;
  location_bought: string;
  product_purchases: ProductPurchase[];
}

interface FetchOrdersResponse {
  result: string;
  orders: Order[];
}

interface WardrobeItem {
  id: number;
  name: string;
  brand: string;
  category: string;
  type: string;
  image: string;
}

export default function Wardrobe() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [wardrobeItems, setWardrobeItems] = useState<WardrobeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWardrobeItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://127.0.0.1:8000/fetch_orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wardrobe items");
        }

        const data: FetchOrdersResponse = await response.json();
        const orders = data.orders || [];

        // Map orders to wardrobe items
        const items = orders.flatMap((order: Order, orderIndex: number) =>
          order.product_purchases.map((product: ProductPurchase, productIndex: number) => {
            // Infer category based on product name
            let category = "Unknown";
            const nameLower = product.name.toLowerCase();
            if (nameLower.includes("shirt") || nameLower.includes("sweater") || nameLower.includes("polo")) {
              category = "Tops";
            } else if (nameLower.includes("trouser") || nameLower.includes("jean") || nameLower.includes("pants")) {
              category = "Bottoms";
            } else if (nameLower.includes("blazer") || nameLower.includes("jacket")) {
              category = "Outerwear";
            } else if (nameLower.includes("sneakers") || nameLower.includes("loafers") || nameLower.includes("driver")) {
              category = "Footwear";
            }

            // Infer type based on product name
            let type = "Essential";
            if (nameLower.includes("custom") || nameLower.includes("dri-fit") || nameLower.includes("utility")) {
              type = "Character Piece";
            }

            return {
              id: orderIndex * 1000 + productIndex + 1, // Unique ID based on order and product index
              name: product.name,
              brand: order.brand,
              category,
              type,
              image: product.image || "/placeholder.svg?height=300&width=300", // Use API image, fallback to placeholder
            };
          })
        );

        setWardrobeItems(items);
      } catch (err) {
        setError("Failed to load wardrobe items. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWardrobeItems();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/organize"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Organize
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Your Wardrobe</h1>
        <p className="text-neutral-600">
          View and organize your wardrobe items by category and type.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center">Loading wardrobe items...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : wardrobeItems.length === 0 ? (
        <div className="text-center text-neutral-600">
          No wardrobe items found. Please import items from your email or add them manually.
        </div>
      ) : (
        <Tabs defaultValue="category" className="space-y-10">
          <div className="flex justify-between items-center">
            <TabsList className="grid w-64 grid-cols-2">
              <TabsTrigger value="category">By Category</TabsTrigger>
              <TabsTrigger value="type">By Type</TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              <div className="flex border rounded-md overflow-hidden">
                <button
                  className={`p-2 ${viewMode === "grid" ? "bg-neutral-100" : "bg-white"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`p-2 ${viewMode === "list" ? "bg-neutral-100" : "bg-white"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          <TabsContent value="category" className="space-y-8">
            <div className="space-y-10">
              {["Tops", "Bottoms", "Outerwear", "Footwear"].map((category) => {
                const items = wardrobeItems.filter(
                  (item) => item.category === category,
                );
                if (items.length === 0) return null;

                return (
                  <div key={category} className="space-y-4">
                    <h2 className="text-xl font-medium">{category}</h2>

                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="border border-neutral-200 group cursor-pointer"
                          >
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-neutral-500">
                                {item.brand}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center border border-neutral-200 p-4"
                          >
                            <div className="relative w-16 h-16 mr-4 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-neutral-500">
                                {item.brand} • {item.type}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="type" className="space-y-8">
            <div className="space-y-10">
              {["Essential", "Character Piece", "Statement Piece"].map((type) => {
                const items = wardrobeItems.filter((item) => item.type === type);
                if (items.length === 0) return null;

                return (
                  <div key={type} className="space-y-4">
                    <h2 className="text-xl font-medium">{type}</h2>

                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="border border-neutral-200 group cursor-pointer"
                          >
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-neutral-500">
                                {item.brand}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center border border-neutral-200 p-4"
                          >
                            <div className="relative w-16 h-16 mr-4 overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-neutral-500">
                                {item.brand} • {item.category}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      )}

      <div className="pt-10 flex justify-end">
        <Link href="/your-look">
          <Button className="btn-primary flex items-center">
            Continue to Your Look
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}