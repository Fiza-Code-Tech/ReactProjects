export const getTotals = (cart) => {
    let totalAmount = 0;
    let totalCost = 0;
    let singleCost 
    for (let item of cart.values())
    {
        totalAmount += item.amount;
        totalCost += item.amount * item.price;
    }
    return {totalAmount, totalCost};
}