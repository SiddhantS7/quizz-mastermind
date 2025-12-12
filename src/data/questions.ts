export interface Question {
  question: string;
  options: string[];
  answer: number;
}

export interface QuizCategory {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

export const categories: QuizCategory[] = [
  {
    id: "animals",
    name: "Animals",
    icon: "🐾",
    questions: [
      {
        question: "What sound does a cat make?",
        options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
        answer: 1,
      },
      {
        question: "What is the largest land animal?",
        options: ["Giraffe", "Elephant", "Hippopotamus"],
        answer: 1,
      },
      {
        question: "How many legs does a spider have?",
        options: ["Six", "Eight", "Ten"],
        answer: 1,
      },
      {
        question: "Which animal is known as man's best friend?",
        options: ["Cat", "Dog", "Hamster"],
        answer: 1,
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    questions: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter"],
        answer: 1,
      },
      {
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Sugar"],
        answer: 1,
      },
      {
        question: "How many bones are in the human body?",
        options: ["106", "206", "306"],
        answer: 1,
      },
      {
        question: "What gas do plants absorb from the air?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        answer: 1,
      },
    ],
  },
  {
    id: "geography",
    name: "Geography",
    icon: "🌍",
    questions: [
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Pacific", "Indian"],
        answer: 1,
      },
      {
        question: "Which country has the most pyramids?",
        options: ["Egypt", "Sudan", "Mexico"],
        answer: 1,
      },
      {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing"],
        answer: 1,
      },
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi"],
        answer: 1,
      },
    ],
  },
];
