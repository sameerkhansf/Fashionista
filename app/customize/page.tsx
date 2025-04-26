import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomizePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Personal Style Customization
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Tell us about your style preferences to help us create your perfect
          wardrobe.
        </p>

        <Tabs defaultValue="aesthetic" className="mb-12">
          <TabsList className="grid grid-cols-3 w-full rounded-none">
            <TabsTrigger value="aesthetic">Aesthetic</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="silhouette">Silhouette</TabsTrigger>
          </TabsList>
          <TabsContent value="aesthetic" className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Minimal",
                "Classic",
                "Casual",
                "Avant-garde",
                "Streetwear",
                "Formal",
              ].map((style) => (
                <Card
                  key={style}
                  className="rounded-none cursor-pointer hover:border-black transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <div className="aspect-square bg-muted mb-4"></div>
                    <p>{style}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="colors" className="pt-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                "#000000",
                "#FFFFFF",
                "#8B4513",
                "#556B2F",
                "#708090",
                "#F5F5DC",
              ].map((color) => (
                <div
                  key={color}
                  className="aspect-square cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="silhouette" className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Fitted",
                "Relaxed",
                "Oversized",
                "Structured",
                "Layered",
                "Draped",
              ].map((silhouette) => (
                <Card
                  key={silhouette}
                  className="rounded-none cursor-pointer hover:border-black transition-colors"
                >
                  <CardContent className="p-4 text-center">
                    <div className="aspect-square bg-muted mb-4"></div>
                    <p>{silhouette}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Link href="/organize">
            <Button size="lg" className="rounded-none px-8">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
