# Practice 8.1 - React Quiz

Quiz de desarrollo web hecho con React + Vite (solo `useState`, props y eventos; CSS con BEM y variables).

## Ejecutar

> Esta carpeta está en Google Drive, donde `npm install` falla (EBADF).
> Copia la carpeta a un disco local (por ejemplo `C:\dev`) y ahí:

```bash
npm install
npm run dev
```

## Estructura

```
src/
  index.css              tokens (variables CSS) + reset + tema oscuro
  data/questions.js      10 preguntas
  utils/shuffle.js       Fisher-Yates (devuelve un array nuevo)
  utils/buildQuiz.js     elige N preguntas y mezcla sus respuestas
  components/atoms/      Badge, Button, ProgressBar
  components/molecules/  QuestionHeader, AnswerOption
  components/organisms/  QuestionCard, StartScreen, ScorePanel
  pages/QuizPage.jsx     el único componente con estado
```
