import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Mail, FileText, Layers } from "lucide-react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function OrganizePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Organize Your Wardrobe
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Let's organize your current wardrobe in three simple steps.
        </p>

        <div className="mb-8">
          <Progress value={33} className="h-1 rounded-none" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Step 1 of 3</span>
            <span>Import Receipts</span>
          </div>
        </div>

        <Tabs defaultValue="step1" className="mb-12">
          <TabsList className="grid grid-cols-3 w-full rounded-none">
            <TabsTrigger value="step1" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Import Receipts
            </TabsTrigger>
            <TabsTrigger value="step2" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Catalog Items
            </TabsTrigger>
            <TabsTrigger value="step3" className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> Categorize
            </TabsTrigger>
          </TabsList>

          <TabsContent value="step1" className="pt-6">
            <Card className="rounded-none border-2 border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-12 min-h-[300px]">
                <div className="bg-muted rounded-full p-4 mb-6">
                  <Mail className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">Connect Your Email</h3>
                <p className="text-center text-muted-foreground mb-6 max-w-md">
                  We'll scan your email for purchase receipts to automatically
                  catalog your wardrobe.
                </p>
                <div className="flex gap-4">
                  <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-none">Connect Gmail</Button>
                  </a>
                  <Button variant="outline" className="rounded-none">
                    Connect Outlook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="step2" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-none">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted mb-4"></div>
                  <h3 className="font-medium">Wool Stretch Shirt</h3>
                  <p className="text-muted-foreground text-sm">
                    JACQUES • $465
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-none">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted mb-4"></div>
                  <h3 className="font-medium">Cotton Nylon Jacket</h3>
                  <p className="text-muted-foreground text-sm">
                    JACQUES • $565
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="step3" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Essentials</h3>
                <div className="space-y-4">
                  <Card className="rounded-none">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted"></div>
                      <div>
                        <h4 className="font-medium">Black Wool Shirt</h4>
                        <p className="text-muted-foreground text-sm">JACQUES</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Button variant="outline" className="rounded-none w-full">
                    + Add Essential
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Character Pieces</h3>
                <div className="space-y-4">
                  <Card className="rounded-none">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted"></div>
                      <div>
                        <h4 className="font-medium">Olive Cotton Jacket</h4>
                        <p className="text-muted-foreground text-sm">JACQUES</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Button variant="outline" className="rounded-none w-full">
                    + Add Character Piece
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Link href="/recommendations">
            <Button size="lg" className="rounded-none px-8">
              Continue to Recommendations{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
