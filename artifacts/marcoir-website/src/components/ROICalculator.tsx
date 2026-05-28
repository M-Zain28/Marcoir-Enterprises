import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

export default function ROICalculator() {
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(35);
  const [weeklySavings, setWeeklySavings] = useState(0);
  const [monthlyHoursReclaimed, setMonthlyHoursReclaimed] = useState(0);

  useEffect(() => {
    // 65% automation efficiency factor
    const factor = 0.65;
    setWeeklySavings(Math.round(hours * rate * factor));
    setMonthlyHoursReclaimed(Math.round(hours * factor * 4.33));
  }, [hours, rate]);

  return (
    <div className="glass-panel p-8 md:p-12 rounded-3xl w-full max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#321A12] mb-4">Automation & AI ROI Calculator</h2>
        <p className="text-[#321A12]/70 max-w-2xl mx-auto">
          Calculate the potential impact of Marcoir's AI Voice Agents and workflow automations on your bottom line. We target a 65% automation efficiency factor for manual administrative tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-medium text-[#321A12]">Manual Hours on Calls & Admin Per Week</label>
              <span className="font-bold text-xl text-[#FE5C57]">{hours}h</span>
            </div>
            <Slider
              value={[hours]}
              min={10}
              max={100}
              step={1}
              onValueChange={(val) => setHours(val[0])}
              data-testid="slider-roi-hours"
              className="py-4"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-medium text-[#321A12]">Average Staff Hourly Rate (USD)</label>
              <span className="font-bold text-xl text-[#FE5C57]">${rate}</span>
            </div>
            <Slider
              value={[rate]}
              min={15}
              max={100}
              step={1}
              onValueChange={(val) => setRate(val[0])}
              data-testid="slider-roi-rate"
              className="py-4"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <div className="bg-[#02E5D2]/10 border border-[#02E5D2]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105">
            <p className="text-sm font-semibold text-[#02E5D2] uppercase tracking-wider mb-1">Estimated Weekly Savings</p>
            <p className="text-4xl font-bold text-[#321A12]" data-testid="text-roi-savings">
              ${weeklySavings.toLocaleString()}
            </p>
            <p className="text-xs text-[#321A12]/60 mt-2">Direct cost reduction per week</p>
          </div>
          
          <div className="bg-[#02E5D2]/10 border border-[#02E5D2]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform transition-transform hover:scale-105">
            <p className="text-sm font-semibold text-[#02E5D2] uppercase tracking-wider mb-1">Monthly Hours Reclaimed</p>
            <p className="text-4xl font-bold text-[#321A12]" data-testid="text-roi-hours">
              {monthlyHoursReclaimed} hrs
            </p>
            <p className="text-xs text-[#321A12]/60 mt-2">Time freed up for high-value work</p>
          </div>
        </div>
      </div>
    </div>
  );
}
