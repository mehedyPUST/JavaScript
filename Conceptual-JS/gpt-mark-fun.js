/**
 * Analyze numeric values in any object.
 * Returns total, average, highest and lowest values with their keys.
 *
 * @param {Object} obj - Object with numeric values
 * @returns {Object} analysis result
 */
function analyzeObjectNumbers(obj) {
    var total = 0;
    var highestValue = -Infinity;
    var lowestValue = Infinity;
    var highestKey = null;
    var lowestKey = null;

    var keys = Object.keys(obj);

    // handle empty object
    if (keys.length === 0) {
        return {
            total: 0,
            average: 0,
            highestKey: null,
            highestValue: null,
            lowestKey: null,
            lowestValue: null
        };
    }

    for (var key in obj) {
        var value = obj[key]; // bracket notation for dynamic property

        if (typeof value !== "number") continue; // skip non-numeric values

        total += value;

        if (value > highestValue) {
            highestValue = value;
            highestKey = key;
        }

        if (value < lowestValue) {
            lowestValue = value;
            lowestKey = key;
        }
    }

    return {
        total: total,
        average: total / keys.length,
        highestKey: highestKey,
        highestValue: highestValue,
        lowestKey: lowestKey,
        lowestValue: lowestValue
    };
}

var prices = { phone: 12000, laptop: 75000, tablet: 30000 };
console.log(analyzeObjectNumbers(prices));
