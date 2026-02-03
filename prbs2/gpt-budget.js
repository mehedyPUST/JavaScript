const prices = {
    laptop: 35000,
    tablet: 15000,
    mobile: 20000
};

function calculateElectronicsBudget(quantities) {
    let totalBudget = 0;

    for (let item in quantities) {
        const itemTotal = prices[item] * quantities[item];
        console.log(`${item} er Jonno Budget:`, itemTotal);
        totalBudget += itemTotal;
    }

    return totalBudget;
}

// Example usage:
const quantities = {
    laptop: 3,
    tablet: 2,
    mobile: 4
};

const total = calculateElectronicsBudget(quantities);
console.log('Sob miliye Budget lagbe:', total);
