"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Upload, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductPurchase {
  name: string;
  color: string;
  size: string;
  price: string;
}

interface Order {
  order_number: string;
  brand: string;
  order_date: string;
  website: string;
  location_bought: string;
  product_purchases: ProductPurchase[];
}

interface FetchOrdersResponse {
  result: string;
  orders: Order[];
}

export default function Organize() {
  const [uploadedItems, setUploadedItems] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailConnect = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/fetch_orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data: FetchOrdersResponse = await response.json();
      const orders = data.orders || [];

      // Map the nested product_purchases to the format expected by uploadedItems
      const items = orders.flatMap((order: Order) =>
        order.product_purchases.map((product: ProductPurchase) => {
          const details = [product.color, product.size].filter(Boolean).join(", ");
          return `${product.name} - ${order.brand}${details ? ` (${details})` : ""}`;
        })
      );
      setUploadedItems(items);
    } catch (err) {
      setError("Failed to connect to email and fetch orders. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualUpload = () => {
    // Simulate manual upload
    setUploadedItems([...uploadedItems, "Olive Shirt - JACQUES"]);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/about-you"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to About You
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          Organize Your Wardrobe
        </h1>
        <p className="text-neutral-600">
          Import your existing clothes from email receipts or upload them
          manually.
        </p>
      </div>

      <div className="space-y-10">
        <Tabs defaultValue="email" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email">Email Receipts</TabsTrigger>
            <TabsTrigger value="manual">Manual Upload</TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-6">
            <div className="border border-neutral-200 rounded-lg p-8 text-center">
              <Mail size={48} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-medium mb-2">Connect Your Email</h3>
              <p className="text-neutral-600 mb-6">
                We'll scan your email for purchase receipts to automatically
                import your wardrobe items.
              </p>
              {error && (
                <p className="text-red-500 mb-4">{error}</p>
              )}
              <Button
                onClick={handleEmailConnect}
                className="btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Connecting..." : "Connect Email"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-6">
            <div className="border border-neutral-200 rounded-lg p-8 text-center">
              <Upload size={48} className="mx-auto mb-4 text-neutral-400" />
              <h3 className="text-xl font-medium mb-2">Upload Manually</h3>
              <p className="text-neutral-600 mb-6">
                Upload photos of your clothing items or add them manually with
                descriptions.
              </p>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-10 text-center">
                  <p className="text-neutral-500 mb-4">
                    Drag and drop images here or click to browse
                  </p>
                  <Button variant="outline" className="btn-secondary">
                    Browse Files
                  </Button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input placeholder="Item description (e.g., Black T-Shirt - Zara)" />
                  </div>
                  <Button
                    onClick={handleManualUpload}
                    variant="outline"
                    className="flex items-center"
                  >
                    <Plus size={16} className="mr-2" />
                    Add Item
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {uploadedItems.length > 0 && (
          <div className="border border-neutral-200 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">
              Imported Items ({uploadedItems.length})
            </h3>
            <ul className="space-y-2">
              {uploadedItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 border-b border-neutral-100"
                >
                  <span>{item}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-end">
              <Link href="/customize">
                <Button className="btn-primary flex items-center">
                  Continue to Customize
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}