"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/app/components/ui/slider";

export default function AboutYou() {
  const [height, setHeight] = useState<number[]>([170]);
  const [weight, setWeight] = useState<number[]>([70]);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-light mb-4">About You</h1>
        <p className="text-neutral-600">
          Let's get to know your body features to help create your personalized
          style profile.
        </p>
      </div>

      <form className="space-y-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Label htmlFor="gender" className="text-base">
              Body Type
            </Label>
            <RadioGroup defaultValue="female" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="non-binary" id="non-binary" />
                <Label htmlFor="non-binary">Non-binary</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label htmlFor="age" className="text-base">
              Age Range
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select age range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18-24">18-24</SelectItem>
                <SelectItem value="25-34">25-34</SelectItem>
                <SelectItem value="35-44">35-44</SelectItem>
                <SelectItem value="45-54">45-54</SelectItem>
                <SelectItem value="55+">55+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          <Label className="text-base">Height (cm)</Label>
          <div className="space-y-6">
            <Slider
              value={height}
              min={140}
              max={210}
              step={1}
              onValueChange={setHeight}
            />
            <div className="text-center text-lg font-medium">
              {height[0]} cm
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Label className="text-base">Weight (kg)</Label>
          <div className="space-y-6">
            <Slider
              value={weight}
              min={40}
              max={150}
              step={1}
              onValueChange={setWeight}
            />
            <div className="text-center text-lg font-medium">
              {weight[0]} kg
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Label htmlFor="body-shape" className="text-base">
            Body Shape
          </Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select body shape" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hourglass">Hourglass</SelectItem>
              <SelectItem value="pear">Pear</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="rectangle">Rectangle</SelectItem>
              <SelectItem value="inverted-triangle">
                Inverted Triangle
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label htmlFor="skin-tone" className="text-base">
            Skin Tone
          </Label>
          <div className="grid grid-cols-6 gap-2">
            {[
              "#f6e6ce",
              "#f2d2a9",
              "#e8b990",
              "#c99c67",
              "#8c6239",
              "#513222",
            ].map((color, i) => (
              <div
                key={i}
                className="w-full aspect-square rounded-full border-2 border-transparent hover:border-neutral-900 cursor-pointer transition-all"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <Link href="/organize">
            <Button className="btn-primary flex items-center">
              Continue
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
