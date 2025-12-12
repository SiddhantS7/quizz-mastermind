import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface ResultProps {
  score: number;
  onRestart: () => void;
}

const Result = ({ score, onRestart }: ResultProps) => {
  useEffect(() => {
    if (score > 70) {
      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ["#4A6FA5", "#166088", "#78B7D0"],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ["#4A6FA5", "#166088", "#78B7D0"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [score]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-lg mx-auto text-center"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl font-bold text-foreground mb-8"
      >
        Your Final score is
      </motion.h1>

      {/* Score Display */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="mb-8"
      >
        <span className="text-8xl md:text-9xl font-extrabold text-quiz-score">
          {score}
        </span>
      </motion.div>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-muted-foreground mb-10"
      >
        Keep Learning!
      </motion.p>

      {/* Restart Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={onRestart}
        className="px-10 py-4 rounded-full quiz-option-gradient text-primary-foreground font-bold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Start the quiz again"
      >
        Start Again
      </motion.button>
    </motion.div>
  );
};

export default Result;
