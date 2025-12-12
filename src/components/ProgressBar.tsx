import { motion } from "framer-motion";

interface ProgressBarProps {
  totalQuestions: number;
  currentQuestion: number;
}

const ProgressBar = ({ totalQuestions, currentQuestion }: ProgressBarProps) => {
  return (
    <div className="flex gap-2 w-full max-w-md mx-auto mb-8" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin={1} aria-valuemax={totalQuestions}>
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
            index <= currentQuestion
              ? "bg-quiz-progress-active"
              : "bg-quiz-progress-inactive"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
