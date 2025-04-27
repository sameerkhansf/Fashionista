import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              About Capsule8
            </h3>
            <p className="text-sm text-neutral-600 mb-6">
              Capsule8 helps you elevate your personal style by organizing your
              wardrobe and providing personalized fashion recommendations.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-neutral-600 hover:text-neutral-900"
              >
                Pinterest
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Contact
            </h3>
            <address className="not-italic">
              <p className="text-sm text-neutral-600 mb-2">
                Email: hello@capsule8.com
              </p>
              <p className="text-sm text-neutral-600 mb-2">
                Phone: +1 (555) 123-4567
              </p>
              <p className="text-sm text-neutral-600">
                123 Fashion Avenue
                <br />
                New York, NY 10001
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 text-center">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Capsule8. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
