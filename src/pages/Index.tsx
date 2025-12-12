import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuizCategory } from "@/data/questions";
import CategorySelect from "@/components/CategorySelect";
import Quiz from "./Quiz";
import Result from "./Result";

type Screen = "category" | "quiz" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("category");
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | null>(null);
  const [score, setScore] = useState(0);

  const handleSelectCategory = (category: QuizCategory) => {
    setSelectedCategory(category);
    setScreen("quiz");
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setScreen("result");
  };

  const handleRestart = () => {
    setScore(0);
    setSelectedCategory(null);
    setScreen("category");
  };

  return (
    <main className="min-h-screen quiz-gradient-bg flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-card rounded-2xl quiz-card-shadow p-6 md:p-10"
      >
        <AnimatePresence mode="wait">
          {screen === "category" && (
            <motion.div
              key="category"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <CategorySelect onSelectCategory={handleSelectCategory} />
            </motion.div>
          )}
          {screen === "quiz" && selectedCategory && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <Quiz
                questions={selectedCategory.questions}
                categoryName={selectedCategory.name}
                onComplete={handleQuizComplete}
              />
            </motion.div>
          )}
          {screen === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Result score={score} onRestart={handleRestart} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </main>
  );
};

export default Index;
