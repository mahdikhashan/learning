function myReplace(str, before, after) {
  const should_be_uppercase = /^[A-Z]/.test(before.charAt(0))
  const replace_word_is_uppercase = /^[A-Z]/.test(after.charAt(0))

  let word_to_replace = after;

  if (should_be_uppercase) {
    word_to_replace = word_to_replace.at(0).toUpperCase() 
      + word_to_replace.slice(1)
  } else if (replace_word_is_uppercase) {
    word_to_replace = word_to_replace.toLowerCase()
  }

  let array_of_words = str.split(" ");
  const index_of_before = array_of_words.indexOf(before);

  array_of_words[index_of_before] = word_to_replace

  return array_of_words.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");