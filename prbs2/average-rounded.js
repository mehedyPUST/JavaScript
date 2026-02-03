const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

    const phones2 = [
    { model: "PhoneG", brand: "Samsung", price: 72000 },
    { model: "PhoneH", brand: "Iphone", price: 115000 },
    { model: "PhoneI", brand: "Xiaomi", price: 32000 },
    { model: "PhoneJ", brand: "Realme", price: 28000 },
    { model: "PhoneK", brand: "OnePlus", price: 68000 },
    { model: "PhoneL", brand: "Google", price: 90000 },
];




    function findAveragePhonePrice (arr) {
        
        let totalPrice = 0;
        
        for ( let element of arr) {
             totalPrice = totalPrice + element.price;

        }
        const avgPrice = totalPrice / arr.length;
        return Math.round(avgPrice);
        
    }
    const averagePrice = findAveragePhonePrice (phones);
    console.log('Prothom Array er phone gular agerage dam: ' ,averagePrice);

    const averagePrice2 = findAveragePhonePrice (phones2);
    console.log('2nd  Array er phone gular agerage dam: ' ,averagePrice2);