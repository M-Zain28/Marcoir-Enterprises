import { motion } from "framer-motion";
import { Link } from "wouter";
import ROICalculator from "@/components/ROICalculator";
import ClientLogosStrip from "@/components/ClientLogosStrip";
import Testimonials from "@/components/Testimonials";
import TypewriterCycler from "@/components/TypewriterCycler";
import CountUpStat from "@/components/CountUpStat";
import { Globe, Cpu, BarChart2, ArrowRight, Video, TrendingUp, Bot, Monitor, Search, Zap, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { value: "4.2M+", label: "Organic reach generated" },
  { value: "340%", label: "Avg. enquiry increase for clients" },
  { value: "68%", label: "Reduction in manual overhead via AI" },
  { value: "5+", label: "International markets served" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center overflow-hidden px-6 pb-20 pt-10">
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-[#02E5D2]/15 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-[#FE5C57]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <motion.div
          className="max-w-5xl z-10 w-full"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* location pill */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-10 text-xs font-bold tracking-widest uppercase text-[#321A12]/50"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] inline-block shrink-0" />
            Lahore · London · Dubai · New York · Sydney
          </motion.div>

          {/* headline line 1 — static */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-[#321A12] leading-[1.0] tracking-tight mb-2"
          >
            Complexity
          </motion.h1>

          {/* headline line 2 — typewriter cycling */}
          <motion.div variants={fadeUp} className="mb-10 min-h-[1.1em]">
            <TypewriterCycler
              phrases={[
                "Mastered at Scale.",
                "Redefined by AI.",
                "Built for Global Brands.",
                "Driven by Data.",
                "Delivered with Precision.",
              ]}
              typingSpeed={55}
              deletingSpeed={30}
              pauseMs={2400}
              className="text-6xl sm:text-7xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] leading-[1.1] tracking-tight"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-[#321A12]/65 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            The practitioner-led digital agency uniting elite video strategy,{" "}
            <span className="text-[#321A12]/90 font-medium">digital marketing</span>,
            no-code development, and AI voice automation for global brands.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-gradient px-10 py-4 text-lg"
              data-testid="link-hero-cta"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#321A12]/20 text-[#321A12] px-10 py-4 rounded-full text-lg font-medium hover:border-[#321A12]/50 transition-all"
              data-testid="link-hero-services"
            >
              Our Capabilities <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Client Logos ─────────────────────────────────────── */}
      <ClientLogosStrip />

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <CountUpStat key={s.value} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* ── USP ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-3 block">
            Why Marcoir
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-4">
            Built Different
          </motion.h2>
          <motion.div variants={fadeUp} className="w-24 h-1 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            {
              icon: <Cpu className="w-8 h-8 text-[#FE5C57]" />,
              title: "Practitioner-Led Execution",
              body: "No outsourcing bottlenecks. Direct access to experts building your solutions with precision and accountability on every engagement.",
            },
            {
              icon: <Globe className="w-8 h-8 text-[#02E5D2]" />,
              title: "Global Footprint",
              body: "Headquartered in Lahore, seamlessly serving enterprise clients across the UK, USA, UAE, and Australia with cultural and market fluency.",
            },
            {
              icon: <BarChart2 className="w-8 h-8 text-[#321A12]" />,
              title: "Full-Stack Convergence",
              body: "Video, digital marketing, web apps, and AI automation integrated under one roof — each discipline amplifying the others.",
            },
          ].map((card) => (
            <motion.div key={card.title} variants={fadeUp} className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#321A12]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#321A12] mb-4">{card.title}</h3>
              <p className="text-[#321A12]/70 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Dark Statement ───────────────────────────────────── */}
      <div className="w-full bg-[#321A12] py-24 px-6 md:px-16">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-4 block">The Marcoir Thesis</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
              Story meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">Systems.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              Most agencies pick one lane. We operate across five — because the brands growing fastest are those where world-class content, sharp paid strategy, and AI-powered automation work as one unified engine.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {[
              { label: "Video & Content", sub: "Organic distribution engines" },
              { label: "Digital Marketing", sub: "SEO · Google · Meta · TikTok" },
              { label: "Web & SaaS", sub: "No-code development" },
              { label: "AI Automation", sub: "Voice agents & workflows" },
              { label: "Mobile Apps", sub: "Cross-platform native" },
              { label: "CRM Integration", sub: "End-to-end data sync" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                <div className="text-white/40 text-xs">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Services Overview ────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-3 block">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-4">Five Capabilities</h2>
            <p className="text-lg text-[#321A12]/70">We build the infrastructure that drives modern digital businesses forward.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link href="/services" className="btn-gradient px-7 py-3 text-sm" data-testid="link-services-overview">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            {
              icon: <Video className="w-7 h-7 text-[#321A12]" />,
              iconBg: "bg-[#321A12]/8",
              title: "Video Strategy & Content",
              desc: "Organic distribution engines and thought-leader video architectures engineered for massive B2B and B2C reach.",
              tags: [{ label: "Strategy", cls: "bg-[#321A12]/5 text-[#321A12]" }, { label: "Editing", cls: "bg-[#321A12]/5 text-[#321A12]" }],
            },
            {
              icon: <TrendingUp className="w-7 h-7 text-[#02E5D2]" />,
              iconBg: "bg-[#02E5D2]/10",
              title: "Digital Marketing",
              desc: "Organic growth through technical SEO and inorganic performance via Google, Meta, and TikTok paid campaigns — managed end-to-end.",
              tags: [{ label: "SEO", cls: "bg-[#02E5D2]/15 text-[#02E5D2]" }, { label: "Google Ads", cls: "bg-[#02E5D2]/15 text-[#02E5D2]" }, { label: "TikTok Ads", cls: "bg-[#02E5D2]/15 text-[#02E5D2]" }],
            },
            {
              icon: <Bot className="w-7 h-7 text-[#FE5C57]" />,
              iconBg: "bg-[#FE5C57]/10",
              title: "AI Voice Automation",
              desc: "Low-latency conversational AI agents tied to Make/Zapier and your CRM for 24/7 inbound and outbound workflows.",
              tags: [{ label: "Voice AI", cls: "bg-[#FE5C57]/10 text-[#FE5C57]" }, { label: "Automations", cls: "bg-[#FE5C57]/10 text-[#FE5C57]" }],
            },
            {
              icon: <Monitor className="w-7 h-7 text-[#321A12]" />,
              iconBg: "bg-[#321A12]/8",
              title: "No-Code & Web Development",
              desc: "From high-converting marketing sites to advanced SaaS platforms and cross-platform mobile apps — built fast, built to scale.",
              tags: [{ label: "Web Apps", cls: "bg-[#321A12]/5 text-[#321A12]" }, { label: "SaaS", cls: "bg-[#321A12]/5 text-[#321A12]" }, { label: "Mobile", cls: "bg-[#321A12]/5 text-[#321A12]" }],
            },
          ].map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="glass-panel p-10 rounded-3xl hover:scale-[1.01] transition-transform duration-300">
              <div className={`w-14 h-14 ${s.iconBg} rounded-2xl flex items-center justify-center mb-6`}>{s.icon}</div>
              <h3 className="text-2xl font-bold text-[#321A12] mb-3">{s.title}</h3>
              <p className="text-[#321A12]/70 mb-6 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Our Process ──────────────────────────────────────── */}
      <div className="w-full bg-[#321A12] py-24 px-6 md:px-16">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-3 block">How We Work</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Our Process
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              From first call to delivered results — a clear, proven four-step framework that every Marcoir engagement follows.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#FE5C57]/40 via-[#02E5D2]/40 to-[#FE5C57]/40" />
            {[
              {
                step: "01",
                icon: <Search className="w-6 h-6 text-[#FE5C57]" />,
                iconBg: "bg-[#FE5C57]/15",
                title: "Discovery Call",
                desc: "We learn your business, goals, and current landscape in a focused 30-minute strategy session — no generic forms.",
                clr: "from-[#FE5C57]/20 to-transparent",
              },
              {
                step: "02",
                icon: <MapPin className="w-6 h-6 text-[#02E5D2]" />,
                iconBg: "bg-[#02E5D2]/15",
                title: "Strategy Blueprint",
                desc: "We deliver a custom roadmap: which channels, which content, which systems — and why. Before a single penny is spent.",
                clr: "from-[#02E5D2]/20 to-transparent",
              },
              {
                step: "03",
                icon: <Zap className="w-6 h-6 text-[#FE5C57]" />,
                iconBg: "bg-[#FE5C57]/15",
                title: "Execution Sprint",
                desc: "Our team launches across your agreed disciplines in parallel. Fast, precise, with zero handoff delays or outsourcing.",
                clr: "from-[#FE5C57]/20 to-transparent",
              },
              {
                step: "04",
                icon: <BarChart2 className="w-6 h-6 text-[#02E5D2]" />,
                iconBg: "bg-[#02E5D2]/15",
                title: "Measure & Scale",
                desc: "Monthly reporting, live dashboards, and continuous optimisation. What works gets doubled. What doesn't gets cut.",
                clr: "from-[#02E5D2]/20 to-transparent",
              },
            ].map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className={`relative bg-gradient-to-b ${step.clr} border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 group`}
              >
                <div className="absolute -top-4 left-8 bg-[#321A12] border border-white/20 rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-white/40 font-mono">{step.step}</span>
                </div>
                <div className={`w-12 h-12 ${step.iconBg} rounded-2xl flex items-center justify-center mb-5 mt-2`}>{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#02E5D2] transition-colors">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="text-center mt-14">
            <Link href="/contact" className="btn-gradient px-10 py-4 text-lg" data-testid="link-process-cta">
              Start with a Discovery Call <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── ROI Calculator ───────────────────────────────────── */}
      <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <ROICalculator />
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── Bottom CTA band ──────────────────────────────────── */}
      <div className="w-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to transform?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-xl mb-10">
            Tell us what you're building. We'll show you how to get there faster.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-12 py-5 rounded-full text-xl font-semibold transition-all shadow-2xl hover:-translate-y-1"
              data-testid="link-bottom-cta"
            >
              Start the Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
