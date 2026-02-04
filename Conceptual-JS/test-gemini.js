function passwordValidator(password) {
  let reasons = [];

  // 1. Run tests
  const hasSpace = /\s/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNum = /\d/.test(password);

  // 2. Check conditions
  if (password.length < 8) reasons.push("Too short (min 8 chars)");
  if (!hasNum)             reasons.push("Missing a number");
  if (!hasUppercase)       reasons.push("Missing an uppercase letter");
  if (hasSpace)            reasons.push("Spaces are not allowed");

  return {
    valid: reasons.length === 0,
    reasons: reasons
  };
}

let output = passwordValidator ("hello ");
console.log(output);