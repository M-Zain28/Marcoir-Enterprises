import { motion } from "framer-motion";
import { Link } from "wouter";
import ROICalculator from "@/components/ROICalculator";
import { Globe, Cpu, Video } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden pt-20">
        {/* Background decorative shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#02E5D2]/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FE5C57]/10 rounded-full blur-3xl -z-10 mix-blend-multiply" />
        
        <motion.div 
          className="max-w-4xl z-10 glass-panel p-12 md:p-20 rounded-[3rem]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold text-[#321A12] leading-tight mb-6"
            variants={itemVariants}
          >
            Complexity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2]">Mastered at Scale.</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-[#321A12]/80 mb-10 max-w-2xl mx-auto font-light"
            variants={itemVariants}
          >
            The practitioner-led digital agency uniting elite video strategy, no-code development, and AI voice automation for global brands.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-[#FE5C57] hover:bg-[#FE5C57]/90 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl hover:shadow-[#FE5C57]/30 hover:-translate-y-1"
              data-testid="link-hero-cta"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* USP Section */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#321A12] mb-4">Why Marcoir?</h2>
          <div className="w-24 h-1 bg-[#02E5D2] mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-[#321A12]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FE5C57]/10 transition-colors">
              <Cpu className="w-8 h-8 text-[#FE5C57]" />
            </div>
            <h3 className="text-xl font-bold text-[#321A12] mb-4">Practitioner-Led Execution</h3>
            <p className="text-[#321A12]/70 leading-relaxed">
              No outsourcing bottlenecks. Direct access to experts building your solutions with precision and accountability.
            </p>
          </div>
          
          <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-[#321A12]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#02E5D2]/10 transition-colors">
              <Globe className="w-8 h-8 text-[#02E5D2]" />
            </div>
            <h3 className="text-xl font-bold text-[#321A12] mb-4">Global Footprint</h3>
            <p className="text-[#321A12]/70 leading-relaxed">
              Headquartered in Lahore, seamlessly serving enterprise clients across the UK, USA, UAE, and Australia.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-[#321A12]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#321A12]/10 transition-colors">
              <Video className="w-8 h-8 text-[#321A12]" />
            </div>
            <h3 className="text-xl font-bold text-[#321A12] mb-4">Full-Stack Convergence</h3>
            <p className="text-[#321A12]/70 leading-relaxed">
              Media architectures, high-performance web apps, and AI voice automation seamlessly integrated under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="glass-panel p-12 md:p-20 rounded-[3rem]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#321A12] mb-6">Capabilities</h2>
            <p className="text-lg text-[#321A12]/70">We build the infrastructure that drives modern digital businesses forward.</p>
          </div>
          <Link href="/services" className="text-[#FE5C57] font-semibold hover:underline flex items-center gap-2 pb-2">
            View all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/40 border border-white/50 p-10 rounded-3xl hover:bg-white/60 transition-colors">
            <h3 className="text-2xl font-bold text-[#321A12] mb-4">Video Strategy & Content</h3>
            <p className="text-[#321A12]/70 mb-6">Organic distribution engines and thought-leader video architectures designed for massive B2B and B2C reach.</p>
            <div className="flex gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-[#321A12]/5 rounded-full text-[#321A12]">Strategy</span>
              <span className="text-xs font-semibold px-3 py-1 bg-[#321A12]/5 rounded-full text-[#321A12]">Editing</span>
            </div>
          </div>
          
          <div className="bg-white/40 border border-white/50 p-10 rounded-3xl hover:bg-white/60 transition-colors">
            <h3 className="text-2xl font-bold text-[#321A12] mb-4">AI Voice Automation</h3>
            <p className="text-[#321A12]/70 mb-6">Low-latency conversational AI agents seamlessly tied to Make/Zapier and your CRM for 24/7 inbound/outbound workflow.</p>
            <div className="flex gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-[#02E5D2]/20 rounded-full text-[#02E5D2]">Voice AI</span>
              <span className="text-xs font-semibold px-3 py-1 bg-[#02E5D2]/20 rounded-full text-[#02E5D2]">Automations</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-white/40 border border-white/50 p-10 rounded-3xl hover:bg-white/60 transition-colors">
            <h3 className="text-2xl font-bold text-[#321A12] mb-4">No-Code & Web Development</h3>
            <p className="text-[#321A12]/70 max-w-3xl mb-6">From high-converting marketing sites to advanced SaaS platforms and mobile apps, built for speed and scalability.</p>
            <div className="flex gap-2">
              <span className="text-xs font-semibold px-3 py-1 bg-[#FE5C57]/10 rounded-full text-[#FE5C57]">Web Apps</span>
              <span className="text-xs font-semibold px-3 py-1 bg-[#FE5C57]/10 rounded-full text-[#FE5C57]">SaaS</span>
              <span className="text-xs font-semibold px-3 py-1 bg-[#FE5C57]/10 rounded-full text-[#FE5C57]">Mobile</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section>
        <ROICalculator />
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#321A12] mb-8">Ready to transform?</h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center bg-[#321A12] hover:bg-[#321A12]/90 text-white px-12 py-5 rounded-full text-xl font-medium transition-all shadow-xl hover:-translate-y-1"
          data-testid="link-bottom-cta"
        >
          Start the Conversation
        </Link>
      </section>
    </div>
  );
}
