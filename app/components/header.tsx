import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, User, ShoppingBag } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-light tracking-widest">
            CAPSULE8
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/scan" className="text-sm uppercase hover:text-muted-foreground transition-colors">
              Scan
            </Link>
            <Link href="/customize" className="text-sm uppercase hover:text-muted-foreground transition-colors">
              Customize
            </Link>
            <Link href="/organize" className="text-sm uppercase hover:text-muted-foreground transition-colors">
              Organize
            </Link>
            <Link href="/recommendations" className="text-sm uppercase hover:text-muted-foreground transition-colors">
              Recommendations
            </Link>
            <Link href="/shop" className="text-sm uppercase hover:text-muted-foreground transition-colors">
              Shop
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
