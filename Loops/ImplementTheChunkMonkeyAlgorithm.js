function chunkArrayInGroups(array, number){
  const newArray = [];
  console.log(array);
  for (let i = 0;i < array.length; i += number){
    newArray.push(array.slice(i, i + number));
  }
  return newArray;
};

chunkArrayInGroups(["a", "b", "c", "d"], 2)