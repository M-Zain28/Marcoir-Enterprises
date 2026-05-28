import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Project preview images (pure CSS illustrated) ─── */
function VideoProjectPreview() {
  return (
    <div className="relative h-64 bg-[#0d0d1a] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FE5C57]/20 to-transparent" />
      {/* Video player UI */}
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#FE5C57]" />
          <span className="text-white/40 text-[10px] font-mono">Thought-Leadership Campaign</span>
          <span className="ml-auto text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-semibold">● Delivered</span>
        </div>
        <div className="flex-1 bg-black/40 rounded-xl flex items-center justify-center relative border border-white/10">
          <motion.div
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1" />
          </motion.div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="h-1 bg-white/10 rounded-full mb-1">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] rounded-full"
                animate={{ width: ["0%", "68%"] }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-white/30 font-mono">
              <span>02:14</span><span>03:28</span>
            </div>
          </div>
        </div>
        {/* Platform stats bar */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { p: "LinkedIn", v: "2.4M", clr: "text-blue-400" },
            { p: "YouTube", v: "1.1M", clr: "text-red-400" },
            { p: "TikTok", v: "700K", clr: "text-pink-400" },
          ].map((s) => (
            <div key={s.p} className="bg-white/5 rounded-lg px-2 py-1.5 text-center">
              <p className={`text-xs font-bold ${s.clr}`}>{s.v}</p>
              <p className="text-white/30 text-[9px]">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="relative h-64 bg-[#1a0a00] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#02E5D2]/10 to-[#321A12]/60" />
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#02E5D2]" />
          <span className="text-white/40 text-[10px] font-mono">Dubai & London Real Estate</span>
          <span className="ml-auto text-[10px] bg-[#02E5D2]/20 text-[#02E5D2] px-2 py-0.5 rounded-full font-semibold">● Live</span>
        </div>
        {/* Property showcase grid */}
        <div className="grid grid-cols-3 gap-2 flex-1">
          <div className="col-span-2 bg-gradient-to-br from-[#02E5D2]/20 to-[#321A12]/40 rounded-xl flex flex-col items-center justify-center p-3 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.05) 8px, rgba(255,255,255,0.05) 9px)" }} />
            <div className="text-2xl mb-1">🏙️</div>
            <p className="text-white/80 text-[10px] font-bold">Luxury Penthouse</p>
            <p className="text-[#02E5D2] text-[9px]">Dubai Marina</p>
            <div className="mt-2 flex items-center gap-1">
              <span className="text-white text-xs font-bold">£2.4M</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-1 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="text-lg">🏠</div>
                <p className="text-white/50 text-[8px]">London</p>
              </div>
            </div>
            <div className="flex-1 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="text-lg">🌆</div>
                <p className="text-white/50 text-[8px]">UAE</p>
              </div>
            </div>
          </div>
        </div>
        {/* Enquiry spike */}
        <div className="bg-black/30 rounded-xl px-3 py-2 flex items-center justify-between border border-white/5">
          <div>
            <p className="text-white/40 text-[9px]">Qualified Enquiries</p>
            <p className="text-white font-bold text-sm">+340%</p>
          </div>
          <div className="flex items-end gap-0.5 h-8">
            {[2,3,2,4,5,7,8,9,10].map((h, i) => (
              <motion.div
                key={i}
                className="w-2 bg-gradient-to-t from-[#02E5D2] to-[#FE5C57] rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h * 8}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthcarePreview() {
  return (
    <div className="relative h-64 bg-[#f0f9ff] rounded-2xl overflow-hidden border border-[#02E5D2]/20">
      <div className="absolute inset-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#321A12]" />
          <span className="text-[#321A12]/50 text-[10px] font-mono">AI Healthcare Receptionist</span>
          <motion.span
            className="ml-auto text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ● Live 24/7
          </motion.span>
        </div>
        {/* Chat UI */}
        <div className="flex-1 bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col shadow-sm">
          <div className="bg-[#321A12] px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 bg-[#02E5D2] rounded-full flex items-center justify-center text-white text-[9px] font-bold">AI</div>
            <div>
              <p className="text-white text-[10px] font-semibold">Aria — Medical Receptionist</p>
              <div className="flex items-center gap-1">
                <motion.div
                  className="w-1.5 h-1.5 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-white/50 text-[9px]">Online</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-hidden">
            {[
              { from: "ai", text: "Good morning! This is Aria from Harley Street Clinic. How may I assist you?" },
              { from: "patient", text: "I'd like to book an appointment with Dr. Patel." },
              { from: "ai", text: "Of course! Dr. Patel has availability this Thursday at 2 PM or Friday at 10 AM. Which works best?" },
            ].map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: msg.from === "ai" ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={`max-w-[85%] rounded-xl px-2.5 py-1.5 text-[9px] leading-relaxed ${msg.from === "ai" ? "bg-[#02E5D2]/10 text-[#321A12]" : "bg-[#321A12] text-white"}`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { val: "68%", label: "Less overhead" },
            { val: "24/7", label: "AI intake" },
            { val: "94%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl px-2 py-1.5 text-center border border-gray-100 shadow-sm">
              <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">{s.val}</p>
              <p className="text-[#321A12]/50 text-[8px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    id: "01",
    category: "Video Strategy & Content",
    title: "Thought-Leadership Video Campaign",
    client: "B2B Education Consultancy",
    market: "UK & UAE",
    year: "2024",
    tagline: "From zero audience to a B2B client acquisition engine in 90 days.",
    description:
      "A UK-based education consultancy needed to establish credibility and generate inbound enterprise leads without paid advertising. We designed and executed a 12-week thought-leadership video programme — engineering masterclass-format short-form content for massive organic distribution across LinkedIn and YouTube.",
    approach: [
      "90-day content architecture mapping 36 pieces across the buyer journey",
      "On-camera coaching and scriptwriting for the founder's executive positioning",
      "Studio-grade editing with platform-optimised aspect ratios and captions",
      "LinkedIn and YouTube distribution strategy with engagement engineering",
    ],
    results: [
      { metric: "4.2M+", label: "Organic reach", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "47", label: "Qualified B2B leads", icon: <Users className="w-4 h-4" /> },
      { metric: "90 days", label: "Campaign duration", icon: <Clock className="w-4 h-4" /> },
    ],
    accentColor: "from-[#FE5C57]/20 to-[#321A12]/10",
    tagColor: "bg-[#FE5C57]/10 text-[#FE5C57]",
    Preview: VideoProjectPreview,
  },
  {
    id: "02",
    category: "Cinematic Digital Campaign",
    title: "International Real Estate Transformation",
    client: "Luxury Property Developer",
    market: "UAE & UK",
    year: "2024",
    tagline: "Cinematic digital assets that tripled qualified property enquiries.",
    description:
      "A premium international real estate developer operating in Dubai and London required a digital asset campaign that matched the calibre of their properties. We produced a high-retention cinematic video series engineered to convert high-net-worth individuals at every touchpoint of their research journey.",
    approach: [
      "Cinematic 4K production with drone footage and architectural highlight reels",
      "Property tour sequences optimised for WhatsApp, email, and web embedding",
      "Buyer journey mapping across awareness, consideration, and intent stages",
      "Multi-platform distribution targeting UAE and UK HNW audiences",
    ],
    results: [
      { metric: "340%", label: "Increase in qualified enquiries", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "£2.4M+", label: "Pipeline value attributed", icon: <Users className="w-4 h-4" /> },
      { metric: "12 assets", label: "Produced and deployed", icon: <Clock className="w-4 h-4" /> },
    ],
    accentColor: "from-[#02E5D2]/20 to-[#321A12]/10",
    tagColor: "bg-[#02E5D2]/20 text-[#02E5D2]",
    Preview: RealEstatePreview,
  },
  {
    id: "03",
    category: "AI Automation & Web Development",
    title: "Healthcare AI Receptionist & Web Portal",
    client: "Private Medical Clinic Network",
    market: "UK",
    year: "2024",
    tagline: "24/7 AI patient intake with zero-overhead call handling.",
    description:
      "A UK-based private medical clinic network was losing revenue to missed calls and manual booking. We deployed a full-stack solution: an AI voice receptionist handling all inbound calls with clinical-grade empathy, paired with a custom patient web portal for appointment management and intake forms.",
    approach: [
      "Custom AI voice agent built on Retell AI with clinical persona and HIPAA-aware scripting",
      "Integration with the clinic's existing booking system via Zapier automation",
      "Patient web portal with appointment booking and form submission",
      "Dashboard for clinic managers to review AI call transcripts and handoff notes",
    ],
    results: [
      { metric: "68%", label: "Reduction in call handling overhead", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "24/7", label: "AI-powered patient intake", icon: <Clock className="w-4 h-4" /> },
      { metric: "94%", label: "Patient satisfaction score", icon: <Users className="w-4 h-4" /> },
    ],
    accentColor: "from-[#321A12]/10 to-[#02E5D2]/10",
    tagColor: "bg-[#321A12]/10 text-[#321A12]",
    Preview: HealthcarePreview,
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <motion.section
        className="relative pt-16 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-[#02E5D2]/10 rounded-full blur-3xl -z-10" />
        <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">
          Case Studies
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-8 leading-tight max-w-3xl">
          Work That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">Moves Metrics</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-[#321A12]/70 max-w-2xl">
          A selection of engagements where creative excellence and technical precision produced measurable, documented outcomes.
        </motion.p>
      </motion.section>

      {/* Projects */}
      <div className="flex flex-col gap-10 px-6 md:px-16 max-w-7xl mx-auto w-full pb-24">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="glass-panel rounded-[3rem] overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2`} />

            {/* Preview image band */}
            <motion.div variants={fadeUp} className="px-8 pt-8">
              <project.Preview />
            </motion.div>

            <div className="relative z-10 p-8 md:p-14">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-serif font-bold text-[#321A12]/10">{project.id}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.tagColor}`}>
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#321A12] mb-2">{project.title}</h2>
                  <p className="text-[#321A12]/50 text-sm">
                    {project.client} — {project.market} — {project.year}
                  </p>
                </div>
              </div>

              <motion.p variants={fadeUp} className="text-xl text-[#321A12] font-medium mb-6 italic border-l-4 border-[#FE5C57] pl-6">
                "{project.tagline}"
              </motion.p>

              <motion.p variants={fadeUp} className="text-[#321A12]/70 leading-relaxed mb-10 max-w-3xl">
                {project.description}
              </motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div variants={fadeUp}>
                  <h3 className="font-bold text-[#321A12] mb-5 text-sm tracking-wider uppercase">Approach</h3>
                  <ul className="space-y-3">
                    {project.approach.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#321A12]/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#02E5D2] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <h3 className="font-bold text-[#321A12] mb-5 text-sm tracking-wider uppercase">Results</h3>
                  <div className="space-y-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-white/60">
                        <div className="w-10 h-10 bg-[#321A12]/5 rounded-xl flex items-center justify-center text-[#321A12]/60">
                          {r.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">{r.metric}</div>
                          <div className="text-xs text-[#321A12]/60">{r.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
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
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4 block">
            Live Portfolio
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            See More of Our Work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
            Follow us for behind-the-scenes content, recent client campaigns, and the latest from the Marcoir team.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/marcoirenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 transition-all shadow-2xl"
              data-testid="link-portfolio-instagram"
            >
              View on Instagram <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all"
              data-testid="link-portfolio-contact"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
