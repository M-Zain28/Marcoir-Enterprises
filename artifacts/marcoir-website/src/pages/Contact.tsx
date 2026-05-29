import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MapPin, Globe, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Social links ── */
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/marcoirenterprises",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "http://linkedin.com/company/marcoirenterprises",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/marcoirenterprises/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@marcoirenterprises",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@marcoirenterprises",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "https://x.com/MarcoirAgency",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=447353376934",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:marcoirenterprises@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A no-code website typically takes 2–4 weeks. A mobile app or full digital marketing campaign setup runs 4–8 weeks. We share a clear timeline before any engagement begins.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Absolutely. Our primary markets are the UK, USA, UAE, and Australia. We operate fully remotely and are built for international collaboration — async communication, global payment options, and timezone-aware delivery.",
  },
  {
    q: "What is the minimum budget to work with Marcoir?",
    a: "Our engagements typically start from $2,000 for standalone projects. Retainer packages for ongoing digital marketing or content strategy begin at $1,500/month. We match our scope to your goals, not the other way around.",
  },
  {
    q: "Can you handle multiple services at once?",
    a: "Yes — that is exactly our strength. Unlike single-discipline agencies, Marcoir is built to run video strategy, paid ads, web development, and AI automation in parallel. Cross-discipline coordination is baked into how we work.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "Once you submit an enquiry, a senior strategist reviews your context and schedules a 30-minute discovery call. After that, we produce a tailored brief with scope, timeline, and pricing — no pressure, no pitch, just clarity.",
  },
  {
    q: "Do you offer ongoing retainer or maintenance services?",
    a: "Yes. Many clients stay on monthly retainers covering content production, ad management, or technical maintenance. We also offer quarterly strategy reviews and performance reporting as part of retainer packages.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "Every project includes structured revision rounds — typically two rounds for creative deliverables. We use shared project boards so you always have visibility, and we move fast on feedback without sacrificing quality.",
  },
];

/* ── Form schema ── */
const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service of interest"),
  budget: z.string().min(1, "Please select a budget bracket"),
});
type ContactFormData = z.infer<typeof contactSchema>;

