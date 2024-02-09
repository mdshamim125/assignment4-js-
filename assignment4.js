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


function checkName(name){
    if(typeof name !== "string"){
        return "invalid";
    }
    else{
        const lastLetters = "ayioeuw";
        for(const letter of lastLetters){
            if(name.at(-1).toLowerCase() === letter){
                return "Good Name";
            }
        }
        return "Bad Name";
        
    }
}


function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return "Invalid Array";
    }
    else{
        let finalArray = [];
        for(const element of array){
            if(typeof element === "number" && !isNaN(element)){
                finalArray.push(element);
            }
        }
        return finalArray;
    }
}


function password(obj){
    if(obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName') && obj.birthYear >= 1000){
        const siteNameame = obj.siteName;
        const modifySiteName = siteNameame.charAt(0).toUpperCase() + siteNameame.slice(1);
        const year = obj.birthYear;
        const name = obj.name;
        return `${modifySiteName}#${name}@${year}`;
    }
    else{
        return "invalid";
    }
}


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

