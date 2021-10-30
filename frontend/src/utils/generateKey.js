const randomLetter = () => {
  const min = 10
  const max = 35
  const randomNumber = Math.floor(Math.random() * (max - min) + min)

  return randomNumber.toString(36)
}

export const generateKey = (countOfLetters=11) => {
  let word = ''

  for(let i = 0; i < countOfLetters; i++) {
    word += randomLetter()
  }

  return word
}

export const generateKeysForArr = arr => (
  arr.map(item => ({
    ...item, key: generateKey()
  }))
)
