const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget ( laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPriceTotal = laptop*laptopQuantity;
    console.log('Laptop er Jonno Budget:', laptopPriceTotal );

    const tabletPriceTotal = tablet*tabletQuantity;
    console.log('tablet er Jonno Budget:', tabletPriceTotal );

    const mobilePriceTotal = mobile*mobileQuantity;
    console.log('mobile er Jonno Budget:', mobilePriceTotal );

    const totalElectronicGoodsBudget = laptopPriceTotal + tabletPriceTotal + mobilePriceTotal;

    return totalElectronicGoodsBudget;


}
const total = calculateElectronicsBudget ( 3, 2, 4);
console.log('Sob miliye Budget lagbe:', total);
