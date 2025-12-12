import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Question } from "@/data/questions";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import NavigationButtons from "@/components/NavigationButtons";
import Timer from "@/components/Timer";
import { playCorrectSound, playWrongSound, playClickSound } from "@/lib/sounds";

interface QuizProps {
  questions: Question[];
  categoryName: string;
  onComplete: (score: number) => void;
}

const QUESTION_TIME_LIMIT = 30;

const Quiz = ({ questions, categoryName, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  // Initialize answers when questions change
  useEffect(() => {
    if (questions && questions.length > 0) {
      setAnswers(new Array(questions.length).fill(null));
      setCurrentQuestion(0);
    }
  }, [questions]);

  // Guard against undefined or empty questions
  if (!questions || questions.length === 0) {
    return null;
  }

  const handleSelectAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
    
    // Play sound based on answer correctness
    if (index === questions[currentQuestion].answer) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Calculate score
      const correctAnswers = answers.reduce((acc, answer, index) => {
        return answer === questions[index].answer ? acc + 1 : acc;
      }, 0);
      const score = Math.round((correctAnswers / questions.length) * 100);
      onComplete(score);
    }
  }, [currentQuestion, questions, answers, onComplete]);

  const handleTimeUp = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;
  const canProceed = answers[currentQuestion] !== null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-lg mx-auto"
    >
      {/* Header with Timer */}
      <div className="flex items-start justify-between mb-6">
        <div className="text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-extrabold text-foreground mb-1"
          >
            {categoryName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Question {currentQuestion + 1} of {questions.length}
          </motion.p>
        </div>
        <Timer
          duration={QUESTION_TIME_LIMIT}
          onTimeUp={handleTimeUp}
          questionKey={currentQuestion}
        />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        totalQuestions={questions.length}
        currentQuestion={currentQuestion}
      />

      {/* Question Card with Animation */}
      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion}
          question={questions[currentQuestion]}
          selectedAnswer={answers[currentQuestion]}
          onSelectAnswer={handleSelectAnswer}
        />
      </AnimatePresence>

      {/* Navigation */}
      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        isFirst={isFirst}
        isLast={isLast}
        canProceed={canProceed}
      />
    </motion.div>
  );
};

export default Quiz;
