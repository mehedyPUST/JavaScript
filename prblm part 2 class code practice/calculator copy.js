function calculator ( operation, a, b) {
    let result = 0;
    if (operation === "Add" || operation === "add") {
        result = a+b; 
    }
        

     else if (operation === "Subtract" || operation === "subtract") {
        result = a-b; 
     }
        
    else if  (operation === "Multiply" || operation === "multiply") {
        result = a*b; 
    }
        
    else if (operation === "Divide" || operation === "divide") {
        result = a/b;
    }
        

    else {
       return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }

    return result;



}

const resultOfCalculation = calculator ('Add', 7,12);
console.log(resultOfCalculation);