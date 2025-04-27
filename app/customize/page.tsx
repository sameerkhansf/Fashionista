"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Customize() {
  const aesthetics = [
    {
      name: "Minimalist",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866660879405066/Screenshot_2025-04-09_at_11.03.10_PM.png?ex=680eddf4&is=680d8c74&hm=8047a40ede5b2b4b5c71a350a4774209ef241c3f88d657184bc84d53423b3743&=&width=904&height=1196",
    },
    {
      name: "Classic",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866661449695303/Screenshot_2025-04-09_at_11.18.52_PM.png?ex=680eddf4&is=680d8c74&hm=2227a21b4de513857b63c7d66bbb81a177bac1bccc964d2c23dba5f1f6fa330a&=&width=848&height=1196",
    },
    {
      name: "Casual",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866661990633482/Screenshot_2025-04-09_at_11.30.31_PM.png?ex=680eddf4&is=680d8c74&hm=264c45402541a09d5f6e1859a5e694f8179c5be099a5a2a66c9c8364b44443e9&=&width=874&height=1194",
    },
    {
      name: "Bohemian",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866662468911164/Screenshot_2025-04-09_at_11.28.25_PM.png?ex=680eddf4&is=680d8c74&hm=81711f600a0675bdca27a7b965450cf4f32bff6cc5686617df368e8a56c276f7&=&width=1016&height=1196",
    },
    {
      name: "Streetwear",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866663001591980/Screenshot_2025-04-09_at_11.16.14_PM.png?ex=680eddf5&is=680d8c75&hm=0024c5d1622125f52420bc019c17d925394c0a6ec97d5db992a6627537735895&=&width=836&height=1196",
    },
    {
      name: "Preppy",
      image:
        "https://media.discordapp.net/attachments/1365810229635317771/1365866663349715064/IMG_2218.jpg?ex=680eddf5&is=680d8c75&hm=f1b57812f45a1a3efab1c79b9477675251d5cca6166e0376bee9d6c9b66d815f&=&width=796&height=1196",
    },
    // {
    //   name: "Extra",
    //   image:
    //     "https://media.discordapp.net/attachments/1365810229635317771/1365866663727206510/Screenshot_2025-04-09_at_11.21.01_PM.png?ex=680eddf5&is=680d8c75&hm=03c64410bc787e59facf4d1db92a1e194af14ef34d93e710904a1efad377820f&=&width=1214&height=1196",
    // },
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
