"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-6 md:px-10 border-b border-neutral-200">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:block">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/wardrobe"
                  className="text-sm uppercase tracking-wider hover:text-neutral-500"
                >
                  Wardrobe
                </Link>
              </li>
              <li>
                <Link
                  href="/your-look"
                  className="text-sm uppercase tracking-wider hover:text-neutral-500"
                >
                  Your Look
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-sm uppercase tracking-wider hover:text-neutral-500"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 text-center">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl md:text-3xl font-light tracking-widest">
              CAPSULE8
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search size={20} />
          </button>
          <Link href="/account" aria-label="Account">
            <User size={20} />
          </Link>
          <Link href="/bag" aria-label="Shopping bag">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-neutral-200">
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/wardrobe"
                  className="block text-sm uppercase tracking-wider"
                >
                  Wardrobe
                </Link>
              </li>
              <li>
                <Link
                  href="/your-look"
                  className="block text-sm uppercase tracking-wider"
                >
                  Your Look
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block text-sm uppercase tracking-wider"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
