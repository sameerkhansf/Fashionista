import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag } from "lucide-react";
import HeaderAuth from "@/components/header-auth";

export default function Header() {
  return (
    <header className="border-b w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="text-xl font-light tracking-widest">
            CAPSULE8
          </Link>
        </div>
        {/* Center: Navigation */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link
            href="/scan"
            className="text-sm uppercase hover:text-muted-foreground transition-colors"
          >
            Scan
          </Link>
          <Link
            href="/customize"
            className="text-sm uppercase hover:text-muted-foreground transition-colors"
          >
            Customize
          </Link>
          <Link
            href="/organize"
            className="text-sm uppercase hover:text-muted-foreground transition-colors"
          >
            Organize
          </Link>
          <Link
            href="/recommendations"
            className="text-sm uppercase hover:text-muted-foreground transition-colors"
          >
            Recommendations
          </Link>
          <Link
            href="/shop"
            className="text-sm uppercase hover:text-muted-foreground transition-colors"
          >
            Shop
          </Link>
        </nav>
        {/* Right: Icons and Auth */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
}
