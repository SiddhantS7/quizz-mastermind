import { motion } from "framer-motion";
import { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
}

const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }: QuestionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {/* Question Box */}
      <div className="bg-quiz-question rounded-2xl p-6 mb-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectAnswer(index)}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
            className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 ${
              selectedAnswer === index
                ? "quiz-option-gradient-hover text-primary-foreground shadow-lg scale-[1.02]"
                : "quiz-option-gradient text-primary-foreground hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label={`Option ${index + 1}: ${option}`}
            aria-pressed={selectedAnswer === index}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
