"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Wardrobe() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const wardrobeItems = [
    {
      id: 1,
      name: "Black T-Shirt",
      brand: "Zara",
      category: "Tops",
      type: "Essential",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Beige Trousers",
      brand: "COS",
      category: "Bottoms",
      type: "Essential",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Navy Blazer",
      brand: "Massimo Dutti",
      category: "Outerwear",
      type: "Character Piece",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "White Sneakers",
      brand: "Common Projects",
      category: "Footwear",
      type: "Essential",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Olive Shirt",
      brand: "JACQUES",
      category: "Tops",
      type: "Character Piece",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">{/* Removed Back to Organize link */}</div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Your Wardrobe</h1>
        <p className="text-neutral-600">
          View and organize your wardrobe items by category and type.
        </p>
      </div>

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
                              src={item.image || "/placeholder.svg"}
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
                              src={item.image || "/placeholder.svg"}
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
                              src={item.image || "/placeholder.svg"}
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
                              src={item.image || "/placeholder.svg"}
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
