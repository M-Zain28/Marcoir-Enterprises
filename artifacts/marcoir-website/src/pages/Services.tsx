import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-3 block">{label}</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-5 leading-tight">{title}</h2>
      <p className="text-lg text-[#321A12]/70 max-w-2xl">{subtitle}</p>
    </div>
  );
}

/* ─── VIDEO MOCKUP ─── */
function VideoMockup() {
  return (
    <motion.div
      className="glass-panel p-6 rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* CapCut-style timeline editor */}
      <div className="bg-[#1a1a2e] rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#16213e] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#FE5C57]" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-white/40 text-xs ml-3 font-mono">CapCut — Marcoir_BrandFilm_Final_v3.mp4</span>
        </div>
        {/* Preview area */}
        <div className="relative bg-black aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FE5C57]/20 to-[#02E5D2]/10" />
          <div className="text-center z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-2 border border-white/30">
              <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
            </div>
            <p className="text-white/60 text-xs">00:01:47 / 00:03:22</p>
          </div>
          {/* motion graphics overlay elements */}
          <motion.div
            className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[#FE5C57] text-xs font-bold">● REC</span>
          </motion.div>
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
            <p className="text-white text-xs font-semibold">Marcoir Enterprises</p>
            <p className="text-white/50 text-[10px]">Digital Transformation Agency</p>
          </div>
        </div>
        {/* Timeline */}
        <div className="p-4 bg-[#0d0d1a]">
          <div className="flex items-center gap-2 mb-3">
            {["▶", "⏸", "⏹", "⏭"].map((btn) => (
              <button key={btn} className="text-white/60 text-xs hover:text-white transition-colors w-6 h-6 flex items-center justify-center bg-white/5 rounded">{btn}</button>
            ))}
            <div className="flex-1 h-1 bg-white/10 rounded-full mx-2 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded-full"
                animate={{ width: ["0%", "52%", "52%"] }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" style={{ left: "52%" }} />
            </div>
            <span className="text-white/40 text-xs font-mono">1:47</span>
          </div>
          {/* Track layers */}
          {[
            { label: "V1", color: "bg-[#FE5C57]", blocks: [{ w: "60%", ml: "0%" }, { w: "35%", ml: "62%" }] },
            { label: "A1", color: "bg-[#02E5D2]", blocks: [{ w: "95%", ml: "0%" }] },
            { label: "FX", color: "bg-purple-400", blocks: [{ w: "20%", ml: "10%" }, { w: "15%", ml: "45%" }, { w: "18%", ml: "75%" }] },
          ].map((track) => (
            <div key={track.label} className="flex items-center gap-2 mb-2">
              <span className="text-white/40 text-[10px] font-mono w-5">{track.label}</span>
              <div className="flex-1 h-5 bg-white/5 rounded relative overflow-hidden">
                {track.blocks.map((b, i) => (
                  <div key={i} className={`absolute h-full ${track.color} opacity-70 rounded`} style={{ width: b.w, left: b.ml }} />
                ))}
                <motion.div
                  className="absolute top-0 bottom-0 w-px bg-white/60"
                  animate={{ left: ["0%", "52%"] }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Social reach card */}
      <motion.div
        className="mt-4 grid grid-cols-3 gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {[
          { platform: "TikTok", views: "2.1M", icon: "🎵", clr: "text-pink-400" },
          { platform: "YouTube", views: "890K", icon: "▶", clr: "text-red-400" },
          { platform: "LinkedIn", views: "1.2M", icon: "in", clr: "text-blue-400" },
        ].map((s) => (
          <motion.div key={s.platform} variants={fadeUp} className="glass-card rounded-xl p-3 text-center">
            <div className={`text-lg font-bold ${s.clr}`}>{s.icon}</div>
            <div className="text-[#321A12] font-bold text-sm">{s.views}</div>
            <div className="text-[#321A12]/50 text-[10px]">{s.platform} Views</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─── ANALYTICS MOCKUP ─── */
function AnalyticsMockup() {
  const bars = [42, 67, 55, 89, 72, 95, 78, 61, 84, 91, 76, 88];
  return (
    <motion.div
      className="glass-panel p-6 rounded-3xl overflow-hidden space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Google Search Console */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-gray-400 text-xs ml-2 font-mono">search.google.com/search-console</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-gray-500 font-medium mb-1">Total Clicks — Last 28 days</p>
              <p className="text-2xl font-bold text-[#321A12]">48,291</p>
              <span className="text-xs text-green-600 font-semibold">↑ 234% vs previous period</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Avg. Position</p>
              <p className="text-xl font-bold text-[#02E5D2]">3.2</p>
            </div>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-20">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-[#02E5D2]/80 to-[#02E5D2]/30 rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Meta Ads dashboard */}
      <div className="bg-[#f0f2f5] rounded-2xl overflow-hidden border border-gray-200">
        <div className="bg-[#1877f2] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-xs font-bold">Meta Ads Manager</span>
          <span className="text-white/70 text-xs">Active Campaign ●</span>
        </div>
        <div className="p-4 grid grid-cols-4 gap-3">
          {[
            { label: "Reach", val: "1.4M", chg: "+18%", green: true },
            { label: "Clicks", val: "32,109", chg: "+41%", green: true },
            { label: "CTR", val: "4.7%", chg: "+0.9%", green: true },
            { label: "ROAS", val: "6.2×", chg: "+2.1×", green: true },
          ].map((m) => (
            <div key={m.label} className="bg-white rounded-xl p-2.5 text-center shadow-sm">
              <p className="text-[9px] text-gray-400 font-semibold uppercase">{m.label}</p>
              <p className="text-sm font-bold text-[#321A12]">{m.val}</p>
              <p className="text-[9px] text-green-600 font-semibold">{m.chg}</p>
            </div>
          ))}
        </div>
        {/* Audience bar */}
        <div className="px-4 pb-4">
          <p className="text-[10px] text-gray-500 mb-1 font-semibold">Audience Breakdown</p>
          <div className="h-2 rounded-full flex overflow-hidden gap-0.5">
            <motion.div className="bg-[#1877f2] rounded-full" initial={{ width: 0 }} whileInView={{ width: "45%" }} viewport={{ once: true }} transition={{ duration: 1 }} />
            <motion.div className="bg-[#FE5C57] rounded-full" initial={{ width: 0 }} whileInView={{ width: "30%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />
            <motion.div className="bg-[#02E5D2] rounded-full" initial={{ width: 0 }} whileInView={{ width: "25%" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} />
          </div>
          <div className="flex gap-4 mt-1.5 text-[9px] text-gray-400">
            <span>● Facebook 45%</span>
            <span>● Instagram 30%</span>
            <span>● Audience Network 25%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── WEB MOCKUP (multi-device) ─── */
function WebMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Desktop */}
      <div className="bg-[#1a1a2e] rounded-2xl p-2.5 shadow-2xl">
        <div className="bg-[#16213e] rounded-t-xl px-4 py-2 flex items-center gap-2 mb-1">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FE5C57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white/10 rounded-full px-3 py-0.5 text-white/40 text-[10px] text-center font-mono">marcoir.app</div>
        </div>
        <div className="bg-white rounded-xl overflow-hidden aspect-[16/9]">
          <div className="h-8 bg-[#321A12] flex items-center px-4 gap-4">
            <div className="w-16 h-4 bg-white/20 rounded" />
            <div className="flex gap-3 ml-auto">
              {[1,2,3,4].map(i => <div key={i} className="w-10 h-2 bg-white/20 rounded" />)}
              <div className="w-14 h-5 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded-full" />
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4">
            <div>
              <div className="h-3 bg-[#321A12]/10 rounded mb-2 w-3/4" />
              <div className="h-6 bg-gradient-to-r from-[#FE5C57]/30 to-[#02E5D2]/30 rounded mb-3 w-full" />
              <div className="space-y-1.5 mb-3">
                {[1,2,3].map(i => <div key={i} className="h-2 bg-gray-100 rounded" style={{ width: `${85 - i * 10}%` }} />)}
              </div>
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded-full" />
                <div className="h-6 w-16 border border-gray-200 rounded-full" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#02E5D2]/10 to-[#FE5C57]/10 rounded-xl flex items-center justify-center">
              <div className="text-2xl">🌐</div>
            </div>
          </div>
          <div className="px-4 grid grid-cols-3 gap-2">
            {[1,2,3].map(i => <div key={i} className="h-16 bg-gray-50 rounded-lg border border-gray-100" />)}
          </div>
        </div>
      </div>
      {/* Tablet - floating bottom-right */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-36 bg-[#1a1a2e] rounded-xl p-1.5 shadow-xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-white rounded-lg overflow-hidden aspect-[4/3]">
          <div className="h-3 bg-[#321A12] flex items-center px-2 gap-1">
            <div className="w-8 h-1 bg-white/30 rounded" />
          </div>
          <div className="p-1.5 space-y-1">
            <div className="h-2 bg-[#02E5D2]/20 rounded" />
            <div className="h-6 bg-gray-50 rounded" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-4 bg-[#FE5C57]/10 rounded" />
              <div className="h-4 bg-[#02E5D2]/10 rounded" />
            </div>
          </div>
        </div>
        <p className="text-white/50 text-[8px] text-center mt-1 font-mono">Tablet</p>
      </motion.div>
      {/* Phone - floating bottom-left */}
      <motion.div
        className="absolute -bottom-8 -left-5 w-16 bg-[#1a1a2e] rounded-2xl p-1.5 shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="bg-white rounded-xl overflow-hidden aspect-[9/16]">
          <div className="h-3 bg-[#321A12] flex items-center justify-center">
            <div className="w-4 h-1 bg-white/30 rounded-full" />
          </div>
          <div className="p-1 space-y-1">
            <div className="h-1.5 bg-[#321A12]/20 rounded w-2/3" />
            <div className="h-3 bg-gradient-to-r from-[#FE5C57]/30 to-[#02E5D2]/30 rounded" />
            <div className="space-y-0.5">
              {[1,2,3].map(i => <div key={i} className="h-0.5 bg-gray-100 rounded" />)}
            </div>
            <div className="h-2 w-10 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded-full" />
          </div>
        </div>
        <p className="text-white/50 text-[8px] text-center mt-1 font-mono">Mobile</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── MOBILE APP MOCKUP ─── */
function MobileAppMockup() {
  return (
    <motion.div
      className="flex justify-center gap-4 sm:gap-6 items-end"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Primary phone — full app UI */}
      <div className="w-44 sm:w-56 bg-[#321A12] rounded-[2.5rem] p-3 shadow-2xl relative">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#321A12] rounded-full z-10" />
        <div className="bg-[#fafafa] rounded-[2rem] overflow-hidden h-[460px] flex flex-col">
          {/* Status bar */}
          <div className="bg-white px-4 pt-5 pb-2 flex justify-between items-center text-[8px] text-gray-400 font-semibold">
            <span>9:41</span>
            <span>📶 🔋</span>
          </div>
          {/* App header */}
          <div className="bg-gradient-to-r from-[#321A12] to-[#321A12]/80 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-white/60 text-[9px]">Welcome back</p>
              <p className="text-white text-xs font-bold">Dashboard</p>
            </div>
            <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#02E5D2]" />
            </div>
          </div>
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-2 px-3 py-3">
            {[
              { label: "Revenue", val: "£24.8K", clr: "from-[#02E5D2]/20 to-[#02E5D2]/5" },
              { label: "Users", val: "1,249", clr: "from-[#FE5C57]/20 to-[#FE5C57]/5" },
            ].map((s) => (
              <div key={s.label} className={`bg-gradient-to-br ${s.clr} rounded-xl p-2.5`}>
                <p className="text-[9px] text-gray-500">{s.label}</p>
                <p className="text-xs font-bold text-[#321A12]">{s.val}</p>
              </div>
            ))}
          </div>
          {/* Activity chart */}
          <div className="mx-3 mb-3 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <p className="text-[9px] text-gray-400 font-semibold mb-2">Weekly Activity</p>
            <div className="flex items-end gap-1.5 h-12">
              {[6,8,5,10,7,9,8].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#FE5C57] to-[#02E5D2] rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {["M","T","W","T","F","S","S"].map((d, i) => (
                <span key={i} className="text-[7px] text-gray-300 flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>
          {/* Recent list */}
          <div className="mx-3 space-y-2">
            {[
              { name: "Sarah K.", action: "Booked consult", time: "2m" },
              { name: "James L.", action: "New enquiry", time: "8m" },
              { name: "Ali M.", action: "Payment rcv'd", time: "15m" },
            ].map((item) => (
              <div key={item.name} className="flex items-center gap-2 bg-gray-50 rounded-xl px-2.5 py-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] flex items-center justify-center text-white text-[8px] font-bold shrink-0">
                  {item.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-semibold text-[#321A12] truncate">{item.name}</p>
                  <p className="text-[8px] text-gray-400">{item.action}</p>
                </div>
                <span className="text-[8px] text-gray-300">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second phone — notification screen */}
      <motion.div
        className="w-28 sm:w-36 bg-[#321A12] rounded-[2rem] p-2 shadow-xl mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-[#1a1a2e] rounded-[1.75rem] overflow-hidden h-72 flex flex-col">
          <div className="bg-black px-3 pt-4 pb-2 text-[8px] text-white/40 flex justify-between">
            <span>9:41</span><span>●●●</span>
          </div>
          <div className="flex-1 px-2 py-2 space-y-2">
            <p className="text-white/50 text-[9px] font-semibold text-center mb-3">Notifications</p>
            {[
              { icon: "💬", app: "AI Agent", msg: "Handled 3 inbound calls", t: "now" },
              { icon: "📊", app: "Analytics", msg: "CTR improved to 4.7%", t: "5m" },
              { icon: "🎯", app: "Ads Manager", msg: "Budget 80% used", t: "12m" },
            ].map((n, i) => (
              <motion.div
                key={i}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 rounded-xl p-2 flex items-start gap-2"
              >
                <span className="text-sm">{n.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-[8px] font-bold">{n.app}</p>
                  <p className="text-white/50 text-[7px] leading-tight">{n.msg}</p>
                </div>
                <span className="text-white/30 text-[7px] shrink-0">{n.t}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-white/5 mx-2 mb-2 rounded-2xl h-1 relative">
            <div className="absolute left-1/4 w-1/2 h-full bg-white/30 rounded-full" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── AUTOMATION MOCKUP ─── */
function AutomationMockup() {
  return (
    <motion.div
      className="glass-panel p-6 rounded-3xl space-y-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Email sequence */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#f8faff] px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#4285f4] rounded flex items-center justify-center text-white text-[9px] font-bold">G</div>
            <span className="text-xs text-gray-600 font-semibold">Gmail — Automated Sequence</span>
          </div>
          <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">● Active</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { step: "Email 1", subject: "Welcome to Marcoir 👋", status: "Sent", time: "Immediately", clr: "bg-green-100 text-green-700" },
            { step: "Email 2", subject: "Your free strategy audit is ready", status: "Sent", time: "Day 2", clr: "bg-green-100 text-green-700" },
            { step: "Email 3", subject: "3 mistakes killing your ROI", status: "Sending", time: "Day 5", clr: "bg-blue-100 text-blue-700" },
            { step: "Email 4", subject: "Book your consultation call", status: "Queued", time: "Day 9", clr: "bg-gray-100 text-gray-500" },
          ].map((email, i) => (
            <motion.div
              key={email.step}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-50 hover:bg-gray-50 transition-colors"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-8 h-8 bg-[#321A12]/5 rounded-xl flex items-center justify-center text-xs font-bold text-[#321A12]/40">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#321A12] truncate">{email.subject}</p>
                <p className="text-[10px] text-gray-400">{email.time}</p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${email.clr}`}>{email.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
      {/* AI chat interface */}
      <div className="bg-[#0d1117] rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 bg-[#161b22] flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-white/70 text-xs font-semibold">AI Voice Agent — Live</span>
          </div>
          <span className="text-white/30 text-[10px]">Powered by Retell AI</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { from: "agent", msg: "Hello! Thank you for calling Marcoir Enterprises. I'm Aria, how may I help you today?", t: "09:41:02" },
            { from: "caller", msg: "Hi, I'd like to enquire about your digital marketing services.", t: "09:41:08" },
            { from: "agent", msg: "Absolutely! I'd be happy to walk you through our services. Could I take your name and email to book you in with our team?", t: "09:41:10" },
          ].map((msg, i) => (
            <motion.div
              key={i}
              className={`flex ${msg.from === "agent" ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${msg.from === "agent" ? "bg-[#02E5D2]/20 text-[#02E5D2]" : "bg-white/10 text-white/80"}`}>
                <p className="text-[10px] leading-relaxed">{msg.msg}</p>
                <p className={`text-[8px] mt-1 ${msg.from === "agent" ? "text-[#02E5D2]/50" : "text-white/30"}`}>{msg.t}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            className="flex items-center gap-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <div className="flex gap-1">
              {[0, 0.2, 0.4].map((d, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-[#02E5D2]/60 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: d }}
                />
              ))}
            </div>
            <span className="text-white/30 text-[9px]">Aria is responding...</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <motion.section
        className="relative pt-16 pb-20 text-center px-6 md:px-16 max-w-7xl mx-auto w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#02E5D2]/10 rounded-full blur-3xl -z-10" />
        <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">
          What We Do
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-6 leading-tight">
          Five Disciplines.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">One Agency.</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-[#321A12]/70 max-w-2xl mx-auto mb-10">
          Built for brands that refuse to separate strategy from execution. Zero outsourcing. Zero compromises.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href="/contact" className="btn-gradient px-10 py-4 text-lg" data-testid="link-services-hero-cta">
            Book a Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.section>

      <div className="flex flex-col gap-28 py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">

        {/* 01 Video */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="01 — Content"
              title="Video Editing & Content Strategy"
              subtitle="We engineer video content systems that compound over time — organic distribution architectures built for scale."
            />
            <ul className="space-y-4 mb-10">
              {[
                "Thought-leader video architecture for LinkedIn, YouTube & short-form",
                "High-retention editorial structures engineered for watch time",
                "Short-form repurposing workflows (Reels, TikTok, YouTube Shorts)",
                "Motion graphics, captions, and platform-optimised formats",
                "Organic distribution strategy — no paid spend required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#321A12]/80">
                  <CheckCircle2 className="w-5 h-5 text-[#02E5D2] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-gradient px-8 py-3.5" data-testid="link-services-video-cta">
              Discuss your content strategy <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <VideoMockup />
          </motion.div>
        </motion.section>

        {/* 02 Digital Marketing */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <AnalyticsMockup />
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <SectionHeader
              label="02 — Digital Marketing"
              title="SEO & Paid Media"
              subtitle="Full-spectrum growth — organic search authority and inorganic paid acquisition run as one coordinated engine."
            />
            <ul className="space-y-4 mb-10">
              {[
                "Technical SEO audits and ongoing search visibility architecture",
                "Google Search, Shopping & Display campaign management",
                "Meta (Facebook & Instagram) full-funnel paid campaigns",
                "TikTok Ads creative strategy and performance management",
                "Conversion rate optimisation and landing page testing",
                "Monthly attribution reporting and ROAS analysis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#321A12]/80">
                  <CheckCircle2 className="w-5 h-5 text-[#FE5C57] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-gradient px-8 py-3.5" data-testid="link-services-marketing-cta">
              Launch your campaigns <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.section>

        {/* 03 Web Dev */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="03 — Development"
              title="No-Code & AI-Powered Web Development"
              subtitle="Performant web products built without traditional development overhead — faster, smarter, fraction of the cost."
            />
            <ul className="space-y-4 mb-10">
              {[
                "High-converting websites with Framer and Webflow quality",
                "Advanced SaaS platforms with Bubble and Xano architectures",
                "Custom web application logic and database design",
                "API integrations connecting your entire stack end-to-end",
                "CRO-focused design across all builds",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#321A12]/80">
                  <CheckCircle2 className="w-5 h-5 text-[#02E5D2] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-gradient px-8 py-3.5" data-testid="link-services-web-cta">
              Start your web project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="relative py-10 px-6 overflow-hidden">
            <WebMockup />
          </motion.div>
        </motion.section>

        {/* 04 Mobile App */}
        <motion.section
          className="glass-panel rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <SectionHeader
                label="04 — Mobile"
                title="Mobile App Development"
                subtitle="Cross-platform native mobile apps — built with modern tooling for speed without sacrificing capability."
              />
              <ul className="space-y-4 mb-10">
                {[
                  "Cross-platform iOS and Android with FlutterFlow execution",
                  "Rapid prototyping and MVP launches in weeks, not months",
                  "Native device features: camera, GPS, push notifications",
                  "App Store and Google Play submission and optimisation",
                  "Custom UI/UX design with brand-consistent systems",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#321A12]/80">
                    <CheckCircle2 className="w-5 h-5 text-[#02E5D2] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-gradient px-8 py-3.5" data-testid="link-services-mobile-cta">
                Discuss your mobile app <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <MobileAppMockup />
            </motion.div>
          </div>
        </motion.section>

        {/* 05 AI Voice Agents */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="05 — AI Automation"
              title="AI Voice Agents & Workflow Automation"
              subtitle="Autonomous conversational AI handling inbound and outbound call operations 24/7 — integrated into your existing systems."
            />
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Clinical Receptionists", desc: "HIPAA-compliant AI for healthcare intake and patient FAQs." },
                { title: "Sales & Booking Agents", desc: "Outbound prospecting and inbound qualification 24/7." },
                { title: "Customer Support", desc: "Tier-1 resolution without human escalation for 65%+ queries." },
                { title: "CRM Sync & Automation", desc: "Direct integration with Make, Zapier, HubSpot, GoHighLevel." },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 rounded-2xl">
                  <h4 className="font-semibold text-[#321A12] text-sm mb-2">{item.title}</h4>
                  <p className="text-xs text-[#321A12]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-gradient px-8 py-3.5" data-testid="link-services-ai-cta">
              Deploy your AI agent <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <AutomationMockup />
          </motion.div>
        </motion.section>

      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            One agency. Five capabilities.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Most agencies pick one lane. Marcoir operates across all five — each discipline amplifying the others.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 transition-all shadow-2xl"
              data-testid="link-services-bottom-cta"
            >
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
