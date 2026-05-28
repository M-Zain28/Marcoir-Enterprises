const items = [
  "Video Strategy",
  "SEO & Organic Growth",
  "Paid Media — Google · Meta · TikTok",
  "No-Code Web & SaaS",
  "Mobile App Development",
  "AI Voice Agents",
  "Workflow Automation",
  "Content Architecture",
  "CRM Integration",
  "Digital Transformation",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#321A12] py-5 overflow-hidden select-none">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: "marquee 30s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FE5C57] inline-block shrink-0" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
