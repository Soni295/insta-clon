const randomLetter = () => {
  const min = 10
  const max = 35
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return randomNumber.toString(36)
}

const generateStr = countOfLetters => {
  let word = ''

  for(let i = 0; i < countOfLetters; i++) {
    word += randomLetter()
  }

  return word
}

export const useGenerateKey = arr => (
  arr.map(item => ({
    ...item,
    key: generateStr(11)
  }))
)
