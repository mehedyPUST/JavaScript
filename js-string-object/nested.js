// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }

// console.log(college.unique);


// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }

// console.log(college.unique.color);

// output blue 


// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }

// console.log(college.unique.result);

// output { gpa: 5, merit: 'top top most' }


// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }

// console.log(college.unique.result.gpa);




// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }

// console.log(college.events[1]);



// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }
// college.events[1] = '16 december';
// console.log(college.events[1]);



// const college = {
//     name: 'vnc',
//     class: ['10', '11', '12'],
//     events: ['science fair', 'bijoy dibos', '21 feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5,
//             merit: 'top top most',
//         }
//     }
// }
// college.events[1] = '16 december';
// console.log(college.events);



const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top top most',
        }
    }
    
}
console.log(college);
delete college.class;
college.events[1] = '16 december';
console.log(college);
