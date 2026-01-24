// var weight = 62;
// var height = 1.62;
//const bmi = (weight) / (height)**2;

var bmi= 100;

if (bmi < 18.5) {
  console.log('You are Underweight');
}

else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log('You are Normal');
}

else if (bmi >=25 && bmi <=29.9) {
  console.log('You are Overweight');
}

else {
  console.log('You are Obesee');
}