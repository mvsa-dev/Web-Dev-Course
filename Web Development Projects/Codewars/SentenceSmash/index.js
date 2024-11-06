function smash(words) {
  let sentence = words.toString().replaceAll(",", " ");
  return sentence;
}

smash(["hello", "world", "this", "is", "great"]);
