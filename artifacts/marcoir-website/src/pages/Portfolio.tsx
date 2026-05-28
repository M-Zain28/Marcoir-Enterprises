import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ExternalLink,
  Monitor,
  Smartphone,
  TrendingUp,
  Video,
} from "lucide-react";

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Browser frame wrapper ── */
function BrowserFrame({ children, url = "marcoir.app" }: { children: React.ReactNode; url?: string }) {
  return (
    <div className="bg-[#1e1e2e] rounded-xl overflow-hidden shadow-lg">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#13131f] border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FE5C57]/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        <div className="flex-1 mx-2 bg-white/8 rounded-full px-3 py-0.5">
          <span className="text-white/30 text-[9px] font-mono">{url}</span>
        </div>
      </div>
      <div className="overflow-hidden aspect-[16/10]">{children}</div>
    </div>
  );
}

/* ── Phone frame wrapper ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-36 bg-[#1e1e2e] rounded-[2rem] p-2 shadow-2xl">
      <div className="bg-black rounded-[1.75rem] overflow-hidden relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#1e1e2e] rounded-full z-10" />
        <div className="aspect-[9/19]">{children}</div>
      </div>
    </div>
  );
}

/* ══════════════ WEB MOCKUPS (real client sites) ══════════════ */

/* RC Security Group — rcsecuritygroup.com.au
   Dark/black theme, teal CTA, Bebas Neue headings, Brisbane AU */
