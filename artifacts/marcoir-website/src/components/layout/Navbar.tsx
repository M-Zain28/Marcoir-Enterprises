import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const WHATSAPP_HREF = "https://api.whatsapp.com/send?phone=447353376934";

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

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20b558] transition-colors"
            data-testid="link-nav-whatsapp"
          >
            <WhatsAppIcon />
            +44 7353 376934
          </a>
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
        <div className="absolute top-24 left-4 right-4 backdrop-blur-xl bg-white/40 border border-white/40 shadow-2xl rounded-2xl p-6 flex flex-col gap-4 md:hidden">
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
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-2xl text-base font-semibold"
            data-testid="link-mobile-nav-whatsapp"
          >
            <WhatsAppIcon />
            WhatsApp: +44 7353 376934
          </a>
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
