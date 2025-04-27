"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Filter,
  Search,
  Heart,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/app/components/ui/slider";

export default function Shop() {
  const [priceRange, setPriceRange] = useState<number[]>([50, 300]);

  const products = [
    {
      id: 1,
      name: "Wool Coat",
      brand: "COS",
      price: 250,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Silk Blouse",
      brand: "Everlane",
      price: 120,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Leather Belt",
      brand: "Massimo Dutti",
      price: 80,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      brand: "Uniqlo",
      price: 150,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Wool Trousers",
      brand: "JACQUES",
      price: 180,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Cotton Shirt",
      brand: "JACQUES",
      price: 120,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      name: "Leather Boots",
      brand: "Vagabond",
      price: 220,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Denim Jeans",
      brand: "Levi's",
      price: 110,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const brands = [
    "All Brands",
    "JACQUES",
    "COS",
    "Everlane",
    "Massimo Dutti",
    "Uniqlo",
    "Vagabond",
    "Levi's",
  ];
  const categories = [
    "All Categories",
    "Tops",
    "Bottoms",
    "Outerwear",
    "Footwear",
    "Accessories",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/your-look"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Your Look
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">Shop</h1>
        <p className="text-neutral-600">
          Browse and shop for items that complement your personal style.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/4 space-y-8">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
              size={18}
            />
            <Input placeholder="Search products..." className="pl-10" />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${index}`}
                    defaultChecked={index === 0}
                  />
                  <Label htmlFor={`brand-${index}`} className="text-sm">
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${index}`}
                    defaultChecked={index === 0}
                  />
                  <Label htmlFor={`category-${index}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <Slider
              value={priceRange}
              min={0}
              max={500}
              step={10}
              onValueChange={setPriceRange}
            />
            <div className="flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <Button className="w-full btn-primary flex items-center justify-center">
            <Filter size={16} className="mr-2" />
            Apply Filters
          </Button>
        </div>

        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border border-neutral-200 group">
                <div className="relative">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-100">
                      <Heart size={16} />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-100">
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-neutral-500">{product.brand}</p>
                  <p className="mt-2 font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10 flex justify-end">
        <Link href="/review">
          <Button className="btn-primary flex items-center">
            Review & Checkout
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
