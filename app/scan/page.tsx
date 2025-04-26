import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera } from "lucide-react";
import Link from "next/link";

export default function ScanPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 text-center">
          Body Scan
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Let's start by scanning your body to get accurate measurements for
          perfect fitting recommendations.
        </p>

        <Card className="border-2 border-dashed rounded-none">
          <CardContent className="flex flex-col items-center justify-center p-12 min-h-[500px]">
            <div className="bg-muted rounded-full p-6 mb-6">
              <Camera className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Scan Your Body</h3>
            <p className="text-center text-muted-foreground mb-6 max-w-md">
              Stand 6-8 feet away from your camera in fitted clothing for the
              most accurate results.
            </p>
            <Button size="lg" className="rounded-none px-8">
              Start Scan
            </Button>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Already have your measurements? Skip this step.
          </p>
          <Link href="/customize">
            <Button variant="outline" className="rounded-none">
              Skip to Customization <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