function RCSecurityMockup() {
  return (
    <BrowserFrame url="rcsecuritygroup.com.au">
      <div className="h-full bg-[#0d0d0d] flex flex-col overflow-hidden">
        {/* Nav */}
        <div className="bg-[#111] px-3 py-2 flex items-center justify-between border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-2">
            {/* RC shield logo */}
            <div className="w-7 h-7 relative flex-shrink-0">
              <div className="w-7 h-7 bg-[#0dcfbf] rounded-sm flex items-center justify-center">
                <span className="text-[7px] font-black text-black tracking-tighter">RC</span>
              </div>
            </div>
            <div>
              <div className="text-[8px] font-bold text-white tracking-wider">RC SECURITY</div>
              <div className="text-[5px] text-[#0dcfbf] tracking-widest">GROUP</div>
            </div>
          </div>
          <div className="flex gap-3">
            {["Home","Services","About","Contact"].map(m => (
              <span key={m} className="text-[6px] text-white/40">{m}</span>
            ))}
          </div>
          <div className="bg-[#0dcfbf] rounded px-2 py-1 text-[6px] font-bold text-black">Free Consultation</div>
        </div>

        {/* Hero */}
        <div className="relative flex-1 overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at 60% 40%, rgba(13,207,191,0.12) 0%, transparent 70%)"}} />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"8px 8px"}} />

          <div className="relative px-4 pt-4 pb-2">
            {/* Badge */}
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1 h-3 bg-[#0dcfbf] rounded-full" />
              <span className="text-[7px] font-bold text-[#0dcfbf] tracking-[0.2em] uppercase">Brisbane's #1 Security Company</span>
            </div>
            {/* Hero heading — Bebas Neue-style wide caps */}
            <div className="mb-3">
              <div className="text-[11px] font-black text-white tracking-wide uppercase leading-tight">PROTECTING</div>
              <div className="text-[11px] font-black text-[#0dcfbf] tracking-wide uppercase leading-tight">WHAT MATTERS</div>
              <div className="text-[11px] font-black text-white tracking-wide uppercase leading-tight">MOST</div>
            </div>
            <div className="w-40 h-0.5 bg-white/10 rounded mb-2" />
            <p className="text-[6px] text-white/50 leading-relaxed mb-3 max-w-[160px]">
              Professional security services for businesses, events, and properties across Brisbane & QLD.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-[#0dcfbf] rounded px-3 py-1.5 text-[6px] font-bold text-black">Get Free Consultation</div>
              <div className="border border-white/20 rounded px-2.5 py-1.5 text-[6px] text-white/50">Our Services</div>
            </div>
          </div>

          {/* Services strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#111] border-t border-white/5 px-3 py-2 grid grid-cols-4 gap-2">
            {[
              { l: "Corporate Security", c: "bg-[#0dcfbf]/15" },
              { l: "Event Security", c: "bg-[#0dcfbf]/10" },
              { l: "CCTV & Monitoring", c: "bg-[#0dcfbf]/10" },
              { l: "Mobile Patrols", c: "bg-[#0dcfbf]/10" },
            ].map(s => (
              <div key={s.l} className={`${s.c} border border-[#0dcfbf]/20 rounded-lg p-1.5 text-center`}>
                <div className="w-3 h-3 bg-[#0dcfbf]/30 rounded-full mx-auto mb-0.5" />
                <div className="text-[5px] text-white/50 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* Herbal Shifakhana — herbalshifakhana.com
   Shopify e-commerce, green/natural theme, product grid */
function HerbalShifakhanaMockup() {
  const products = [
    { name: "Herbal Immunity Boost", price: "Rs 1,800", badge: "Best Seller", badgeClr: "bg-green-600" },
    { name: "Natural Detox Tea", price: "Rs 1,200", badge: "New", badgeClr: "bg-[#e67e22]" },
    { name: "Shifakhana Relief Oil", price: "Rs 2,400", badge: "Sale", badgeClr: "bg-red-600" },
    { name: "Herbal Digestive Mix", price: "Rs 950", badge: null, badgeClr: "" },
  ];
  return (
    <BrowserFrame url="herbalshifakhana.com">
      <div className="h-full bg-white flex flex-col overflow-hidden">
        {/* Announcement */}
        <div className="bg-[#2d6a2d] px-3 py-1 text-center flex-shrink-0">
          <span className="text-[6px] text-white/90 font-medium">Free shipping on orders over Rs 3,000 — 100% Natural & Authentic</span>
        </div>

        {/* Nav */}
        <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 bg-[#2d6a2d] rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 text-white text-[6px] font-bold flex items-center justify-center">H</div>
            </div>
            <div>
              <div className="text-[8px] font-bold text-[#2d6a2d]">Herbal Shifakhana</div>
              <div className="text-[5px] text-gray-400">Pure · Natural · Authentic</div>
            </div>
          </div>
          <div className="flex gap-3">
            {["Shop","About","Blogs","Contact"].map(m => (
              <span key={m} className="text-[6px] text-gray-500">{m}</span>
            ))}
          </div>
          <div className="flex gap-1.5 items-center">
            <div className="w-5 h-5 bg-gray-100 rounded-full" />
            <div className="bg-[#2d6a2d] rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-[5px] text-white font-bold">0</span>
            </div>
          </div>
        </div>

        {/* Hero banner */}
        <div className="bg-gradient-to-r from-[#1a4d1a] to-[#2d6a2d] px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div>
            <div className="text-[7px] text-[#a8e6a8] font-semibold mb-0.5 tracking-wider uppercase">100% Natural Remedies</div>
            <div className="text-[9px] font-black text-white leading-tight">Pakistan's Trusted</div>
            <div className="text-[9px] font-black text-[#76c976] leading-tight">Herbal Store</div>
            <div className="mt-1.5 bg-[#76c976] rounded-full px-2 py-0.5 text-[6px] font-bold text-black inline-block">Shop Now</div>
          </div>
          {/* Leaf illustration */}
          <div className="w-16 h-12 relative">
            <div className="absolute right-0 top-0 w-10 h-14 rounded-[50%_0_50%_50%] bg-green-400/30 border border-green-400/50 transform rotate-12" />
            <div className="absolute right-3 top-2 w-7 h-10 rounded-[50%_0_50%_50%] bg-green-500/20 border border-green-500/40 transform rotate-6" />
          </div>
        </div>

        {/* Products */}
        <div className="flex-1 overflow-hidden p-2">
          <div className="text-[7px] font-bold text-gray-700 mb-1.5">Featured Products</div>
          <div className="grid grid-cols-4 gap-1.5">
            {products.map(p => (
              <div key={p.name} className="bg-[#f8fdf8] border border-green-100 rounded-xl overflow-hidden">
                <div className="relative bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] h-10 flex items-center justify-center">
                  {p.badge && (
                    <div className={`absolute top-0.5 left-0.5 ${p.badgeClr} rounded px-0.5 text-[4px] text-white font-bold`}>{p.badge}</div>
                  )}
                  <div className="w-6 h-6 rounded-full bg-green-200 border border-green-300" />
                </div>
                <div className="p-1">
                  <div className="text-[5px] text-gray-600 leading-tight mb-0.5 line-clamp-2">{p.name}</div>
                  <div className="text-[6px] font-bold text-[#2d6a2d]">{p.price}</div>
                  <div className="mt-0.5 bg-[#2d6a2d] rounded text-[4px] text-white text-center py-0.5">Add to Cart</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#f0f7f0] border-t border-green-100 px-3 py-1.5 grid grid-cols-3 gap-2 flex-shrink-0">
          {[
            { l: "Natural Ingredients", v: "100%" },
            { l: "Happy Customers", v: "50K+" },
            { l: "Years Trusted", v: "15+" },
          ].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[8px] font-bold text-[#2d6a2d]">{s.v}</div>
              <div className="text-[5px] text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* Novo Stays — novostays.com
   React/MUI property booking platform, clean modern UI */
function NovoStaysMockup() {
  const properties = [
    { loc: "Kensington, London", type: "2-Bed Apartment", price: "£2,200/mo", badge: "Featured" },
    { loc: "Canary Wharf, London", type: "Studio Suite", price: "£1,450/mo", badge: "New" },
    { loc: "Manchester City Centre", type: "3-Bed House", price: "£1,800/mo", badge: null },
  ];
  return (
    <BrowserFrame url="novostays.com">
      <div className="h-full bg-[#f9fafb] flex flex-col overflow-hidden">
        {/* Nav */}
        <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-gradient-to-br from-[#1a237e] to-[#3949ab] rounded-lg flex items-center justify-center">
              <span className="text-[5px] font-black text-white">NS</span>
            </div>
            <span className="text-[8px] font-bold text-[#1a237e]">NovoStays</span>
          </div>
          <div className="flex gap-3">
            {["Find a Stay","List Property","How it Works","Sign In"].map(m => (
              <span key={m} className="text-[6px] text-gray-500">{m}</span>
            ))}
          </div>
          <div className="bg-[#1a237e] rounded-full px-2.5 py-1 text-[6px] text-white font-semibold">Get Started</div>
        </div>

        {/* Hero search area */}
        <div className="bg-gradient-to-b from-[#1a237e] to-[#283593] px-4 py-3 flex-shrink-0">
          <div className="text-[8px] font-black text-white mb-0.5">Find Your Perfect Stay</div>
          <div className="text-[6px] text-white/60 mb-2">Serviced apartments & short-lets across the UK</div>
          {/* Search bar */}
          <div className="bg-white rounded-xl shadow-md flex items-center overflow-hidden">
            <div className="flex-1 px-2 py-1.5 border-r border-gray-100">
              <div className="text-[5px] text-gray-400 font-semibold mb-0.5">LOCATION</div>
              <div className="text-[6px] text-gray-600">London, UK</div>
            </div>
            <div className="px-2 py-1.5 border-r border-gray-100">
              <div className="text-[5px] text-gray-400 font-semibold mb-0.5">CHECK-IN</div>
              <div className="text-[6px] text-gray-600">Jun 15</div>
            </div>
            <div className="px-2 py-1.5 border-r border-gray-100">
              <div className="text-[5px] text-gray-400 font-semibold mb-0.5">CHECK-OUT</div>
              <div className="text-[6px] text-gray-600">Jun 30</div>
            </div>
            <div className="bg-[#1a237e] px-3 py-2 flex-shrink-0 flex items-center gap-1">
              <span className="text-[6px] text-white font-bold">Search</span>
            </div>
          </div>
        </div>

        {/* Filters row */}
        <div className="bg-white border-b border-gray-100 px-3 py-1.5 flex items-center gap-2 flex-shrink-0 overflow-hidden">
          <span className="text-[6px] text-gray-400 font-semibold">Filters:</span>
          {["Studio","1-Bed","2-Bed","Pet Friendly","Bills Incl."].map((f,i) => (
            <span key={f} className={`text-[5px] px-1.5 py-0.5 rounded-full border ${i===0 ? "bg-[#1a237e] text-white border-[#1a237e]" : "text-gray-500 border-gray-200"}`}>{f}</span>
          ))}
        </div>

        {/* Property cards */}
        <div className="flex-1 overflow-hidden p-2">
          <div className="space-y-1.5">
            {properties.map(p => (
              <div key={p.loc} className="bg-white border border-gray-100 rounded-xl flex items-center gap-2 p-1.5 shadow-sm">
                <div className="w-14 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-300/50" />
                  {p.badge && (
                    <div className="absolute top-0.5 left-0.5 bg-[#1a237e] text-white text-[4px] font-bold px-1 rounded">{p.badge}</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[6px] font-bold text-gray-800 truncate">{p.loc}</div>
                  <div className="text-[5px] text-gray-500">{p.type}</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-sm" />)}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-[7px] font-bold text-[#1a237e]">{p.price}</div>
                  <div className="text-[4px] text-gray-400">per month</div>
                  <div className="mt-0.5 bg-[#1a237e]/10 rounded px-1 py-0.5 text-[4px] text-[#1a237e] font-semibold">View</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white border-t border-gray-100 px-3 py-1.5 grid grid-cols-3 gap-2 flex-shrink-0">
          {[["500+","Properties"],["4.9★","Rating"],["UK Wide","Coverage"]].map(([v,l]) => (
            <div key={l} className="text-center">
              <div className="text-[7px] font-bold text-[#1a237e]">{v}</div>
              <div className="text-[5px] text-gray-400">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* QSR Estates — qsrestates.com
   UK property lettings & management, WordPress/Kadence, "YOUR PROPERTY, OUR PRIORITY" */
function QSREstatesMockup() {
  return (
    <BrowserFrame url="qsrestates.com">
      <div className="h-full bg-white flex flex-col overflow-hidden">
        {/* Nav */}
        <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-1.5">
            {/* QSR key/house logo */}
            <div className="w-6 h-6 bg-[#1c3557] rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-[5px] font-black text-white">QSR</span>
            </div>
            <div>
              <div className="text-[7px] font-bold text-[#1c3557]">QSR Estates</div>
              <div className="text-[5px] text-gray-400">Property Specialists</div>
            </div>
          </div>
          <div className="flex gap-3">
            {["Lettings","Sales","Management","Contact"].map(m => (
              <span key={m} className="text-[6px] text-gray-500 font-medium">{m}</span>
            ))}
          </div>
          <div className="bg-[#c9a84c] rounded px-2 py-1 text-[6px] font-bold text-white">Book Valuation</div>
        </div>

        {/* Hero */}
        <div className="relative flex-shrink-0" style={{background:"linear-gradient(135deg,#1c3557 0%,#254870 100%)"}}>
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")"}} />
          <div className="relative px-4 py-4 text-center">
            <div className="text-[7px] text-[#c9a84c] font-bold tracking-[0.25em] uppercase mb-1">UK Property Specialists</div>
            <div className="text-[11px] font-black text-white tracking-wide uppercase leading-tight">YOUR PROPERTY,</div>
            <div className="text-[11px] font-black text-[#c9a84c] tracking-wide uppercase leading-tight">OUR PRIORITY</div>
            <div className="text-[6px] text-white/60 mt-1.5 mb-3 max-w-[200px] mx-auto leading-relaxed">
              Specialising in lettings, management &amp; investments across the UK
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="bg-[#c9a84c] rounded px-3 py-1.5 text-[6px] font-bold text-white">Find a Property</div>
              <div className="border border-white/30 rounded px-2.5 py-1.5 text-[6px] text-white/70">Book Valuation</div>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="bg-[#f4f0e8] border-b border-[#c9a84c]/20 px-3 py-2 flex items-center gap-2 flex-shrink-0">
          <div className="flex-1 bg-white border border-gray-200 rounded-lg px-2 py-1 flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0" />
            <div className="h-0.5 flex-1 bg-gray-100 rounded" />
          </div>
          <div className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-[6px] text-gray-400">Lettings ▾</div>
          <div className="bg-[#1c3557] rounded-lg px-3 py-1 text-[6px] text-white font-bold">Search</div>
        </div>

        {/* Featured Properties */}
        <div className="flex-1 overflow-hidden px-3 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[7px] font-bold text-[#1c3557]">Featured Properties</div>
            <div className="text-[6px] text-[#c9a84c] font-semibold">View All →</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { area: "Birmingham", bed: "3 Bed", price: "£1,350 pcm", tag: "TO LET" },
              { area: "Manchester", bed: "2 Bed", price: "£1,100 pcm", tag: "LET AGREED" },
              { area: "Leeds", bed: "4 Bed", price: "£1,650 pcm", tag: "TO LET" },
            ].map(p => (
              <div key={p.area} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-10 bg-gradient-to-b from-gray-100 to-gray-200">
                  <div className="absolute top-0.5 left-0.5 bg-[#1c3557] text-white text-[4px] font-bold px-1 py-0.5 rounded">{p.tag}</div>
                </div>
                <div className="p-1.5">
                  <div className="text-[6px] font-bold text-gray-700">{p.area}</div>
                  <div className="text-[5px] text-gray-400">{p.bed}</div>
                  <div className="text-[6px] font-bold text-[#c9a84c]">{p.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="bg-[#1c3557] px-3 py-2 grid grid-cols-4 gap-2 flex-shrink-0">
          {[["200+","Properties"],["10yr","Experience"],["98%","Satisfaction"],["UK","Coverage"]].map(([v,l]) => (
            <div key={l} className="text-center">
              <div className="text-[7px] font-bold text-[#c9a84c]">{v}</div>
              <div className="text-[5px] text-white/40">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ══════════════ APP MOCKUPS ══════════════ */

function FitnessAppMockup() {
  return (
    <div className="flex items-end justify-center gap-3">
      <PhoneFrame>
        <div className="h-full bg-[#0d1117] flex flex-col pt-4">
          <div className="px-3 mb-2">
            <div className="text-[8px] text-white/40">Good morning</div>
            <div className="text-[10px] text-white font-bold">FITNESS ONLINE</div>
          </div>
          <div className="relative mx-3 rounded-xl overflow-hidden mb-2" style={{height:60}}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE5C57] to-[#321A12]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-[8px] font-bold text-center leading-tight">Today's<br/>Workout</div>
            </div>
          </div>
          <div className="px-3 space-y-1.5 flex-1">
            {["General Muscle Building","Large Arms","Powerful Legs"].map(w => (
              <div key={w} className="flex items-center gap-1.5 bg-white/5 rounded-lg px-2 py-1.5">
                <div className="w-3 h-3 bg-[#FE5C57]/20 rounded-sm" />
                <span className="text-[7px] text-white/70">{w}</span>
              </div>
            ))}
          </div>
          <div className="mx-3 mb-3 bg-[#FE5C57] rounded-full py-2 text-center text-[8px] font-bold text-white">Start Session</div>
        </div>
      </PhoneFrame>
      <PhoneFrame>
        <div className="h-full bg-[#1a1a1a] flex flex-col">
          <div className="h-1/2 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] relative overflow-hidden">
            <div className="absolute inset-0 flex items-end pb-3 px-2">
              <div className="text-white text-[8px] font-bold">Sign in with Facebook</div>
            </div>
            <div className="absolute top-3 left-2">
              <div className="text-[8px] text-white/60">FITNESS ONLINE</div>
            </div>
          </div>
          <div className="flex-1 px-3 py-3 space-y-2">
            <div className="h-5 bg-white/10 rounded-full px-2 flex items-center">
              <div className="w-12 h-0.5 bg-white/20 rounded" />
            </div>
            <div className="h-5 bg-white/10 rounded-full" />
            <div className="h-5 bg-[#FE5C57] rounded-full flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">Sign in</span>
            </div>
            <div className="text-[7px] text-white/30 text-center">Don't have an account?</div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function RealEstateAppMockup() {
  return (
    <div className="flex items-end justify-center gap-3">
      <PhoneFrame>
        <div className="h-full bg-white flex flex-col pt-4">
          <div className="px-3 mb-2 flex items-center justify-between">
            <div className="w-14 h-2 bg-gray-800 rounded" />
            <div className="w-5 h-5 bg-gray-100 rounded-full" />
          </div>
          <div className="mx-3 bg-gray-100 rounded-lg px-2 py-1.5 mb-3 flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <div className="w-16 h-1 bg-gray-200 rounded" />
          </div>
          <div className="px-3 space-y-2 flex-1">
            {[
              { bed: "3 bed", price: "CHF 1.2M", loc: "Zurich" },
              { bed: "2 bed", price: "CHF 850K", loc: "Bern" },
            ].map((p, i) => (
              <div key={i} className="flex gap-2 bg-gray-50 rounded-xl p-2">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex-shrink-0" />
                <div>
                  <div className="text-[7px] font-bold text-gray-800 mb-0.5">{p.bed} · {p.loc}</div>
                  <div className="text-[8px] font-bold text-[#FE5C57]">{p.price}</div>
                  <div className="w-8 h-1 bg-gray-200 rounded mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame>
        <div className="h-full bg-[#1a0050] flex flex-col pt-4 px-2">
          <div className="text-[7px] text-[#FE5C57] font-bold mb-1">WE CARE ABOUT</div>
          <div className="text-[8px] text-white font-bold leading-tight mb-2">Your Privacy</div>
          <div className="space-y-1 flex-1 overflow-hidden">
            {[1,2,3,4].map(i => <div key={i} className="h-1 bg-white/10 rounded" style={{width:`${95-i*8}%`}} />)}
          </div>
          <div className="space-y-1.5 pb-3">
            <div className="bg-[#FE5C57] rounded-full py-1.5 text-center text-[7px] font-bold text-white">I Accept</div>
            <div className="border border-white/20 rounded-full py-1.5 text-center text-[7px] text-white/60">No Consent</div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function EcommerceAppMockup() {
  return (
    <div className="flex items-end justify-center gap-3">
      <PhoneFrame>
        <div className="h-full bg-white flex flex-col pt-4">
          <div className="px-2 mb-2">
            <div className="bg-[#4CAF50] rounded-lg px-2 py-1.5 text-[7px] text-white font-bold">BIG SALE — UP TO 80% OFF</div>
          </div>
          <div className="px-2 grid grid-cols-2 gap-1.5 flex-1">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <div className="h-12 bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="p-1">
                  <div className="w-full h-0.5 bg-gray-200 rounded mb-0.5" />
                  <div className="flex items-center justify-between">
                    <div className="text-[6px] text-[#4CAF50] font-bold">25% OFF</div>
                    <div className="w-4 h-3 bg-[#4CAF50] rounded text-[5px] text-white flex items-center justify-center">Add</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-100 py-1">
            {[1,2,3,4].map(i => <div key={i} className="flex-1 h-3 bg-gray-50 mx-1 rounded" />)}
          </div>
        </div>
      </PhoneFrame>
      <PhoneFrame>
        <div className="h-full bg-[#f8f8f8] flex flex-col pt-4">
          <div className="relative h-1/2 bg-gradient-to-br from-gray-100 to-gray-200 mx-2 rounded-xl mb-2 overflow-hidden flex items-center justify-center">
            <div className="w-12 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded" />
          </div>
          <div className="px-2 space-y-1.5 flex-1">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />)}
            </div>
            <div className="w-20 h-1.5 bg-gray-300 rounded" />
            <div className="w-14 h-2 bg-[#4CAF50] rounded text-[6px] text-white flex items-center justify-center font-bold">PKR 1,299</div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ══════════════ DIGITAL MARKETING MOCKUPS ══════════════ */

function SEOMockup() {
  const bars = [32, 48, 55, 63, 70, 82, 89, 95];
  return (
    <BrowserFrame url="search.google.com/search-console">
      <div className="h-full bg-white flex flex-col">
        <div className="bg-[#f8f9fa] px-3 py-2 border-b border-gray-100 flex items-center gap-3">
          <div className="text-[8px] font-bold text-[#4285f4]">Search Console</div>
          <div className="flex gap-3 ml-auto">
            {["Performance","Coverage","Sitemaps"].map(t => (
              <span key={t} className="text-[7px] text-gray-500">{t}</span>
            ))}
          </div>
        </div>
        <div className="p-3 flex-1 flex flex-col">
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { l:"Total Clicks", v:"48.2K", c:"text-[#4285f4]" },
              { l:"Impressions", v:"1.3M", c:"text-[#34a853]" },
              { l:"Avg. CTR", v:"3.7%", c:"text-[#fbbc04]" },
              { l:"Avg. Position", v:"3.2", c:"text-[#ea4335]" },
            ].map(m => (
              <div key={m.l} className="text-center">
                <div className={`text-sm font-bold ${m.c}`}>{m.v}</div>
                <div className="text-[7px] text-gray-400">{m.l}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-[7px] text-gray-400 mb-1">Clicks — Last 28 days <span className="text-[#34a853] font-semibold">↑ 234%</span></div>
            <div className="flex items-end gap-1 h-16">
              {bars.map((h,i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#4285f4] to-[#4285f4]/40 rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"].map(m => (
                <span key={m} className="flex-1 text-center text-[6px] text-gray-300">{m}</span>
              ))}
            </div>
          </div>
          <div className="mt-2 border-t border-gray-100 pt-2">
            <div className="text-[7px] text-gray-400 mb-1.5">Top queries</div>
            {["digital marketing agency uk","ai voice agent service","no-code web development"].map((q, i) => (
              <div key={q} className="flex items-center gap-2 mb-1">
                <div className="text-[7px] text-[#4285f4] flex-1 truncate">{q}</div>
                <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#4285f4]/60 rounded-full" style={{width:`${90 - i*20}%`}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function MetaAdsMockup() {
  return (
    <BrowserFrame url="business.facebook.com/ads">
      <div className="h-full bg-[#f0f2f5] flex flex-col">
        <div className="bg-[#1877f2] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#1877f2] rounded-sm" />
            </div>
            <span className="text-white text-[8px] font-bold">Meta Ads Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[7px] text-white/70">Marcoir Campaign</span>
            <span className="text-[7px] bg-green-400 text-white px-1.5 py-0.5 rounded-full font-bold">Active</span>
          </div>
        </div>
        <div className="p-2 grid grid-cols-4 gap-1.5 border-b border-gray-200">
          {[
            { l:"Reach", v:"1.4M", up:true },
            { l:"Clicks", v:"32.1K", up:true },
            { l:"CTR", v:"4.7%", up:true },
            { l:"ROAS", v:"6.2×", up:true },
          ].map(m => (
            <div key={m.l} className="bg-white rounded-xl p-2 text-center shadow-sm">
              <div className="text-xs font-bold text-[#321A12]">{m.v}</div>
              <div className="text-[7px] text-gray-400">{m.l}</div>
              <div className="text-[6px] text-green-500 font-semibold">↑ trending</div>
            </div>
          ))}
        </div>
        <div className="p-2 flex-1">
          <div className="bg-white rounded-xl p-2 mb-2 shadow-sm">
            <div className="text-[7px] font-semibold text-gray-600 mb-1.5">Campaign Performance</div>
            <div className="space-y-1.5">
              {[
                { name:"Brand Awareness", pct:85, clr:"bg-[#1877f2]" },
                { name:"Lead Generation", pct:72, clr:"bg-[#FE5C57]" },
                { name:"Retargeting", pct:91, clr:"bg-[#02E5D2]" },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-2">
                  <span className="text-[6px] text-gray-400 w-16">{c.name}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${c.clr} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <span className="text-[6px] text-gray-400">{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { platform:"Facebook", pct:"45%", clr:"bg-[#1877f2]" },
              { platform:"Instagram", pct:"38%", clr:"bg-[#e1306c]" },
              { platform:"TikTok", pct:"17%", clr:"bg-[#010101]" },
            ].slice(0,2).map(p => (
              <div key={p.platform} className="bg-white rounded-xl p-2 shadow-sm text-center">
                <div className={`w-4 h-4 ${p.clr} rounded-full mx-auto mb-1`} />
                <div className="text-[7px] font-bold text-gray-700">{p.pct}</div>
                <div className="text-[6px] text-gray-400">{p.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function TikTokAdsMockup() {
  return (
    <BrowserFrame url="ads.tiktok.com/campaign">
      <div className="h-full bg-[#0f0f0f] flex flex-col">
        <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded" />
            <span className="text-white text-[8px] font-bold">TikTok for Business</span>
          </div>
          <span className="text-[7px] bg-[#FE2C55] text-white px-2 py-0.5 rounded-full font-bold">Live</span>
        </div>
        <div className="p-2 grid grid-cols-3 gap-1.5 border-b border-white/5">
          {[
            { l:"Impressions", v:"8.4M" },
            { l:"Video Views", v:"2.1M" },
            { l:"Conversions", v:"4,832" },
          ].map(m => (
            <div key={m.l} className="bg-white/5 rounded-xl p-2 text-center">
              <div className="text-xs font-bold text-white">{m.v}</div>
              <div className="text-[6px] text-white/40">{m.l}</div>
            </div>
          ))}
        </div>
        <div className="p-2 flex-1 flex flex-col gap-2">
          <div className="bg-white/5 rounded-xl p-2">
            <div className="text-[7px] text-white/40 mb-1.5">Top Creative Performance</div>
            {[
              { name:"Hook v1 — Testimonial", vtr:"68%", ctr:"4.2%" },
              { name:"Hook v2 — Problem/Solution", vtr:"71%", ctr:"5.1%" },
            ].map(a => (
              <div key={a.name} className="flex items-center gap-2 mb-1.5 bg-white/5 rounded-lg p-1.5">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FE2C55] to-[#321A12] rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-[7px] text-white/70 truncate">{a.name}</div>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-[6px] text-[#02E5D2]">VTR {a.vtr}</span>
                    <span className="text-[6px] text-[#FE5C57]">CTR {a.ctr}</span>
                  </div>
                </div>
                <div className="text-[6px] text-green-400">Top</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-xl p-2">
            <div className="text-[7px] text-white/40 mb-1">Spend vs Results</div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] text-white font-bold">£4,200</span>
              <span className="text-[7px] text-white/30">→</span>
              <span className="text-[8px] text-[#02E5D2] font-bold">£26,100 revenue</span>
            </div>
            <div className="text-[6px] text-green-400 font-semibold">6.2× ROAS</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ══════════════ VIDEO EDITING MOCKUPS ══════════════ */

function BrandFilmMockup() {
  return (
    <BrowserFrame url="capcut.com/editor — BrandFilm_v3_Final.mp4">
      <div className="h-full bg-[#1a1a2e] flex flex-col">
        {/* Toolbar */}
        <div className="bg-[#13131f] px-3 py-1.5 flex items-center gap-2 border-b border-white/5">
          {["File","Edit","Export"].map(m => <span key={m} className="text-[7px] text-white/40">{m}</span>)}
          <div className="ml-auto flex gap-1.5">
            <div className="w-12 h-4 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded text-[6px] text-white flex items-center justify-center font-bold">Export</div>
          </div>
        </div>
        {/* Preview */}
        <div className="relative bg-black flex-1 flex items-center justify-center overflow-hidden" style={{maxHeight:70}}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FE5C57]/20 to-[#02E5D2]/10" />
          <div className="absolute top-1.5 right-2 flex items-center gap-1">
            <motion.div className="w-1.5 h-1.5 bg-[#FE5C57] rounded-full" animate={{opacity:[1,0.3,1]}} transition={{duration:1,repeat:Infinity}} />
            <span className="text-[6px] text-[#FE5C57] font-bold">LIVE</span>
          </div>
          <div className="text-white/20 text-[9px] font-serif italic">Marcoir — Brand Film</div>
          <div className="absolute bottom-1.5 left-2 right-2 flex items-center gap-1">
            <div className="flex-1 h-0.5 bg-white/10 rounded-full">
              <motion.div className="h-full bg-[#FE5C57] rounded-full" animate={{width:["0%","62%"]}} transition={{duration:4,ease:"easeInOut"}} />
            </div>
            <span className="text-[6px] text-white/30 font-mono">02:04</span>
          </div>
        </div>
        {/* Timeline tracks */}
        <div className="bg-[#0d0d1a] p-2 space-y-1">
          {[
            { label:"V1", clr:"bg-[#FE5C57]", blocks:[{w:"62%"},{w:"33%",ml:"64%"}] },
            { label:"A1", clr:"bg-[#02E5D2]", blocks:[{w:"96%"}] },
            { label:"FX", clr:"bg-purple-400", blocks:[{w:"18%",ml:"10%"},{w:"15%",ml:"42%"},{w:"20%",ml:"72%"}] },
            { label:"CC", clr:"bg-yellow-400", blocks:[{w:"96%"}] },
          ].map(t => (
            <div key={t.label} className="flex items-center gap-1.5">
              <span className="text-[6px] text-white/30 font-mono w-4">{t.label}</span>
              <div className="flex-1 h-3 bg-white/5 rounded relative overflow-hidden">
                {t.blocks.map((b,i) => (
                  <div key={i} className={`absolute h-full ${t.clr} opacity-70 rounded`} style={{width:b.w, left:(b as any).ml||"0%"}} />
                ))}
                <motion.div className="absolute top-0 bottom-0 w-px bg-white/50" animate={{left:["0%","62%"]}} transition={{duration:4,ease:"easeInOut"}} />
              </div>
            </div>
          ))}
        </div>
        {/* Reach stats */}
        <div className="bg-[#0d0d1a] border-t border-white/5 px-3 py-1.5 grid grid-cols-3 gap-2">
          {[
            { p:"LinkedIn", v:"1.2M", clr:"text-blue-400" },
            { p:"YouTube", v:"890K", clr:"text-red-400" },
            { p:"TikTok", v:"2.4M", clr:"text-pink-400" },
          ].map(s => (
            <div key={s.p} className="text-center">
              <div className={`text-[8px] font-bold ${s.clr}`}>{s.v}</div>
              <div className="text-[6px] text-white/30">{s.p}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function SocialContentMockup() {
  return (
    <BrowserFrame url="adobe.com/premiere-pro — Social_Reel_Pack">
      <div className="h-full bg-[#1e1b2e] flex flex-col">
        <div className="bg-[#2d2a3e] px-3 py-1.5 flex items-center gap-3 border-b border-white/5">
          <div className="flex gap-1">
            {["Program Monitor","Timeline","Effects"].map(p => (
              <span key={p} className="text-[6px] text-white/40 border-b border-[#9b59b6] pb-0.5">{p}</span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex gap-2 p-2 overflow-hidden">
          {/* Source panel */}
          <div className="w-1/3 bg-black rounded overflow-hidden flex flex-col">
            <div className="flex-1 bg-gradient-to-b from-[#2d2a3e] to-[#1e1b2e] flex items-center justify-center">
              <div className="text-[7px] text-white/30 font-mono text-center">00:00:08:12<br/>Source</div>
            </div>
          </div>
          {/* Sequence panel */}
          <div className="flex-1 bg-black rounded overflow-hidden flex flex-col">
            <div className="flex-1 bg-gradient-to-br from-[#FE5C57]/20 to-transparent flex items-center justify-center">
              <div className="text-[7px] text-white/60 font-mono">Program</div>
            </div>
          </div>
        </div>
        {/* Timeline */}
        <div className="bg-[#1a1a1a] border-t border-white/5 p-1.5">
          {[
            { n:"Video 1", clr:"bg-[#9b59b6]" },
            { n:"Audio 1", clr:"bg-[#2ecc71]" },
            { n:"Motion", clr:"bg-[#e67e22]" },
          ].map(t => (
            <div key={t.n} className="flex items-center gap-1 mb-1">
              <span className="text-[5px] text-white/30 w-8">{t.n}</span>
              <div className="flex-1 h-2.5 bg-white/5 rounded overflow-hidden relative">
                <div className={`absolute left-0 h-full ${t.clr} opacity-60 rounded`} style={{width:`${Math.random()*30+60}%`}} />
              </div>
            </div>
          ))}
        </div>
        {/* Engagement strip */}
        <div className="bg-black/50 border-t border-white/5 px-3 py-1.5 flex justify-between">
          <div className="text-[6px] text-white/30">3 clips · 00:45 total</div>
          <div className="flex gap-3">
            <span className="text-[6px] text-[#FE5C57] font-semibold">4.2M views</span>
            <span className="text-[6px] text-[#02E5D2] font-semibold">18.7% eng.</span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ══════════════ PROJECT DATA ══════════════ */

const categories = [
  { id: "web", label: "Web Development", Icon: Monitor },
  { id: "app", label: "App Development", Icon: Smartphone },
  { id: "marketing", label: "Digital Marketing", Icon: TrendingUp },
  { id: "video", label: "Video Editing", Icon: Video },
];

const projects: {
  id: string;
  category: string;
  title: string;
  tags: string[];
  url?: string;
  MockupComponent: React.ComponentType;
}[] = [
  { id: "p1", category: "web", title: "RC Security Group", tags: ["Elementor", "Brisbane AU"], url: "https://rcsecuritygroup.com.au", MockupComponent: RCSecurityMockup },
  { id: "p2", category: "web", title: "Herbal Shifakhana", tags: ["Shopify", "E-Commerce"], url: "https://herbalshifakhana.com", MockupComponent: HerbalShifakhanaMockup },
  { id: "p3", category: "web", title: "Novo Stays", tags: ["React / MUI", "Property Tech"], url: "https://novostays.com", MockupComponent: NovoStaysMockup },
  { id: "p4", category: "web", title: "QSR Estates", tags: ["WordPress", "UK Lettings"], url: "https://qsrestates.com", MockupComponent: QSREstatesMockup },
  { id: "p5", category: "app", title: "Fitness Online — Workout App", tags: ["FlutterFlow", "iOS/Android"], MockupComponent: FitnessAppMockup },
  { id: "p6", category: "app", title: "Homegate Swiss Real Estate", tags: ["Glide", "Mobile"], MockupComponent: RealEstateAppMockup },
  { id: "p7", category: "app", title: "Fashion Ecommerce App", tags: ["FlutterFlow", "Payments"], MockupComponent: EcommerceAppMockup },
  { id: "p8", category: "marketing", title: "B2B Education — SEO Scale", tags: ["Technical SEO", "Content"], MockupComponent: SEOMockup },
  { id: "p9", category: "marketing", title: "Real Estate Meta Ads", tags: ["Meta", "Lead Gen"], MockupComponent: MetaAdsMockup },
  { id: "p10", category: "marketing", title: "Retail TikTok Campaign", tags: ["TikTok Ads", "6.2× ROAS"], MockupComponent: TikTokAdsMockup },
  { id: "p11", category: "video", title: "Corporate Brand Film", tags: ["CapCut", "4K"], MockupComponent: BrandFilmMockup },
  { id: "p12", category: "video", title: "Social Media Content Pack", tags: ["Premiere Pro", "Reels"], MockupComponent: SocialContentMockup },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("web");

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <motion.section
        className="relative pt-16 pb-16 px-6 md:px-16 max-w-7xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[#02E5D2]/10 rounded-full blur-3xl -z-10" />
        <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">
          Our Work
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-6 leading-tight max-w-3xl">
          Work That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
            Moves Metrics
          </span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-[#321A12]/70 max-w-2xl mb-4">
          A selection of real client projects across web development, mobile apps, digital marketing, and video production.
        </motion.p>
        <motion.p variants={fadeUp} className="text-sm text-[#321A12]/40 italic">
          Want your project here? We'd love to work together.
        </motion.p>
      </motion.section>

      {/* Category tabs */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full mb-10">
        <div className="inline-flex gap-2 bg-[#321A12]/5 p-1.5 rounded-2xl flex-wrap">
          {categories.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === id
                  ? "bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] text-white shadow-md"
                  : "text-[#321A12]/60 hover:text-[#321A12] hover:bg-white/60"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="px-6 md:px-16 max-w-7xl mx-auto w-full pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Mockup area */}
                <div className="p-5 bg-gradient-to-br from-[#f5f5f5] to-[#ebebeb] group-hover:from-[#f0f0f0] group-hover:to-[#e5e5e5] transition-all duration-300">
                  <project.MockupComponent />
                </div>

                {/* Card footer */}
                <div className="px-6 py-5 flex items-center justify-between bg-white">
                  <div>
                    <h3 className="font-bold text-[#321A12] text-base mb-1.5">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[10px] font-semibold text-[#321A12]/50 bg-[#321A12]/5 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 btn-gradient px-5 py-2 text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1.5"
                    >
                      Visit Site <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="flex-shrink-0 btn-gradient px-5 py-2 text-xs font-bold tracking-widest uppercase"
                    >
                      Explore
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA band */}
      <div className="w-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to be our next case study?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
            Tell us what you're building. We'll show you exactly how to get there.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/marcoirenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 transition-all shadow-2xl"
            >
              View on Instagram <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
