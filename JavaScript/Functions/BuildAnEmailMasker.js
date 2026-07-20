function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const masked =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return masked + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
