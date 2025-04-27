"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Customize() {
  const aesthetics = [
    { name: "Minimalist", image: "/placeholder.svg?height=300&width=300" },
    { name: "Classic", image: "/placeholder.svg?height=300&width=300" },
    { name: "Casual", image: "/placeholder.svg?height=300&width=300" },
    { name: "Bohemian", image: "/placeholder.svg?height=300&width=300" },
    { name: "Streetwear", image: "/placeholder.svg?height=300&width=300" },
    { name: "Preppy", image: "/placeholder.svg?height=300&width=300" },
  ];

  const colorPalettes = [
    {
      name: "Neutrals",
      colors: ["#f5f5f5", "#e0e0e0", "#9e9e9e", "#616161", "#212121"],
    },
    {
      name: "Earth Tones",
      colors: ["#f9f5eb", "#e3d5ca", "#d5bdaf", "#a98467", "#6c584c"],
    },
    {
      name: "Monochrome",
      colors: ["#ffffff", "#e0e0e0", "#9e9e9e", "#424242", "#000000"],
    },
    {
      name: "Pastels",
      colors: ["#f8edeb", "#fcd5ce", "#f9dcc4", "#fec89a", "#e8e8e4"],
    },
    {
      name: "Bold",
      colors: ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d"],
    },
    {
      name: "Cool Tones",
      colors: ["#f8f9fa", "#e9ecef", "#adb5bd", "#495057", "#212529"],
    },
  ];

  const [selectedAesthetic, setSelectedAesthetic] = useState("");
  const [selectedPalette, setSelectedPalette] = useState("");

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/about-you"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to About You
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          Customize Your Style
        </h1>
        <p className="text-neutral-600">
          Select your preferred aesthetic and color palette to define your
          personal style.
        </p>
      </div>

      <Tabs defaultValue="aesthetic" className="space-y-10">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="aesthetic">Aesthetic</TabsTrigger>
          <TabsTrigger value="colors">Color Palette</TabsTrigger>
        </TabsList>

        <TabsContent value="aesthetic" className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {aesthetics.map((aesthetic, index) => (
              <div
                key={index}
                className={`border cursor-pointer transition-all ${
                  selectedAesthetic === aesthetic.name
                    ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
                onClick={() => setSelectedAesthetic(aesthetic.name)}
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={aesthetic.image || "/placeholder.svg"}
                    alt={aesthetic.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium">{aesthetic.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="colors" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorPalettes.map((palette, index) => (
              <div
                key={index}
                className={`border p-4 cursor-pointer transition-all ${
                  selectedPalette === palette.name
                    ? "border-neutral-900 ring-2 ring-neutral-900 ring-offset-2"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
                onClick={() => setSelectedPalette(palette.name)}
              >
                <h3 className="font-medium mb-4">{palette.name}</h3>
                <div className="flex space-x-2">
                  {palette.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-full h-16 rounded"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-10 flex justify-between">
        <Link href="/about-you">
          <Button variant="outline" className="btn-secondary flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back
          </Button>
        </Link>
        <Link href="/wardrobe">
          <Button className="btn-primary flex items-center">
            Continue
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
