import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Globe2, Zap, Users, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-[#FE5C57]" />,
      title: "Practitioner-Led",
      desc: "No account managers passing briefs to offshore teams. Every engagement is led and executed by senior specialists with deep domain expertise in their respective discipline.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#02E5D2]" />,
      title: "Global Standard",
      desc: "Headquartered in Lahore, we operate to the exacting standards demanded by clients in the UK, USA, UAE, and Australia — with the communication cadence to match.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#321A12]" />,
      title: "Convergence Thinking",
      desc: "We believe the most powerful outcomes emerge at the intersection of disciplines. A video campaign is stronger when it drives into an AI-powered funnel. A SaaS product is faster to market when paid media fuels its launch.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#FE5C57]" />,
      title: "Client Accountability",
      desc: "We operate as an extension of your team, not a vendor. You have direct access to the people doing the work, and we hold ourselves to measurable outcomes.",
    },
  ];

  const markets = [
    { flag: "🇬🇧", name: "United Kingdom", desc: "Enterprise content and AI automation for UK-based brands" },
    { flag: "🇺🇸", name: "United States", desc: "SaaS development and go-to-market content for US startups and corporates" },
    { flag: "🇦🇪", name: "UAE", desc: "Real estate, healthcare, and luxury sector specialisation" },
    { flag: "🇦🇺", name: "Australia", desc: "B2B lead generation and digital transformation consulting" },
    { flag: "🇵🇰", name: "Pakistan", desc: "Domestic enterprise clients and startup ecosystem" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <motion.section
        className="relative pt-16 pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#FE5C57]/5 rounded-full blur-3xl -z-10" />
        <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">
          The Agency
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-8 leading-tight max-w-3xl">
          Built at the Intersection of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
            Story and Systems
          </span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-[#321A12]/70 max-w-2xl leading-relaxed">
          Marcoir Enterprises was founded on a conviction: that the most powerful digital businesses are those that command both the creative and technical dimensions — simultaneously, not sequentially.
        </motion.p>
      </motion.section>

      {/* Mission Statement — dark band */}
      <div className="-mx-4 md:-mx-8 bg-[#321A12] py-24 px-4 md:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-4 block">
            Our Mission
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-snug max-w-3xl">
            To bridge the gap between compelling storytelling and the automation infrastructure that scales it.
          </motion.h2>
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { text: "Most agencies force brands to choose: invest in creative content or invest in technical infrastructure. The result is beautiful work that underperforms, and powerful tech that no one finds." },
              { text: "Marcoir was built to end that compromise. We bring video strategy, digital marketing, web development, and AI automation under a single roof — as an integrated capability set that compounds on itself." },
              { text: "When your video campaign generates leads, your AI voice agent qualifies them overnight. When paid media scales demand, your automation suite eliminates the manual work that follows." },
            ].map((p, i) => (
              <p key={i} className="text-white/60 leading-relaxed">{p.text}</p>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-32 py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Founding Story */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">The Founding</span>
            <h2 className="text-4xl font-serif font-bold text-[#321A12] mb-8 leading-tight">
              Dual Expertise. One Direction.
            </h2>
            <div className="space-y-6 text-[#321A12]/75 leading-relaxed">
              <p>
                Marcoir Enterprises emerged from the convergence of two professional disciplines that rarely exist in the same room: premium international digital marketing and elite video strategy.
              </p>
              <p>
                The founding team brings careers built in international markets — executing video campaigns that drove millions of organic views for thought leaders across B2B sectors, and deploying digital marketing systems for enterprise clients from London to Dubai.
              </p>
              <p>
                What started as individual mastery of separate crafts became a shared thesis: brands that invest in both simultaneously — the story and the system — grow at a fundamentally different rate than those that do not.
              </p>
              <p>
                Marcoir was registered to make that thesis available to ambitious brands worldwide, regardless of where they are headquartered.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-6">
            {[
              { num: "4.2M+", label: "Organic views generated across client campaigns", color: "from-[#FE5C57] to-[#FE5C57]" },
              { num: "5", label: "International markets served: UK, USA, UAE, Australia, Pakistan", color: "from-[#02E5D2] to-[#02E5D2]" },
              { num: "68%", label: "Average reduction in manual call handling overhead via AI deployment", color: "from-[#321A12] to-[#321A12]" },
            ].map((s) => (
              <div key={s.num} className="glass-panel p-8 rounded-3xl">
                <div className={`text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r ${s.color} mb-2`}>{s.num}</div>
                <p className="text-[#321A12]/70 font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#02E5D2] mb-3 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12]">Operating Principles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeUp} className="glass-card p-10 rounded-3xl">
                <div className="w-12 h-12 bg-white/50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#321A12] mb-4">{value.title}</h3>
                <p className="text-[#321A12]/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Markets */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block">Where We Operate</span>
            <h2 className="text-4xl font-serif font-bold text-[#321A12]">Global Reach</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {markets.map((m) => (
              <motion.div key={m.name} variants={fadeUp} className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl mb-3">{m.flag}</div>
                <h3 className="font-bold text-[#321A12] mb-2">{m.name}</h3>
                <p className="text-xs text-[#321A12]/60 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* CTA gradient band */}
      <div className="-mx-4 md:-mx-8 bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] py-24 px-4 md:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to work with us?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 text-lg mb-10">
            Tell us what you're building and we'll tell you how we can accelerate it.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#321A12] px-10 py-4 rounded-full text-lg font-semibold hover:-translate-y-1 transition-all shadow-2xl"
              data-testid="link-about-cta"
            >
              Book a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
