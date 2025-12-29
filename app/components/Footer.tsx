import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">🍔 Food App</h2>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              Discover delicious meals, add your favorite dishes, and manage
              your food journey with ease.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12">

            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-orange-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/food/new" className="hover:text-orange-400 transition">
                    Add Food
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:text-orange-400 transition">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-3">
                Support
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Food App. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Made with ❤️ for food lovers
          </p>
        </div>

      </div>
    </footer>
  );
}
