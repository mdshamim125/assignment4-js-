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
// console.log(checkName("Shamim"));
// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));
// console.log(checkName("Ayesha"));
// console.log(checkName("I"));
// console.log(checkName("jhankar"));