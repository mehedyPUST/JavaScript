// let password = "i l0ve U";

// console.log(/\s/.test(password));

// console.log('.......................................');

// console.log(/\d/.test(password));

// console.log('.......................................');


// console.log(/[A-Z]/.test(password));

// console.log('.......................................');


// console.log(/[0-9]/.test(password));






function passwordValidator (password) {

let reasons = [];

let  hasSpace = /\s/.test(password);

let  hasUppercase = /[A-Z]/.test(password);

let hasNum = /\d/.test(password);

let length = password.length;

if ( length < 8 ) {
    reasons.push('Password too short - Use more than 7 character');
}

if ( hasNum === false ) {
    reasons.push("number missing : Please insert at least one number");
}

if ( hasUppercase === false  ) {
    reasons.push("UpperCase missing : Please insert at least one UpperCase Character ");
}

if ( hasSpace === true  ) {
    reasons.push("Space is  not allowed: Please ignore space ");
}

 return {
    valid: reasons.length === 0,
    reasons}
}

let output = passwordValidator ("Hello1234");
console.log(output);
