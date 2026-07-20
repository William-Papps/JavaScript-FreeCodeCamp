function fearNotLetter(string) {
  for (let i = 0; i < string.length - 1; i++) {
    const currentLetter = string[i].charCodeAt(0);
    const nextLetter = string[i + 1].charCodeAt(0);

    if (nextLetter !== currentLetter + 1) {
      return String.fromCharCode(currentLetter + 1);
    }
  }

  return undefined;
}