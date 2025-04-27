import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
// import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Elevate Your Personal Style
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8">
                Organize your wardrobe, discover your unique style, and build a
                capsule collection that truly represents you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about-you"
                  className="btn-primary inline-block text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary inline-block text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/630f9449e9d3ae151b3599d3/1662514164101-Q92URWUY93EEM8A1OAN2/starter-capsule-wardrobe-for-men.jpg"
                alt="Capsule wardrobe showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="section-title text-2xl md:text-3xl text-center mb-16">
            How Capsule8 Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light">01</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Define your profile</h3>
              <p className="text-neutral-600">
                Answer questions about your body features, aesthetic
                preferences, and color palette to define your profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light">02</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Wardrobe analysis</h3>
              <p className="text-neutral-600">
                Existing cloth uploads from email receipts or manual uploads,
                then categorize and organize them.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-light">03</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Elevate Your Look</h3>
              <p className="text-neutral-600">
                Receive personalized recommendations to fill the gaps in your
                wardrobe and elevate your personal style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="section-title text-2xl md:text-3xl mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Join thousands of others who have discovered their personal style
            and built a wardrobe they love.
          </p>
          <Link href="/about-you" className="btn-primary inline-block">
            Start Your Style Journey
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="section-title text-2xl md:text-3xl text-center mb-16">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-neutral-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Sarah J.</h4>
                    <p className="text-sm text-neutral-500">
                      Fashion Enthusiast
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600">
                  "Capsule8 completely transformed how I think about my
                  wardrobe. I've saved money by making smarter purchases and
                  always have something perfect to wear."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
