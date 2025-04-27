import type React from "react";
import type { Metadata } from "next/types";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capsule8 | Elevate Your Personal Style",
  description: "Organize, curate, and elevate your personal fashion style",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
