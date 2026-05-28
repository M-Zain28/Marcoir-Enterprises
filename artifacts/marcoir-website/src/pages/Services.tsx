import { motion } from "framer-motion";
import { Link } from "wouter";
import { Video, Code2, Smartphone, Bot, TrendingUp, Search, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react";
import MarqueeTicker from "@/components/MarqueeTicker";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle: string }) {
  return (
    <div className="mb-14">
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-3 block">{label}</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-5 leading-tight">{title}</h2>
      <p className="text-lg text-[#321A12]/70 max-w-2xl">{subtitle}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <motion.section
        className="relative pt-16 pb-20 text-center px-4 md:px-8 max-w-7xl mx-auto w-full"
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

      {/* Marquee */}
      <div className="-mx-4 md:-mx-8">
        <MarqueeTicker />
      </div>

      <div className="flex flex-col gap-32 py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">

        {/* 01 Video Editing & Content Strategy */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="01 — Content"
              title="Video Editing & Content Strategy"
              subtitle="We engineer video content systems that compound over time — not one-off productions, but organic distribution architectures built for scale."
            />
            <ul className="space-y-4 mb-10">
              {[
                "Thought-leader video architecture for LinkedIn, YouTube & short-form platforms",
                "B2B client acquisition pipelines via educational content masterclasses",
                "High-retention editorial structures engineered for watch time",
                "Short-form repurposing workflows (Reels, TikTok, YouTube Shorts)",
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
            <div className="glass-panel p-10 rounded-3xl">
              <div className="w-14 h-14 bg-[#FE5C57]/10 rounded-2xl flex items-center justify-center mb-8">
                <Video className="w-7 h-7 text-[#FE5C57]" />
              </div>
              <h3 className="text-xl font-bold text-[#321A12] mb-4">Our Content Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Positioning Audit", desc: "Analyse your current digital presence and identify the content gap in your market." },
                  { step: "02", title: "Architecture Design", desc: "Build a 90-day content framework mapping topics to buyer journey stages." },
                  { step: "03", title: "Production & Editing", desc: "Studio-grade editing with subtitles, motion graphics, and platform-optimised formats." },
                  { step: "04", title: "Distribution & Analytics", desc: "Systematic publishing cadence with monthly reporting on reach, engagement and leads." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-2xl font-serif font-bold text-[#02E5D2]/40 w-10 shrink-0">{s.step}</span>
                    <div>
                      <p className="font-semibold text-[#321A12] mb-1">{s.title}</p>
                      <p className="text-sm text-[#321A12]/60">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 02 Digital Marketing */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="glass-panel p-10 rounded-3xl">
              <div className="w-14 h-14 bg-[#02E5D2]/10 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="w-7 h-7 text-[#02E5D2]" />
              </div>
              <div className="space-y-5">
                <div className="p-5 bg-white/40 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Search className="w-4 h-4 text-[#02E5D2]" />
                    <h4 className="font-semibold text-[#321A12]">Organic — SEO</h4>
                  </div>
                  <p className="text-sm text-[#321A12]/60">Technical SEO, on-page content strategy, link building, and search visibility architecture for sustained compounding traffic.</p>
                  <div className="flex gap-2 mt-3">
                    {["Technical SEO", "Content SEO", "Link Building"].map((t) => (
                      <span key={t} className="text-xs bg-[#02E5D2]/10 text-[#02E5D2] px-2 py-0.5 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 bg-white/40 rounded-2xl border border-white/50">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart2 className="w-4 h-4 text-[#FE5C57]" />
                    <h4 className="font-semibold text-[#321A12]">Inorganic — Paid Media</h4>
                  </div>
                  <p className="text-sm text-[#321A12]/60">Full-funnel paid campaigns across Google Search & Display, Meta (Facebook/Instagram), and TikTok Ads — with creative, targeting, and conversion optimisation managed end-to-end.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Google Ads", "Meta Ads", "TikTok Ads", "Retargeting"].map((t) => (
                      <span key={t} className="text-xs bg-[#FE5C57]/10 text-[#FE5C57] px-2 py-0.5 rounded-full font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 bg-white/40 rounded-2xl border border-white/50">
                  <h4 className="font-semibold text-[#321A12] mb-2">Analytics & Reporting</h4>
                  <p className="text-sm text-[#321A12]/60">GA4 setup, conversion tracking, attribution modelling, and monthly performance dashboards your C-suite can act on.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <SectionHeader
              label="02 — Digital Marketing"
              title="SEO & Paid Media"
              subtitle="We run the full spectrum — organic search authority and inorganic paid acquisition — as one coordinated growth engine rather than two disconnected campaigns."
            />
            <ul className="space-y-4 mb-10">
              {[
                "Technical SEO audits and ongoing optimisation for search authority",
                "Google Search, Shopping & Display campaign management",
                "Meta (Facebook & Instagram) full-funnel paid campaigns",
                "TikTok Ads creative strategy and performance management",
                "Conversion rate optimisation and landing page testing",
                "Monthly attribution reporting and ROI analysis",
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

        {/* 03 No-Code & AI-Powered Web Dev */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="03 — Development"
              title="No-Code & AI-Powered Web Development"
              subtitle="We build performant web products without the overhead of traditional development cycles — faster, smarter, and at a fraction of the cost."
            />
            <ul className="space-y-4 mb-10">
              {[
                "High-converting websites with Framer and Webflow execution quality",
                "Advanced SaaS platforms with Bubble and Xano architectures",
                "Custom web application logic and database design",
                "API integrations connecting your stack end-to-end",
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
          <motion.div variants={fadeUp}>
            <div className="glass-panel p-10 rounded-3xl">
              <div className="w-14 h-14 bg-[#02E5D2]/10 rounded-2xl flex items-center justify-center mb-8">
                <Code2 className="w-7 h-7 text-[#02E5D2]" />
              </div>
              <div className="space-y-5">
                {[
                  { name: "Marketing & Landing Pages", tools: ["Framer", "Webflow"], desc: "High-converting, pixel-perfect sites that load fast and rank higher." },
                  { name: "SaaS & Web Applications", tools: ["Bubble", "Xano", "Custom"], desc: "Complex multi-role platforms, membership portals, and data-driven dashboards." },
                  { name: "Internal Business Tools", tools: ["No-Code", "API-first"], desc: "Client portals, CRM extensions, and operational dashboards custom to your workflow." },
                ].map((item) => (
                  <div key={item.name} className="p-5 bg-white/40 rounded-2xl border border-white/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#321A12]">{item.name}</h4>
                      <div className="flex gap-2">
                        {item.tools.map((t) => (
                          <span key={t} className="text-xs bg-[#321A12]/5 text-[#321A12] px-2 py-0.5 rounded-full font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#321A12]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 04 Mobile App Development */}
        <motion.section
          className="glass-panel rounded-[3rem] p-12 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <SectionHeader
                label="04 — Mobile"
                title="Mobile App Development"
                subtitle="Cross-platform native mobile apps that deliver real performance — built with modern no-code tooling for speed without sacrificing capability."
              />
              <ul className="space-y-4 mb-10">
                {[
                  "Cross-platform iOS and Android with FlutterFlow execution",
                  "Rapid prototyping and MVP launches in weeks, not months",
                  "Native device features: camera, GPS, push notifications",
                  "App Store and Google Play submission support",
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
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-[#321A12] rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-[#02E5D2]/10 to-[#FE5C57]/10 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 border border-white/10">
                    <Smartphone className="w-16 h-16 text-white/30" />
                    <div className="text-center px-6">
                      <p className="text-white/80 font-semibold text-sm mb-1">Cross-Platform</p>
                      <p className="text-white/40 text-xs">iOS & Android from a single codebase</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">FlutterFlow</span>
                      <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">Glide</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#02E5D2]/20 rounded-full blur-2xl" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 05 AI Voice Agents */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              label="05 — AI Automation"
              title="AI Voice Agents & Workflow Automation"
              subtitle="Autonomous conversational AI that handles your inbound and outbound call operations 24/7 — integrated directly into your existing systems."
            />
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { title: "Clinical Receptionists", desc: "HIPAA-compliant AI for healthcare intake, appointment booking, and patient FAQs." },
                { title: "Sales & Booking Agents", desc: "Outbound prospecting and inbound qualification running around the clock." },
                { title: "Customer Support", desc: "Tier-1 support resolution without human escalation for 65%+ of queries." },
                { title: "CRM Sync & Automation", desc: "Direct integration with Make, Zapier, and all major CRM platforms." },
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
            <div className="glass-panel p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#02E5D2]/10 rounded-full blur-3xl" />
              <div className="w-14 h-14 bg-[#02E5D2]/10 rounded-2xl flex items-center justify-center mb-8">
                <Bot className="w-7 h-7 text-[#02E5D2]" />
              </div>
              <h3 className="text-xl font-bold text-[#321A12] mb-6">The Automation Stack</h3>
              <div className="space-y-4">
                {[
                  { label: "Conversational AI Layer", value: "Retell AI / Bland AI / VAPI", color: "bg-[#02E5D2]/20 text-[#02E5D2]" },
                  { label: "Workflow Orchestration", value: "Make.com / Zapier / n8n", color: "bg-[#FE5C57]/10 text-[#FE5C57]" },
                  { label: "CRM Integration", value: "HubSpot / GoHighLevel / Custom", color: "bg-[#321A12]/10 text-[#321A12]" },
                  { label: "Latency Target", value: "< 800ms response time", color: "bg-[#02E5D2]/20 text-[#02E5D2]" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3 border-b border-[#321A12]/10 last:border-0">
                    <span className="text-sm text-[#321A12]/60">{row.label}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

      </div>

      {/* Bottom CTA — gradient band */}
      <div className="-mx-4 md:-mx-8 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-4 md:px-8">
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
            Most agencies pick one lane. Marcoir operates across all five — a unified team where each discipline amplifies the others.
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
