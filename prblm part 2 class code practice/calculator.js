function calculator ( operation, a, b) {
    let result = 0;
    operation = operation.toLowerCase();
    if (operation === "add") {
        result = a+b; 
    }
        

     else if (operation === "subtract") {
        result = a-b; 
     }
        
    else if  (operation === "multiply") {
        result = a*b; 
    }
        
    else if (operation === "divide") {
        result = a/b;
    }
        

    else {
       return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }

    return result;



}

const resultOfCalculation = calculator ('DiiDe', 27,23);
console.log(resultOfCalculation);