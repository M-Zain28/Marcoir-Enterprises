import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MapPin, Mail, Globe } from "lucide-react";

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(1, "Please enter your company name"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service of interest"),
  budget: z.string().min(1, "Please select a budget bracket"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      service: "",
      budget: "",
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
    reset();
  };

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
          Get in Touch
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] mb-6 leading-tight max-w-3xl">
          Start the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">
            Conversation
          </span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-xl text-[#321A12]/70 max-w-xl">
          Tell us what you're building and we'll come back with a clear plan for how Marcoir can accelerate it.
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {/* Form */}
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
                    {errors.fullName && (
                      <p className="text-xs text-[#FE5C57]" data-testid="error-fullName">{errors.fullName.message}</p>
                    )}
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
                    {errors.companyName && (
                      <p className="text-xs text-[#FE5C57]" data-testid="error-companyName">{errors.companyName.message}</p>
                    )}
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
                  {errors.email && (
                    <p className="text-xs text-[#FE5C57]" data-testid="error-email">{errors.email.message}</p>
                  )}
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
                    <option value="video-strategy">Video Strategy & Content</option>
                    <option value="digital-marketing">Digital Marketing (SEO & Paid Ads)</option>
                    <option value="saas-web">SaaS & Web Apps</option>
                    <option value="ai-voice">AI Voice Agents</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="full-automation">Full Automation Suite</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-[#FE5C57]" data-testid="error-service">{errors.service.message}</p>
                  )}
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
                  {errors.budget && (
                    <p className="text-xs text-[#FE5C57]" data-testid="error-budget">{errors.budget.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient py-4 rounded-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </button>
                <p className="text-center text-xs text-[#321A12]/50">
                  We respond to all enquiries within one business day.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* Sidebar Info */}
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="glass-card p-8 rounded-3xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-xl flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-[#321A12] mb-2">Headquarters</h3>
            <p className="text-[#321A12]/70 text-sm leading-relaxed">
              Lahore, Pakistan<br />
              Serving clients globally across UK, USA, UAE, and Australia.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card p-8 rounded-3xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-xl flex items-center justify-center mb-5">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-[#321A12] mb-2">Social</h3>
            <a
              href="https://www.instagram.com/marcoirenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#02E5D2] hover:underline text-sm font-medium"
              data-testid="link-contact-instagram"
            >
              @marcoirenterprises ↗
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card p-8 rounded-3xl">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FE5C57] to-[#02E5D2] rounded-xl flex items-center justify-center mb-5">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-[#321A12] mb-3">Typical Response Time</h3>
            <p className="text-[#321A12]/70 text-sm leading-relaxed">
              All enquiries receive a detailed response within <strong className="text-[#321A12]">one business day</strong>. Priority handling for time-sensitive projects.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel p-8 rounded-3xl">
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
        </motion.div>
      </div>
    </div>
  );
}
