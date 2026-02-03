 const employees1 = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];



 const employees2 = [
    { name: "rakib", experience: 2, starting: 18000, increment: 3000 },
    { name: "tamim", experience: 6, starting: 25000, increment: 4000 },
    { name: "fahim", experience: 1, starting: 16000, increment: 2000 },
    { name: "nasir", experience: 10, starting: 35000, increment: 1500 },
    { name: "sajid", experience: 4, starting: 22000, increment: 3500 },
];


const employees3 = [
    { name: "arif", experience: 3, starting: 20000, increment: 2500 },
    { name: "nazim", experience: 5, starting: 27000, increment: 3000 },
    { name: "rifat", experience: 2, starting: 18000, increment: 2000 },
    { name: "tanvir", experience: 7, starting: 30000, increment: 3500 },
    { name: "samir", experience: 1, starting: 16000, increment: 1500 },
];

function salaryCalculator ( arr) {
    let total = 0;

    for ( let i = 0 ; i< arr.length; i++) {
        const salary = arr[i].starting + arr[i].experience*arr[i].increment;
        console.log(arr[i].name + ' salary: ' + salary);
        total = total+salary;

    }
    return total; 
}
const monthlySalary = salaryCalculator (employees1);
    console.log('Total  Salary (Employes1): ',monthlySalary);

    console.log("--------------------------------------------------------------------");

    const monthlySalary2 = salaryCalculator (employees2);
    console.log('Total  Salary (Employes2): ',monthlySalary2);

    console.log("--------------------------------------------------------------------");

    const monthlySalary3 = salaryCalculator (employees3);
    console.log('Total  Salary (Employes3): ',monthlySalary3);