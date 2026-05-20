"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/chatlync-logo-removebg-preview.png" alt="Chatlync" className="h-9 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-colors ${
                pathname === l.href
                  ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                  : "text-[var(--color-body)] hover:text-[var(--color-heading)] hover:bg-gray-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.chatsync.pk/login"
            className="px-4 py-2 text-[14px] font-semibold text-[var(--color-body)] hover:text-[var(--color-heading)] transition"
          >
            Log in
          </a>
          <a
            href="https://app.chatsync.pk/signup"
            className="px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-[14px] font-semibold rounded-xl transition-all shadow-md shadow-[var(--color-primary)]/20 hover:shadow-lg"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-[15px] font-semibold transition ${
                  pathname === l.href
                    ? "text-[var(--color-primary)] bg-[var(--color-primary)]/5"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a href="https://app.chatsync.pk/login" className="text-center px-4 py-3 text-[15px] font-semibold text-gray-700 hover:bg-gray-50 rounded-xl">Log in</a>
              <a href="https://app.chatsync.pk/signup" className="text-center px-4 py-3 bg-[var(--color-primary)] text-white text-[15px] font-semibold rounded-xl">Start Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
