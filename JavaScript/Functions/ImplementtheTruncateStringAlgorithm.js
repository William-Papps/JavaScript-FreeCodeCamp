function truncateString(string, length){
  if (string.length > length){
    return string.slice(0, length) + "...";
  }

  return string;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);