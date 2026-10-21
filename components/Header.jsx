import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#010D40] text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Site Title */}
        <Link href="/" className="text-xl font-bold hover:opacity-90">
          Laurus Designs
        </Link>

        {/* Navigation Bar */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}