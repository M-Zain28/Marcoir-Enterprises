import { motion } from "framer-motion";

const clients = [
  { name: "TechNex Logics", abbr: "TNL" },
  { name: "Hayes Group", abbr: "HG" },
  { name: "Mallee Auto", abbr: "MA" },
  { name: "Team2Care", abbr: "T2C" },
  { name: "RC Security", abbr: "RCS" },
  { name: "OscarXFrank", abbr: "OXF" },
  { name: "Clapton Fitness", abbr: "CF" },
  { name: "Barlow Estates", abbr: "BE" },
  { name: "NovaSpark AI", abbr: "NSA" },
  { name: "Quilford & Co.", abbr: "QC" },
  { name: "Meridian Health", abbr: "MH" },
  { name: "Apex Digital", abbr: "AD" },
];

function LogoCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex-shrink-0 mx-6 flex items-center gap-3 backdrop-blur-md bg-white/30 border border-white/50 rounded-2xl px-6 py-4 shadow-sm hover:bg-white/50 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#321A12]/10 to-[#321A12]/5 flex items-center justify-center font-bold text-xs text-[#321A12]/60 border border-[#321A12]/10 group-hover:from-[#FE5C57]/10 group-hover:to-[#02E5D2]/10 transition-all duration-300">
        {abbr}
      </div>
      <span className="text-[#321A12]/60 font-semibold text-sm whitespace-nowrap tracking-wide group-hover:text-[#321A12]/90 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}

export default function ClientLogosStrip() {
  const doubled = [...clients, ...clients];

  return (
    <div className="w-full py-14 overflow-hidden">
      <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#321A12]/30 mb-8">
        Trusted by forward-thinking brands
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((client, i) => (
            <LogoCard key={`${client.abbr}-${i}`} name={client.name} abbr={client.abbr} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
