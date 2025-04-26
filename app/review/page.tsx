import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Download, Share2 } from "lucide-react";

export default function ReviewPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Review Your Elevated Look
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Here's your complete elevated wardrobe. Review and save your
          selections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-light mb-6">Your Current Wardrobe</h2>
            <div className="space-y-4">
              <Card className="rounded-none">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-4">Essentials</h3>
                  <div className="space-y-3">
                    {[
                      "Black Wool Shirt",
                      "White Cotton Tee",
                      "Navy Chinos",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted"></div>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-4">Character Pieces</h3>
                  <div className="space-y-3">
                    {["Olive Cotton Jacket", "Patterned Silk Scarf"].map(
                      (item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted"></div>
                          <p className="text-sm">{item}</p>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-6">New Additions</h2>
            <div className="space-y-4">
              <Card className="rounded-none">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-4">Essentials</h3>
                  <div className="space-y-3">
                    {["Wool Trousers", "Cashmere Sweater", "Linen Shirt"].map(
                      (item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted"></div>
                          <p className="text-sm">{item}</p>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-4">Character Pieces</h3>
                  <div className="space-y-3">
                    {["Leather Loafers", "Wool Coat"].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted"></div>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 mb-12">
          <h2 className="text-2xl font-light mb-6 text-center">
            Complete Look Preview
          </h2>
          <div className="aspect-[16/9] bg-white flex items-center justify-center">
            <p className="text-muted-foreground">
              Your elevated style visualization
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button size="lg" className="rounded-none px-8">
            <Check className="mr-2 h-4 w-4" /> Save Look
          </Button>
          <Button variant="outline" size="lg" className="rounded-none px-8">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline" size="lg" className="rounded-none px-8">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </div>
    </div>
  );
}
