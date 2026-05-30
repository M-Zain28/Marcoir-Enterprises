import { motion } from "framer-motion";

const logos = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/client-logos/${i + 1}.png`,
}));

function LogoCard({ src, id }: { src: string; id: number }) {
  return (
    <div className="flex-shrink-0 mx-3 sm:mx-5 md:mx-6 flex items-center justify-center group">
      <img
        src={src}
        alt={`Client logo ${id}`}
        className="w-28 h-14 sm:w-40 sm:h-20 md:w-52 md:h-26 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}

export default function ClientLogosStrip() {
  const doubled = [...logos, ...logos];

  return (
    <div className="w-full py-10 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#321A12]/30 mb-8">
        Trusted by forward-thinking brands
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((logo, i) => (
            <LogoCard key={`${logo.id}-${i}`} src={logo.src} id={logo.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
