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
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-item w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col justify-center items-center group">
          <div className="relative overflow-hidden">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:animate-number-spin">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-400 mt-1 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;