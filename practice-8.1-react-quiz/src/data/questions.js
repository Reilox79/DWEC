// 10 preguntas propias sobre desarrollo web
export const questions = [
  { id: 1, category: 'JavaScript', difficulty: 'easy', text: 'Which keyword declares a constant?', correct: 'const', incorrect: ['var', 'let', 'def'] },
  { id: 2, category: 'JavaScript', difficulty: 'medium', text: 'What does [1, 2, 3].map(n => n * 2) return?', correct: '[2, 4, 6]', incorrect: ['[1, 2, 3]', '6', 'undefined'] },
  { id: 3, category: 'JavaScript', difficulty: 'hard', text: 'What is the result of typeof null?', correct: '"object"', incorrect: ['"null"', '"undefined"', '"number"'] },
  { id: 4, category: 'HTML', difficulty: 'easy', text: 'Which tag creates a link?', correct: '<a>', incorrect: ['<link>', '<href>', '<url>'] },
  { id: 5, category: 'HTML', difficulty: 'medium', text: 'Which element groups related inputs in a form?', correct: '<fieldset>', incorrect: ['<group>', '<section>', '<formset>'] },
  { id: 6, category: 'CSS', difficulty: 'easy', text: 'Which property changes the text color?', correct: 'color', incorrect: ['font-color', 'text-color', 'background'] },
  { id: 7, category: 'CSS', difficulty: 'medium', text: 'In BEM, how is a modifier joined to its block?', correct: 'With --', incorrect: ['With __', 'With a dot', 'With a space'] },
  { id: 8, category: 'React', difficulty: 'easy', text: 'Which hook adds state to a component?', correct: 'useState', incorrect: ['useEffect', 'useRef', 'useProps'] },
  { id: 9, category: 'React', difficulty: 'medium', text: 'How do you pass data from a parent to a child?', correct: 'With props', incorrect: ['With state', 'With classes', 'With localStorage'] },
  { id: 10, category: 'React', difficulty: 'hard', text: 'Why do we pass a function to useState(() => ...)?', correct: 'So it only runs on the first render', incorrect: ['To make it async', 'To avoid using props', 'It is required by React'] },
]
