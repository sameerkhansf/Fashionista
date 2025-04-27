"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/app/components/ui/separator";

export default function Review() {
  const cartItems = [
    {
      id: 1,
      name: "Wool Coat",
      brand: "COS",
      price: 250,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Leather Belt",
      brand: "Massimo Dutti",
      price: 80,
      quantity: 1,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/shop"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          Review & Checkout
        </h1>
        <p className="text-neutral-600">
          Review your selections and complete your purchase.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-8">
          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-neutral-50 border-b border-neutral-200">
              <h2 className="text-lg font-medium">
                Shopping Cart ({cartItems.length} items)
              </h2>
            </div>

            <div className="divide-y divide-neutral-200">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-neutral-500">{item.brand}</p>
                      <p className="mt-1 font-medium">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <div className="flex items-center border border-neutral-200 rounded-md">
                        <button className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-900">
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-900">
                          <Plus size={16} />
                        </button>
                      </div>

                      <button className="ml-4 text-neutral-500 hover:text-neutral-900">
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-neutral-50 border-b border-neutral-200">
              <h2 className="text-lg font-medium">Shipping Information</h2>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-neutral-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-6 bg-neutral-50 border-b border-neutral-200">
              <h2 className="text-lg font-medium">Payment Method</h2>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment"
                  className="w-4 h-4"
                  defaultChecked
                />
                <label htmlFor="credit-card" className="font-medium">
                  Credit Card
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Card Number</label>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 rounded-md p-2"
                    placeholder="**** **** **** ****"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Expiration Date</label>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 rounded-md p-2"
                    placeholder="MM/YY"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 rounded-md p-2"
                    placeholder="***"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="border border-neutral-200 rounded-lg overflow-hidden sticky top-6">
            <div className="p-6 bg-neutral-50 border-b border-neutral-200">
              <h2 className="text-lg font-medium">Order Summary</h2>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button className="w-full btn-primary mt-6">
                Complete Purchase
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-neutral-500 flex items-center justify-center">
                  <Check size={16} className="text-green-500 mr-2" />
                  Secure checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
