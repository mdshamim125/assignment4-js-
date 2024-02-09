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

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google"}));

// console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" } ));

// console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook"} ));

// console.log(password({ name: "maisha" , birthYear: 2002 } ));