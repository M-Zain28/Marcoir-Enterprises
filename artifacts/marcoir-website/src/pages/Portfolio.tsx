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

/* ══════════════ WEB MOCKUPS ══════════════ */

function AutoMockup() {
  return (
    <BrowserFrame url="malleeautos.com.au">
      <div className="h-full bg-[#f5f5f5] flex flex-col">
        <div className="bg-[#1a2744] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#FE5C57] rounded" />
            <div className="space-y-0.5">
              <div className="w-12 h-1 bg-white/80 rounded" />
              <div className="w-8 h-0.5 bg-white/40 rounded" />
            </div>
          </div>
          <div className="flex gap-3">
            {[1,2,3,4].map(i => <div key={i} className="w-6 h-1 bg-white/30 rounded" />)}
          </div>
          <div className="w-14 h-4 bg-[#FE5C57] rounded-full" />
        </div>
        <div className="relative flex-1 bg-gradient-to-br from-[#1a2744] via-[#243058] to-[#1a2744] flex flex-col justify-end pb-3 px-3">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30" style={{background:"repeating-linear-gradient(45deg,transparent,transparent 4px,rgba(255,255,255,0.05) 4px,rgba(255,255,255,0.05) 5px)"}} />
          <div className="mb-2">
            <div className="w-20 h-2 bg-white/80 rounded mb-1" />
            <div className="w-28 h-1.5 bg-white/50 rounded mb-0.5" />
            <div className="w-24 h-1.5 bg-white/50 rounded mb-2" />
            <div className="w-12 h-4 bg-[#FE5C57] rounded-full" />
          </div>
        </div>
        <div className="bg-white px-3 py-2 grid grid-cols-3 gap-1.5">
          {[["🔧","Auto Repair"],["🚗","Car Sales"],["🛡️","Insurance"]].map(([,l],i) => (
            <div key={i} className="bg-[#f0f2f5] rounded-lg p-1.5 text-center">
              <div className="w-4 h-4 bg-[#1a2744]/20 rounded mx-auto mb-0.5" />
              <div className="text-[7px] text-gray-500 font-medium">{l}</div>
            </div>
          ))}
        </div>
        <div className="bg-white px-3 py-2 flex gap-2">
          {[1,2].map(i => (
            <div key={i} className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-1.5 flex gap-1.5">
              <div className="w-8 h-8 bg-[#1a2744]/10 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="w-full h-1 bg-gray-200 rounded mb-0.5" />
                <div className="w-3/4 h-1 bg-gray-100 rounded mb-0.5" />
                <div className="w-8 h-2.5 bg-[#FE5C57] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ConsultancyMockup() {
  return (
    <BrowserFrame url="fabconsultants.co.uk">
      <div className="h-full bg-white flex flex-col">
        <div className="bg-[#003087] px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-[#003087] rounded-sm" />
            </div>
            <div className="w-14 h-1.5 bg-white/70 rounded" />
          </div>
          <div className="flex gap-2">
            {[1,2,3,4].map(i => <div key={i} className="w-5 h-1 bg-white/40 rounded" />)}
          </div>
          <div className="w-12 h-3.5 bg-[#FFC107] rounded" />
        </div>
        <div className="relative bg-gradient-to-r from-[#003087] to-[#0050b3] px-4 py-3 flex items-center gap-2">
          <div className="flex-1">
            <div className="w-20 h-2 bg-white/90 rounded mb-1" />
            <div className="w-28 h-1.5 bg-white/60 rounded mb-0.5" />
            <div className="w-24 h-1.5 bg-white/60 rounded mb-2" />
            <div className="flex gap-2">
              <div className="w-12 h-4 bg-[#FFC107] rounded" />
              <div className="w-10 h-4 border border-white/40 rounded" />
            </div>
          </div>
          <div className="w-20 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
            <Monitor className="w-6 h-6 text-white/30" />
          </div>
        </div>
        <div className="flex gap-1 px-2 py-1.5 bg-[#f8f9fa] border-b border-gray-100">
          {["🇬🇧","🇵🇰","🇦🇪","🇺🇸","🇨🇦"].map((f,i) => <span key={i} className="text-xs">{f}</span>)}
          <span className="ml-auto text-[8px] text-gray-400">5 Countries</span>
        </div>
        <div className="flex-1 px-3 py-2 grid grid-cols-2 gap-2">
          {[
            { h: "Why FTB?", lines: 4 },
            { h: "Testimonials", lines: 3 },
          ].map((c) => (
            <div key={c.h} className="bg-gray-50 rounded-lg p-2">
              <div className="w-12 h-1.5 bg-[#003087]/50 rounded mb-1.5" />
              {Array.from({ length: c.lines }).map((_,i) => (
                <div key={i} className="h-0.5 bg-gray-200 rounded mb-0.5" style={{width:`${95 - i * 12}%`}} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function SaaSMockup() {
  const bars = [55,72,45,90,68,85,78];
  return (
    <BrowserFrame url="vaultline.app/dashboard">
      <div className="h-full bg-[#0f111a] flex flex-col">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-10 bg-[#1a1d2e] border-r border-white/5 flex flex-col items-center py-2 gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-md" />
            {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-white/5 rounded" />)}
          </div>
          {/* Main */}
          <div className="flex-1 p-2">
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              {[
                { l: "MRR", v: "£48K", c: "text-[#02E5D2]" },
                { l: "Users", v: "2,341", c: "text-[#FE5C57]" },
                { l: "Churn", v: "1.2%", c: "text-green-400" },
              ].map(m => (
                <div key={m.l} className="bg-white/5 rounded-lg p-1.5">
                  <div className="text-[7px] text-white/30 mb-0.5">{m.l}</div>
                  <div className={`text-xs font-bold ${m.c}`}>{m.v}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-2 mb-2">
              <div className="text-[7px] text-white/30 mb-1.5">Revenue — 7 days</div>
              <div className="flex items-end gap-1 h-10">
                {bars.map((h,i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-[#02E5D2] to-[#FE5C57] rounded-t opacity-80" style={{height:`${h}%`}} />
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-lg p-2">
              <div className="text-[7px] text-white/30 mb-1.5">Recent signups</div>
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-1.5 mb-1">
                  <div className="w-3 h-3 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-full" />
                  <div className="h-0.5 flex-1 bg-white/10 rounded" />
                  <div className="text-[7px] text-white/30">now</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SecurityMockup() {
  return (
    <BrowserFrame url="rcsecuritygroup.com.au">
      <div className="h-full bg-[#0a0a0a] flex flex-col">
        <div className="bg-[#111] px-3 py-2 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#02E5D2] rounded-full" />
            <div className="w-16 h-1.5 bg-white/70 rounded" />
          </div>
          <div className="flex gap-2">
            {[1,2,3,4].map(i => <div key={i} className="w-5 h-1 bg-white/20 rounded" />)}
          </div>
          <div className="w-14 h-4 bg-[#02E5D2] rounded text-[7px] text-black font-bold flex items-center justify-center">Get Quote</div>
        </div>
        <div className="relative flex-1 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle at 50% 50%, #02E5D2 0%, transparent 70%)"}} />
          <div className="px-4 py-3">
            <div className="text-[8px] text-[#02E5D2] mb-1 font-bold tracking-widest">#1 SECURITY COMPANY BRISBANE</div>
            <div className="w-24 h-2 bg-white/80 rounded mb-1" />
            <div className="w-32 h-1.5 bg-white/50 rounded mb-0.5" />
            <div className="w-28 h-1.5 bg-white/50 rounded mb-3" />
            <div className="flex gap-2">
              <div className="w-14 h-4 bg-[#02E5D2] rounded text-[7px] text-black font-bold flex items-center justify-center">Get Protected</div>
              <div className="w-12 h-4 border border-white/20 rounded text-[7px] text-white/60 flex items-center justify-center">Learn More</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 px-4 py-2">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                <div className="w-4 h-4 bg-[#02E5D2]/20 rounded-full mx-auto mb-1" />
                <div className="w-8 h-0.5 bg-white/20 mx-auto rounded" />
              </div>
            ))}
          </div>
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
  MockupComponent: React.ComponentType;
}[] = [
  { id: "p1", category: "web", title: "Mallee Auto's", tags: ["Webflow", "CRO"], MockupComponent: AutoMockup },
  { id: "p2", category: "web", title: "FAB Consultants", tags: ["Framer", "SEO"], MockupComponent: ConsultancyMockup },
  { id: "p3", category: "web", title: "Vaultline SaaS Platform", tags: ["Bubble", "Xano"], MockupComponent: SaaSMockup },
  { id: "p4", category: "web", title: "RC Security Group", tags: ["Webflow", "Lead Gen"], MockupComponent: SecurityMockup },
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
                  <Link
                    href="/contact"
                    className="flex-shrink-0 btn-gradient px-5 py-2 text-xs font-bold tracking-widest uppercase"
                  >
                    Explore
                  </Link>
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
