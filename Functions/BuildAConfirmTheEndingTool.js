function confirmEnding (stringOne, stringTwo){
  const endLength = stringTwo.length
  const stringOneEnd = stringOne.slice(-endLength)
  return stringOneEnd.includes(stringTwo);
}
console.log(confirmEnding("Bastian", "n"));