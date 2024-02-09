function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number";
    }
    else{
        const ticketIncome = ticketSale*120;
        const zooCost = 500 + 8*50;
        const totalIncome = ticketIncome - zooCost;
        return totalIncome;
    }
}
// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-130));
    