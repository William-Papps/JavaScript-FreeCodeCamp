const repeatStringNumTimes = (string, number) => {
  let finalString = "";
  for (let i = 0; i < number; i++){
    finalString += string
  }
  return finalString;
}

console.log(repeatStringNumTimes("Hello", 10));