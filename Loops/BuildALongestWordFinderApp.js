function findLongestWordLength(string){
  const words = string.split(" ")
  let longest = 0
  for(let i = 0;i < words.length; i++){
    let count = 0
    for(let j = 0;j < words[i].length;j++){
      count++;
    }
    if (count > longest){
      longest = count;

    }
    console.log(words[i])
  } 
  return longest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");