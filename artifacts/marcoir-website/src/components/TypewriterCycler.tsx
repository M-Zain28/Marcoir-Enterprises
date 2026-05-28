import { useState, useEffect, useRef } from "react";

interface TypewriterCyclerProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
}

export default function TypewriterCycler({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseMs = 2200,
  className = "",
}: TypewriterCyclerProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed((d) => d.slice(0, -1));
        }, deletingSpeed);
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, phase, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse ml-0.5 inline-block w-[3px] h-[0.9em] bg-current align-middle relative top-[-1px]" />
    </span>
  );
}
