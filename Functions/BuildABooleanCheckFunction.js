function booWho(i){
  if (typeof(i) === 'boolean') {
    return true;
  } else {
    return false
  }
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(1, 2, 3));
console.log(booWho([].slice));
console.log(booWho({ "a": 1}));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));
