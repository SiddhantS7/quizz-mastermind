import { motion } from "framer-motion";
import { categories, QuizCategory } from "@/data/questions";
import { playClickSound } from "@/lib/sounds";

interface CategorySelectProps {
  onSelectCategory: (category: QuizCategory) => void;
}

const CategorySelect = ({ onSelectCategory }: CategorySelectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-extrabold text-foreground mb-3"
      >
        Choose a Category
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-lg mb-10"
      >
        Select a topic to test your knowledge
      </motion.p>

      {/* Category Cards */}
      <div className="grid gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            onClick={() => {
              playClickSound();
              onSelectCategory(category);
            }}
            className="w-full py-5 px-6 rounded-xl quiz-option-gradient text-primary-foreground flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Start ${category.name} quiz`}
          >
            <span className="text-4xl">{category.icon}</span>
            <div className="text-left">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-sm opacity-90">
                {category.questions.length} questions
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default CategorySelect;
