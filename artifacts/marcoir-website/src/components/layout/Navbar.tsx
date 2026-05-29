import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 w-full flex justify-center">
      <div
        className={`w-full max-w-5xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl py-2"
            : "backdrop-blur-md bg-white/10 border border-white/20 shadow-xl py-3"
        } px-6 flex items-center justify-between`}
      >
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img
            src="/marcoir-logo-new.png"
            alt="Marcoir Enterprises"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#FE5C57] ${
                location === link.path ? "text-[#FE5C57]" : "text-[#321A12]"
              }`}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-gradient px-6 py-2.5 text-sm"
            data-testid="link-nav-cta"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="md:hidden text-[#321A12]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 backdrop-blur-xl bg-white/40 border border-white/40 shadow-2xl rounded-2xl p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${
                location === link.path ? "text-[#FE5C57]" : "text-[#321A12]"
              }`}
              data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-gradient px-6 py-3 text-center"
            data-testid="link-mobile-nav-cta"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
