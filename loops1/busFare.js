var age = 50;
var fare = 800;
var isStudent = true;
var discount;
var ticketPrice;


if (age<10) {
  console.log(fare=0);
  console.log('Free');
}

else if (isStudent === true) {
  discount = fare*50/100;
  ticketPrice = fare - discount;
  console.log(ticketPrice);
}

else if (age >= 60) {
  discount = fare*15/100;
  ticketPrice = fare-discount;
  console.log(ticketPrice);
}

else {
  discount = fare*0/100;
  ticketPrice = fare - discount;
  console.log(ticketPrice);

}
