// 1. lunches array
let lunches = [];

// 2. Add lunch to end
function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

// 3. Add lunch to start
function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

// 4. Remove last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return arr;
}

// 5. Remove first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return arr;
}

// 6. Get random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
}

// 7. Show menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}
