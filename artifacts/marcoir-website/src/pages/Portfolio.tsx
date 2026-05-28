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
      "A UK-based education consultancy needed to establish credibility and generate inbound enterprise leads without paid advertising. We designed and executed a 12-week thought-leadership video programme — engineering masterclass-format short-form content architected for massive organic distribution across LinkedIn and YouTube.",
    approach: [
      "90-day content architecture mapping 36 pieces across the full buyer journey",
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
      "A premium international real estate developer operating in Dubai and London required a digital asset campaign that matched the calibre of their physical properties. We produced a high-retention cinematic video series and property showcase assets, engineered to convert high-net-worth individuals at every touchpoint of their research journey.",
    approach: [
      "Cinematic 4K production with drone footage and architectural highlight reels",
      "Property tour sequences optimised for WhatsApp, email, and web embedding",
      "Buyer journey mapping across awareness, consideration, and intent stages",
      "Multi-platform distribution strategy targeting UAE and UK HNW audiences",
    ],
    results: [
      { metric: "340%", label: "Increase in qualified enquiries", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "£2.4M+", label: "Pipeline value attributed", icon: <Users className="w-4 h-4" /> },
      { metric: "12 assets", label: "Produced and deployed", icon: <Clock className="w-4 h-4" /> },
    ],
    accentColor: "from-[#02E5D2]/20 to-[#321A12]/10",
    tagColor: "bg-[#02E5D2]/20 text-[#02E5D2]",
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
      "A UK-based private medical clinic network was losing significant revenue to missed calls, manual appointment booking, and after-hours enquiry drop-off. We designed and deployed a full-stack solution: an AI voice receptionist handling all inbound calls with clinical-grade empathy, paired with a custom patient web portal for appointment management and intake forms.",
    approach: [
      "Custom AI voice agent built on Retell AI with clinical persona and HIPAA-aware scripting",
      "Integration with the clinic's existing booking system via Zapier automation",
      "Patient web portal development with appointment booking and form submission",
      "Dashboard for clinic managers to review AI call transcripts and handoff notes",
    ],
    results: [
      { metric: "68%", label: "Reduction in call handling overhead", icon: <TrendingUp className="w-4 h-4" /> },
      { metric: "24/7", label: "AI-powered patient intake", icon: <Clock className="w-4 h-4" /> },
      { metric: "94%", label: "Patient satisfaction score", icon: <Users className="w-4 h-4" /> },
    ],
    accentColor: "from-[#321A12]/10 to-[#02E5D2]/10",
    tagColor: "bg-[#321A12]/10 text-[#321A12]",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero */}
      <motion.section
        className="relative pt-16 pb-4"
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
          A selection of engagements where creative excellence and technical precision produced measurable, documented outcomes for our clients.
        </motion.p>
      </motion.section>

      {/* Projects */}
      <div className="flex flex-col gap-20">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="glass-panel rounded-[3rem] p-10 md:p-16 overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2`} />

            <div className="relative z-10">
              {/* Header */}
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

              {/* Tagline */}
              <motion.p variants={fadeUp} className="text-xl text-[#321A12] font-medium mb-6 italic border-l-4 border-[#FE5C57] pl-6">
                "{project.tagline}"
              </motion.p>

              {/* Description */}
              <motion.p variants={fadeUp} className="text-[#321A12]/70 leading-relaxed mb-10 max-w-3xl">
                {project.description}
              </motion.p>

              {/* Grid: Approach + Results */}
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
                          <div className="text-2xl font-bold text-[#321A12]">{r.metric}</div>
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

      {/* Instagram CTA */}
      <motion.section
        className="glass-panel rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FE5C57]/5 via-transparent to-[#02E5D2]/5" />
        <div className="relative z-10">
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-4 block">
            Live Portfolio
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-6">
            See More of Our Work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#321A12]/70 mb-10 max-w-xl mx-auto">
            Follow our Instagram for behind-the-scenes content, recent client campaigns, and the latest from the Marcoir team.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/marcoirenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-xl hover:-translate-y-1"
              data-testid="link-portfolio-instagram"
            >
              View Live Portfolio on Instagram <ExternalLink className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#321A12] text-[#321A12] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#321A12] hover:text-white transition-all"
              data-testid="link-portfolio-contact"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 text-sm text-[#321A12]/50">
            @marcoirenterprises on Instagram
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
