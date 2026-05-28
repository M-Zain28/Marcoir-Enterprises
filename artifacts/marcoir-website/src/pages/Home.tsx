import { motion } from "framer-motion";
import { Link } from "wouter";
import ROICalculator from "@/components/ROICalculator";
import MarqueeTicker from "@/components/MarqueeTicker";
import { Globe, Cpu, Video, TrendingUp, BarChart2, Bot, Code2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: <Video className="w-6 h-6 text-[#FE5C57]" />,
    title: "Video Strategy & Content",
    desc: "Organic distribution engines and thought-leader video architectures engineered for massive B2B and B2C reach.",
    tags: [{ label: "Strategy", color: "bg-[#321A12]/5 text-[#321A12]" }, { label: "Editing", color: "bg-[#321A12]/5 text-[#321A12]" }],
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#02E5D2]" />,
    title: "Digital Marketing",
    desc: "Organic growth through technical SEO and inorganic performance via Google, Meta, and TikTok paid campaigns — managed end-to-end.",
    tags: [{ label: "SEO", color: "bg-[#02E5D2]/15 text-[#02E5D2]" }, { label: "Paid Ads", color: "bg-[#02E5D2]/15 text-[#02E5D2]" }],
  },
  {
    icon: <Bot className="w-6 h-6 text-[#FE5C57]" />,
    title: "AI Voice Automation",
    desc: "Low-latency conversational AI agents tied to Make/Zapier and your CRM for 24/7 inbound and outbound workflows.",
    tags: [{ label: "Voice AI", color: "bg-[#FE5C57]/10 text-[#FE5C57]" }, { label: "Automations", color: "bg-[#FE5C57]/10 text-[#FE5C57]" }],
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#321A12]" />,
    title: "No-Code & Web Development",
    desc: "From high-converting marketing sites to advanced SaaS platforms and cross-platform mobile apps — built fast, built to scale.",
    tags: [{ label: "Web Apps", color: "bg-[#321A12]/5 text-[#321A12]" }, { label: "SaaS", color: "bg-[#321A12]/5 text-[#321A12]" }, { label: "Mobile", color: "bg-[#321A12]/5 text-[#321A12]" }],
  },
];

const stats = [
  { number: "4.2M+", label: "Organic reach generated" },
  { number: "340%", label: "Avg. enquiry increase for clients" },
  { number: "68%", label: "Reduction in manual overhead via AI" },
  { number: "5", label: "International markets served" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden pt-20 pb-32 px-4 md:px-8">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#02E5D2]/15 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FE5C57]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-white/60 rounded-full blur-3xl -z-10" />

        <motion.div
          className="max-w-5xl z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest uppercase text-[#321A12]/60">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] inline-block" />
            Lahore · London · Dubai · New York · Sydney
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-serif font-bold text-[#321A12] leading-[1.0] mb-8 tracking-tight"
            variants={fadeUp}
          >
            Complexity<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
              Mastered at Scale.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#321A12]/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            variants={fadeUp}
          >
            The practitioner-led digital agency uniting elite video strategy, digital marketing, no-code development, and AI voice automation for global brands.
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

      {/* Marquee Ticker */}
      <div className="-mx-4 md:-mx-8">
        <MarqueeTicker />
      </div>

      {/* Stats Strip */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stats.map((s) => (
            <motion.div key={s.number} variants={fadeUp} className="glass-card p-8 rounded-3xl text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] mb-2">{s.number}</div>
              <div className="text-sm text-[#321A12]/60 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* USP Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
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
            { icon: <Cpu className="w-8 h-8 text-[#FE5C57]" />, title: "Practitioner-Led Execution", body: "No outsourcing bottlenecks. Direct access to experts building your solutions with precision and accountability on every engagement." },
            { icon: <Globe className="w-8 h-8 text-[#02E5D2]" />, title: "Global Footprint", body: "Headquartered in Lahore, seamlessly serving enterprise clients across the UK, USA, UAE, and Australia with cultural and market fluency." },
            { icon: <BarChart2 className="w-8 h-8 text-[#321A12]" />, title: "Full-Stack Convergence", body: "Video, digital marketing, web apps, and AI automation integrated under one roof — each discipline amplifying the others." },
          ].map((card) => (
            <motion.div key={card.title} variants={fadeUp} className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#321A12]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#321A12] mb-4">{card.title}</h3>
              <p className="text-[#321A12]/70 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Dark Statement Section */}
      <div className="-mx-4 md:-mx-8 bg-[#321A12] py-24 px-4 md:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
          </div>
        </motion.div>
      </div>

      {/* Services Overview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
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
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp} className="glass-panel p-10 rounded-3xl hover:scale-[1.01] transition-transform">
              <div className="w-12 h-12 bg-[#321A12]/5 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#321A12] mb-3">{s.title}</h3>
              <p className="text-[#321A12]/70 mb-6 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${t.color}`}>{t.label}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <ROICalculator />
      </section>

      {/* CTA Section */}
      <div className="-mx-4 md:-mx-8 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-4 md:px-8">
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
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-12 py-5 rounded-full text-xl font-semibold transition-all shadow-2xl hover:-translate-y-1 hover:shadow-white/30"
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