/* ── FAQ Item ── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      className="border-b border-[#321A12]/10 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="flex items-center gap-4">
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] text-white text-xs font-bold flex items-center justify-center shrink-0">
            {index + 1}
          </span>
          <span className="font-semibold text-[#321A12] text-base group-hover:text-[#FE5C57] transition-colors">
            {q}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#321A12]/40"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-11 text-[#321A12]/70 leading-relaxed text-sm">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", companyName: "", email: "", service: "", budget: "" },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <div className="w-full bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#02E5D2]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#FE5C57]/8 rounded-full blur-3xl -z-10" />

        <motion.div
          className="relative max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-20 flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.img
            variants={fadeUp}
            src="/marcoir-logo-new.png"
            alt="Marcoir Enterprises"
            className="h-16 md:h-20 w-auto object-contain mb-8"
          />
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.3em] uppercase text-[#FE5C57] mb-4 block">
            Get in Touch
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-5 leading-tight">
            Start the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
              Conversation
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[#321A12]/60 max-w-xl mb-10">
            Tell us what you're building — we'll come back with a clear plan for how Marcoir can accelerate it.
          </motion.p>

          {/* Social icons */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap justify-center">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="w-10 h-10 rounded-full bg-[#321A12]/6 hover:bg-gradient-to-br hover:from-[#FE5C57] hover:to-[#02E5D2] text-[#321A12]/50 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── FORM + SIDEBAR ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">

        {/* Contact form */}
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="glass-panel rounded-[2.5rem] p-8 md:p-12">
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-16 gap-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                data-testid="text-form-success"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#321A12]">Message Received</h2>
                <p className="text-[#321A12]/70 max-w-md">
                  Thank you for reaching out. A senior member of the Marcoir team will review your enquiry and respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 btn-gradient px-6 py-2.5 text-sm"
                  data-testid="button-submit-another"
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7" data-testid="form-contact">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#321A12] mb-1">Send an Enquiry</h2>
                  <p className="text-sm text-[#321A12]/50">We respond within one business day.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-semibold text-[#321A12]">
                      Full Name <span className="text-[#FE5C57]">*</span>
                    </label>
                    <input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Jane Smith"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/60 border border-white/70 text-[#321A12] placeholder-[#321A12]/40 outline-none focus:border-[#02E5D2] focus:ring-2 focus:ring-[#02E5D2]/20 transition-all"
                      data-testid="input-fullName"
                    />
                    {errors.fullName && <p className="text-xs text-[#FE5C57]" data-testid="error-fullName">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-semibold text-[#321A12]">
                      Company Name <span className="text-[#FE5C57]">*</span>
                    </label>
                    <input
                      id="companyName"
                      {...register("companyName")}
                      placeholder="Acme Corporation"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/60 border border-white/70 text-[#321A12] placeholder-[#321A12]/40 outline-none focus:border-[#02E5D2] focus:ring-2 focus:ring-[#02E5D2]/20 transition-all"
                      data-testid="input-companyName"
                    />
                    {errors.companyName && <p className="text-xs text-[#FE5C57]" data-testid="error-companyName">{errors.companyName.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#321A12]">
                    Email Address <span className="text-[#FE5C57]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="jane@acme.com"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/60 border border-white/70 text-[#321A12] placeholder-[#321A12]/40 outline-none focus:border-[#02E5D2] focus:ring-2 focus:ring-[#02E5D2]/20 transition-all"
                    data-testid="input-email"
                  />
                  {errors.email && <p className="text-xs text-[#FE5C57]" data-testid="error-email">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-[#321A12]">
                    Service of Interest <span className="text-[#FE5C57]">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/60 border border-white/70 text-[#321A12] outline-none focus:border-[#02E5D2] focus:ring-2 focus:ring-[#02E5D2]/20 transition-all appearance-none cursor-pointer"
                    data-testid="select-service"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="video-strategy">Video Strategy &amp; Content</option>
                    <option value="digital-marketing">Digital Marketing (SEO &amp; Paid Ads)</option>
                    <option value="saas-web">No-Code Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ai-voice">AI Voice Agents</option>
                    <option value="full-automation">Full Automation Suite</option>
                  </select>
                  {errors.service && <p className="text-xs text-[#FE5C57]" data-testid="error-service">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-semibold text-[#321A12]">
                    Project Budget Bracket <span className="text-[#FE5C57]">*</span>
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/60 border border-white/70 text-[#321A12] outline-none focus:border-[#02E5D2] focus:ring-2 focus:ring-[#02E5D2]/20 transition-all appearance-none cursor-pointer"
                    data-testid="select-budget"
                  >
                    <option value="" disabled>Select a budget range...</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000 – $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-plus">$15,000+</option>
                  </select>
                  {errors.budget && <p className="text-xs text-[#FE5C57]" data-testid="error-budget">{errors.budget.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient py-4 rounded-xl text-lg font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="lg:col-span-2 space-y-5"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="glass-card p-7 rounded-3xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-[#321A12] mb-2">Headquarters</h3>
            <p className="text-[#321A12]/70 text-sm leading-relaxed">
              Lahore, Pakistan<br />
              Serving clients globally across UK, USA, UAE, and Australia.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card p-7 rounded-3xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-[#321A12] mb-2">Typical Response Time</h3>
            <p className="text-[#321A12]/70 text-sm leading-relaxed">
              All enquiries receive a detailed response within <strong className="text-[#321A12]">one business day</strong>. Priority handling for time-sensitive projects.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel p-7 rounded-3xl">
            <h3 className="font-bold text-[#321A12] mb-4">What happens next?</h3>
            <ol className="space-y-4">
              {[
                "We review your enquiry and research your market context",
                "A senior strategist prepares a tailored brief for your call",
                "30-minute strategy session — no sales pitch, just clarity",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#321A12]/70">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card p-7 rounded-3xl">
            <h3 className="font-bold text-[#321A12] mb-4">Find us on</h3>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.name}
                  className="w-9 h-9 rounded-full bg-[#321A12]/8 hover:bg-gradient-to-br hover:from-[#FE5C57] hover:to-[#02E5D2] text-[#321A12]/60 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── FAQ SECTION ── */}
      <div className="w-full bg-gradient-to-b from-white to-[#f8f6f4] py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold tracking-[0.25em] uppercase text-[#FE5C57] mb-4 block text-center">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-3 text-center">
            Frequently Asked
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#321A12]/60 text-center mb-12">
            Everything you need to know before reaching out.
          </motion.p>

          <motion.div variants={fadeUp} className="glass-panel rounded-3xl px-8 py-2">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}
