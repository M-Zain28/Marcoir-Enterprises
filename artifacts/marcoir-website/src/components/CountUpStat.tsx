import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpStatProps {
  value: string;
  label: string;
}

function parseTarget(raw: string): { start: number; end: number; suffix: string; isFloat: boolean } {
  const suffixMatch = raw.match(/[^0-9.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : "";
  const numStr = raw.replace(/[^0-9.]/g, "");
  const end = parseFloat(numStr);
  const isFloat = numStr.includes(".");
  return { start: 0, end, suffix, isFloat };
}

export default function CountUpStat({ value, label }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const { end, suffix, isFloat } = parseTarget(value);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, end]);

  const display = isFloat
    ? count.toFixed(1)
    : Math.round(count).toString();

  return (
    <div ref={ref} className="glass-card p-8 rounded-3xl text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FE5C57] to-[#02E5D2] mb-2 tabular-nums">
        {display}{suffix}
      </div>
      <div className="text-sm text-[#321A12]/60 font-medium">{label}</div>
    </div>
  );
}
