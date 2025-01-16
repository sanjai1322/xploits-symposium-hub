import { useEffect, useState } from "react";

const Timer = () => {
  const targetDate = new Date("2025-02-08").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative group">
          <div className="w-24 h-24 bg-black/40 backdrop-blur-lg rounded-xl border border-primary/20 flex flex-col items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-number-spin">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-sm text-gray-400 mt-1 capitalize">{unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timer;