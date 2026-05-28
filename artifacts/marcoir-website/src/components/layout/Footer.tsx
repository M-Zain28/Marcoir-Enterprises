import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#321A12] text-white py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif font-bold mb-4 tracking-wider">MARCOIR</h2>
          <p className="text-white/70 max-w-md mb-8">
            Digital Transformation. Content Strategy. AI Automation.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">🇬🇧 UK</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">🇺🇸 USA</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">🇦🇪 UAE</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">🇦🇺 Australia</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">🇵🇰 Pakistan</span>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-white/70 hover:text-[#FE5C57] transition-colors">Home</Link></li>
            <li><Link href="/services" className="text-white/70 hover:text-[#FE5C57] transition-colors">Services</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-[#FE5C57] transition-colors">About Us</Link></li>
            <li><Link href="/portfolio" className="text-white/70 hover:text-[#FE5C57] transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-[#FE5C57] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-6 border-b border-white/20 pb-2 inline-block">Connect</h3>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://www.instagram.com/marcoirenterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#02E5D2] transition-colors flex items-center gap-2"
                data-testid="link-footer-instagram"
              >
                Instagram ↗
              </a>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 hover:text-[#02E5D2] transition-colors flex items-center gap-2">
                Book a Consultation ↗
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        <p>&copy; {new Date().getFullYear()} Marcoir Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
