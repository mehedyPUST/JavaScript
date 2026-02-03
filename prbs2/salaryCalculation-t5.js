 const employees = [
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



        
        function salaryCalculator (arr) {
        
        let totalSalary = 0;
        
        for ( let element of arr) {
             totalSalary = totalSalary + element.starting + element.experience* element.increment;
             console.log(totalSalary);

        }
        
        return totalSalary ;
        
    }
    const monthlySalary = salaryCalculator (employees);
    console.log(monthlySalary);

    const monthlySalary2 = salaryCalculator (employees2);
    console.log(monthlySalary2);