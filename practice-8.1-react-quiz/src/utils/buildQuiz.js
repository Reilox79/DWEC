import { shuffle } from './shuffle'

export function buildQuiz(allQuestions, numPreguntas) {
  const selected = shuffle(allQuestions).slice(0, numPreguntas) // Shuffle and keep the first ones

  return selected.map((q) => ({
    id: q.id,
    category: q.category,
    difficulty: q.difficulty,
    text: q.text,
    correct: q.correct,
    answers: shuffle([q.correct, ...q.incorrect]), // All answers mixed
  }))
}
