const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];




    function findAveragePhonePrice (arr) {
        
        let totalPrice = 0;
        
        for ( let element of arr) {
             totalPrice = totalPrice + element.price;

        }
        const avgPrice = totalPrice / arr.length;
        return avgPrice;
        
    }
    const averagePrice = findAveragePhonePrice (phones);
    console.log(averagePrice);