import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-orange-500">
              🍔 Food App
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-sm mx-auto md:mx-0">
              Discover delicious meals, add your favorite dishes, and manage
              your food journey with ease.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex justify-center md:justify-start gap-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full
                             bg-gray-800 text-gray-300
                             transition hover:bg-orange-500 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="transition hover:text-orange-400">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/food/new"
                    className="transition hover:text-orange-400"
                  >
                    Add Food
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="transition hover:text-orange-400"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition hover:text-orange-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-orange-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-orange-400">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2 text-center text-sm text-gray-400 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} Food App. All rights reserved.
          </p>
          <p>Made with ❤️ for food lovers</p>
        </div>

      </div>
    </footer>
  );
}
