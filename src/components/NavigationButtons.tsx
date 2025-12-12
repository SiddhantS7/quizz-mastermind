import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { playClickSound } from "@/lib/sounds";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  canProceed: boolean;
}

const NavigationButtons = ({
  onPrevious,
  onNext,
  isFirst,
  isLast,
  canProceed,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <motion.button
        onClick={() => {
          if (!isFirst) playClickSound();
          onPrevious();
        }}
        disabled={isFirst}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
          isFirst
            ? "bg-muted text-muted-foreground cursor-not-allowed"
            : "bg-quiz-nav text-primary-foreground hover:opacity-90"
        }`}
        whileHover={!isFirst ? { scale: 1.05 } : {}}
        whileTap={!isFirst ? { scale: 0.95 } : {}}
        aria-label="Previous question"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {isLast ? (
        <motion.button
          onClick={() => {
            if (canProceed) playClickSound();
            onNext();
          }}
          disabled={!canProceed}
          className={`px-8 h-14 rounded-full font-bold text-lg transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
            canProceed
              ? "bg-quiz-nav text-primary-foreground hover:opacity-90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          whileHover={canProceed ? { scale: 1.05 } : {}}
          whileTap={canProceed ? { scale: 0.95 } : {}}
          aria-label="Submit quiz"
        >
          Submit
        </motion.button>
      ) : (
        <motion.button
          onClick={() => {
            if (canProceed) playClickSound();
            onNext();
          }}
          disabled={!canProceed}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
            canProceed
              ? "bg-quiz-nav text-primary-foreground hover:opacity-90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          whileHover={canProceed ? { scale: 1.05 } : {}}
          whileTap={canProceed ? { scale: 0.95 } : {}}
          aria-label="Next question"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;
