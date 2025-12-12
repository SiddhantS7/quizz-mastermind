# Quiz Application

A beautiful, interactive quiz application built with React, TypeScript, and Tailwind CSS. Test your knowledge with fun questions and smooth animations!

![Quiz App](https://lovable.dev/opengraph-image-p98pqg.png)

## Features

- 🎯 4 engaging quiz questions
- 📊 Visual progress bar tracking
- ✨ Smooth Framer Motion animations
- 🎨 Beautiful gradient UI design
- 📱 Fully responsive layout
- ♿ Accessible with ARIA labels and focus states
- 🏆 Final score calculation and display

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd quiz-app
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── ProgressBar.tsx      # Progress indicator
│   ├── QuestionCard.tsx     # Question display with options
│   └── NavigationButtons.tsx # Previous/Next/Submit buttons
├── data/
│   └── questions.ts         # Quiz questions data
├── pages/
│   ├── Index.tsx            # Main container
│   ├── Quiz.tsx             # Quiz logic and state
│   └── Result.tsx           # Final score display
├── App.tsx                  # Router setup
├── main.tsx                 # Entry point
└── index.css                # Tailwind + custom styles
```

## Tailwind Configuration

Custom colors and utilities are defined in:
- `tailwind.config.ts` - Extended theme with quiz-specific colors
- `src/index.css` - CSS custom properties and utility classes

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with default settings (Vite is auto-detected)

### Manual Build

```bash
npm run build
# Output in dist/ folder
```

## License

MIT License - feel free to use this project for learning or production!

