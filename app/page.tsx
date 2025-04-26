import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Capsule8 helps you refine your wardrobe and elevate your personal
          style with AI-powered recommendations.
        </p>
        <div className="pt-4">
          <Link href="/scan">
            <Button size="lg" className="rounded-none px-8 py-6 text-base">
              Start Your Style Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        <div className="space-y-4 text-center">
          <div className="text-4xl font-light">01</div>
          <h3 className="text-xl font-medium">Analyze</h3>
          <p className="text-muted-foreground">
            Scan your body and analyze your current wardrobe
          </p>
        </div>
        <div className="space-y-4 text-center">
          <div className="text-4xl font-light">02</div>
          <h3 className="text-xl font-medium">Organize</h3>
          <p className="text-muted-foreground">
            Sort your pieces into essentials and character items
          </p>
        </div>
        <div className="space-y-4 text-center">
          <div className="text-4xl font-light">03</div>
          <h3 className="text-xl font-medium">Elevate</h3>
          <p className="text-muted-foreground">
            Get personalized recommendations to complete your look
          </p>
        </div>
      </div>
    </div>
  );
}
