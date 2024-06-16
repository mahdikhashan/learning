function translatePigLatin(str) {
  const normal_word = str;
  const vowels = ['a', 'e', 'o', 'u', 'i']

  const first_char = normal_word[0]

  if (vowels.includes(first_char)) {
    return normal_word + "way"
  }

  let modified_word = normal_word;
  let consonant_group = []

  for (const _ in normal_word) {
    let char = modified_word.charAt(0)

    if (!vowels.includes(char)) {
      consonant_group.push(char)
      modified_word = modified_word.slice(1)
    }
  }

  return modified_word + consonant_group.join("") + "ay";
}

console.log(translatePigLatin("consonant") === "onsonantcay");
console.log(translatePigLatin("glove") === "aliforniacay");
console.log(translatePigLatin("paragraphs") === "aragraphspay");
console.log(translatePigLatin("california") === "aliforniacay");
console.log(translatePigLatin("algorithm") === "algorithmway");
console.log(translatePigLatin("schwartz") === "artzschway");
console.log(translatePigLatin("rhythm") === "rhythmay");
