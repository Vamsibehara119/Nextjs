import { cookies } from "next/headers"
import Link from "next/link"
export default async function Header() {
  const cookieStore =await cookies()
  const auth = cookieStore.get("auth")?.value
  const role = cookieStore.get("role")?.value

  const href =
    auth && role === "admin" ? "/food" : "/login"

  const label =
    auth ? "Foods" : "Login"
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-orange-50 via-white to-orange-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-orange-600 tracking-wide">
          🍔 Food App
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">

          <a
            href="/"
            className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-orange-600
                       after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500
                       after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>

          <a
            href="/food/new"
            className="relative text-gray-700 font-semibold transition-all duration-300 hover:text-orange-600
                       after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500
                       after:transition-all after:duration-300 hover:after:w-full"
          >
            Add Food
          </a>

         <Link
      href={href}
      className="px-5 py-2 rounded-full bg-orange-500 text-white font-semibold
                 shadow-md hover:shadow-xl hover:bg-orange-600
                 transform hover:-translate-y-0.5 transition-all duration-300"
    >
      {label}
    </Link>

        </nav>

      </div>
    </header>
  );
}
