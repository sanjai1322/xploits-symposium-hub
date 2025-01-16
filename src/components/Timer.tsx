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
        <div key={unit} className="countdown-item group">
          <div className="relative overflow-hidden">
            <span className="text-3xl font-bold text-white group-hover:animate-number-spin">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm text-gray-400 mt-2 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;