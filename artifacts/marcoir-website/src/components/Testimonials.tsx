import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Hartley",
    role: "CEO, Hartley Capital Group",
    market: "London, UK",
    quote:
      "Marcoir completely transformed our digital presence. Our LinkedIn content went from invisible to 1.2 million organic impressions in three months. The ROI was immediate.",
    initials: "JH",
    color: "bg-[#FE5C57]",
  },
  {
    name: "Fatima Al-Rashidi",
    role: "Founder, Lumina Real Estate",
    market: "Dubai, UAE",
    quote:
      "The cinematic property videos they produced drove a 340% increase in qualified enquiries within the first six weeks. I expected results — I didn't expect them that fast.",
    initials: "FA",
    color: "bg-[#02E5D2]",
  },
  {
    name: "Daniel O'Brien",
    role: "Director, Clarity Health Network",
    market: "Manchester, UK",
    quote:
      "Their AI receptionist handles over 80% of our inbound calls flawlessly. Our front-desk overhead dropped overnight, and patient satisfaction actually went up.",
    initials: "DO",
    color: "bg-[#321A12]",
  },
  {
    name: "Priya Menon",
    role: "Head of Growth, Vaultline SaaS",
    market: "Sydney, AU",
    quote:
      "We needed a full marketing stack built in under 60 days. Marcoir delivered the web platform, SEO architecture, and Google Ads campaigns — all on time, all on brand.",
    initials: "PM",
    color: "bg-[#FE5C57]",
  },
  {
    name: "Marcus Webb",
    role: "CMO, Webb Logistics",
    market: "New York, USA",
    quote:
      "Our TikTok ad spend was bleeding with zero results before Marcoir stepped in. They restructured our creative strategy and brought our ROAS to 6.4x in eight weeks.",
    initials: "MW",
    color: "bg-[#02E5D2]",
  },
  {
    name: "Aisha Tariq",
    role: "Founder, NovaBright Education",
    market: "Lahore, PK",
    quote:
      "Professional, precise, and genuinely invested in outcomes. The content system they built now generates qualified leads on autopilot. I would recommend them without hesitation.",
    initials: "AT",
    color: "bg-[#321A12]",
  },
  {
    name: "Tom Gallagher",
    role: "MD, Gallagher Recruitment",
    market: "Dublin, IE",
    quote:
      "The no-code web platform Marcoir built replaced a system that cost us £40K to develop. It does more, it loads faster, and we own it completely.",
    initials: "TG",
    color: "bg-[#FE5C57]",
  },
  {
    name: "Nadia Khalil",
    role: "Brand Director, Khalil Hospitality",
    market: "Riyadh, SA",
    quote:
      "From strategy session to first deliverable in under two weeks. The team is fast, communicative, and the creative quality is genuinely world-class.",
    initials: "NK",
    color: "bg-[#02E5D2]",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-3xl p-7 mx-3 shadow-sm hover:shadow-md transition-shadow duration-300">
      <Quote className="w-6 h-6 text-[#FE5C57] mb-4 opacity-60" />
      <p className="text-[#321A12]/75 text-sm leading-relaxed mb-6 line-clamp-4">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white text-xs font-bold">{t.initials}</span>
        </div>
        <div>
          <p className="text-[#321A12] font-semibold text-sm">{t.name}</p>
          <p className="text-[#321A12]/50 text-xs">{t.role}</p>
          <p className="text-[#321A12]/35 text-[10px] font-medium">{t.market}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-14 text-center">
        <span className="inline-flex items-center gap-2 border border-[#FE5C57]/30 text-[#FE5C57] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-[#FE5C57] rounded-full" />
          Testimonial
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] leading-tight">
          What our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
            clients
          </span>{" "}
          are saying
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
