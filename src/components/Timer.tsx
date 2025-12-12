import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  duration: number;
  onTimeUp: () => void;
  questionKey: number;
}

const Timer = ({ duration, onTimeUp, questionKey }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [questionKey, duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const percentage = (timeLeft / duration) * 100;
  const isLow = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="relative flex items-center justify-center"
    >
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="hsl(var(--quiz-progress-inactive))"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={
            isCritical
              ? "hsl(var(--destructive))"
              : isLow
              ? "hsl(38, 92%, 50%)"
              : "hsl(var(--quiz-progress-active))"
          }
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <motion.span
        className={`absolute text-2xl font-bold ${
          isCritical
            ? "text-destructive"
            : isLow
            ? "text-orange-500"
            : "text-foreground"
        }`}
        animate={isCritical ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        {timeLeft}
      </motion.span>
    </motion.div>
  );
};

export default Timer;
