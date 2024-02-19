const itemsWithPrices = {
    item1: 10.99,
    item2: 22.33,
    item3: 8.4,
    item4: 10.23,
    item5: 7.69
};

function convertIntoINR(USDprice) {
    return USDprice * 80;
}

let INRitems = Object.fromEntries(
    Object.entries(itemsWithPrices).map(([item, price]) => [item, convertIntoINR(price).toFixed(2)])
)
console.log("Price Converted Items List:");
console.log(INRitems);

