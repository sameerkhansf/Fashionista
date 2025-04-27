"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function YourLook() {
  const recommendations = [
    {
      id: 1,
      name: "Camel Coat",
      brand: "COS",
      price: 250,
      image: "/placeholder.svg?height=300&width=300",
      reason: "Completes your essential outerwear collection",
    },
    {
      id: 2,
      name: "Silk Blouse",
      brand: "Everlane",
      price: 120,
      image: "/placeholder.svg?height=300&width=300",
      reason: "Adds versatility to your workwear options",
    },
    {
      id: 3,
      name: "Leather Belt",
      brand: "Massimo Dutti",
      price: 80,
      image: "/placeholder.svg?height=300&width=300",
      reason: "Elevates your casual and formal outfits",
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      brand: "Uniqlo",
      price: 150,
      image: "/placeholder.svg?height=300&width=300",
      reason: "Perfect layering piece for your style",
    },
  ];

  const outfits = [
    {
      id: 1,
      name: "Casual Elegance",
      items: ["Black T-Shirt", "Beige Trousers", "White Sneakers"],
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: 2,
      name: "Business Casual",
      items: ["Olive Shirt", "Navy Blazer", "Beige Trousers"],
      image: "/placeholder.svg?height=400&width=300",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/wardrobe"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Wardrobe
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Your Look</h1>
        <p className="text-neutral-600">
          Personalized recommendations to elevate your style and complete your
          wardrobe.
        </p>
      </div>

      <Tabs defaultValue="recommendations" className="space-y-10">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="outfits">Outfit Ideas</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((item) => (
              <div
                key={item.id}
                className="border border-neutral-200 flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-medium text-lg mb-1">{item.name}</h3>
                    <p className="text-neutral-500 mb-4">{item.brand}</p>
                    <p className="text-neutral-600 mb-2">${item.price}</p>
                    <p className="text-sm text-neutral-500 italic">
                      "{item.reason}"
                    </p>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <Button className="btn-primary flex-1 flex items-center justify-center">
                      <Plus size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="btn-secondary">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outfits" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outfits.map((outfit) => (
              <div key={outfit.id} className="border border-neutral-200">
                <div className="relative h-96">
                  <Image
                    src={outfit.image || "/placeholder.svg"}
                    alt={outfit.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg mb-4">{outfit.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {outfit.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-primary">
                    Create This Look
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-10 flex justify-end">
        <Link href="/shop">
          <Button className="btn-primary flex items-center">
            Continue to Shop
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
