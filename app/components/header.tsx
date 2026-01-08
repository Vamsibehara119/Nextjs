import { cookies } from "next/headers";
import Link from "next/link";

export default async function Header() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth")?.value;
  const role = cookieStore.get("role")?.value;

  const href = auth && role === "admin" ? "/food" : "/login";
  const label = auth ? "Foods" : "Login";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-linear-to-r from-orange-50 via-white to-orange-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-orange-600 tracking-wide">
            🍔 Food App
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/food/new">Add Food</NavLink>

            <Link
              href={href}
              className="btn px-5 py-2 rounded-full bg-orange-500 text-white font-semibold
                         shadow-md hover:shadow-xl hover:bg-orange-600
                         transition-all duration-300"
            >
              {label}
            </Link>
          </nav>

          {/* Mobile Menu */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-md p-2 hover:bg-orange-100 text-black">
              ☰
            </summary>

            <div className="absolute right-0 mt-2 w-44 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
              <MobileLink href="/">Home</MobileLink>
              <MobileLink href="/food/new">Add Food</MobileLink>
              <MobileLink href={href}>{label}</MobileLink>
            </div>
          </details>

        </div>
      </div>
    </header>
  );
}

/* ---------- Reusable Nav Components ---------- */

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative font-semibold text-gray-700 transition-all duration-300 hover:text-orange-600
                 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500
                 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
    >
      {children}
    </Link>
  );
}
