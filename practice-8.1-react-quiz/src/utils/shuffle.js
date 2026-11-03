// Returns a new array with the items in random order
export function shuffle(array) {
  const copy = [...array] // Copy, so the original is not changed

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Random position from 0 to i
    const temp = copy[i] // Swap copy[i] and copy[j]
    copy[i] = copy[j]
    copy[j] = temp
  }

  return copy
}
