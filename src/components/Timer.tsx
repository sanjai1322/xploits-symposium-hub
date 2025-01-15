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
    <div className="flex justify-center space-x-4 md:space-x-8 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-lg flex items-center justify-center mb-2 animate-glow">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm text-gray-400 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Timer;