function monthlySavings(arr, livingCost){
    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input";
    }
    else{
        let sum = 0;
        for(let income of arr){
            if(income < 3000){
                sum = sum + income;
            }
            else{
                income = income - (income*20)/100;
                sum = sum + income;
            }
        }
        const totalSavings = sum - livingCost;
        if(totalSavings >= 0){
            return totalSavings;
        }
        else{
            return "earn more";
        }
    }
}

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));

// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ));

// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));

// console.log(monthlySavings(100, [ 900 , 2700 , 3400]));