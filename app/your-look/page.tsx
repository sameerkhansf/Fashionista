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
      name: "Suede Jacket",
      brand: "Mr. Porter",
      price: 395,
      image: "https://www.mrporter.com/variants/images/1647597344106617/in/w1500_q60.jpg",
      reason: "Goes well with your existing wardrobe",
      link: "https://www.mrporter.com/en-us/mens/product/mr-p/clothing/leather-jackets/suede-jacket/1647597344106617",
    },
  ];

  const outfits = [
    {
      id: 1,
      name: "Casual Elegance",
      items: ["Blue T-Shirt", "Blue Trousers", "White Sneakers"],
      image: "https://media.discordapp.net/attachments/1365810229635317771/1365893075506958357/rec_image.jpg?ex=680ef68e&is=680da50e&hm=e8568c338f92e1dfcc5ce584997e489d91e50433297f5c2c5df3890b7818812a&=&format=webp&width=1934&height=1450",
    },
    {
      id: 2,
      name: "Business Casual",
      items: ["Neutral T-Shirt", "Blue Trousers", "Business Casual Sneakers"],
      image: "https://media.discordapp.net/attachments/1365810229635317771/1365885924436869130/Screenshot_2025-04-26_at_8.00.43_PM.png?ex=680eefe5&is=680d9e65&hm=282abd5b5cca32f980e91ee4d422e279359eca4fdca9dda97de8c843b2acb60c&=&format=webp&quality=lossless&width=726&height=1450",
    },
    {
      id: 3,
      name: "Date Night",
      items: ["White T-Shirt", "Blue Trousers", "Black Sneakers"],
      image: "https://media.discordapp.net/attachments/1365810229635317771/1365885925040853076/Screenshot_2025-04-26_at_8.00.55_PM.png?ex=680eefe5&is=680d9e65&hm=f579c7a864b586099bbe129a47364d715b62acbdcb3c8f2dfefe648f378350e8&=&format=webp&quality=lossless&width=761&height=1448",
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
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center text-center"
                  >
                    <Plus size={16} className="mr-2" />
                    Buy Now
                  </a>
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
                    className="object-contain"
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
