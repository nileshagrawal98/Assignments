function passwordValidator(p) {
    let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "<", ">", "/", "'", ";", ":", '"', "]", "[", "{", "}", '\\', "|", "?"];

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let alphabets = "abcdefghijklmnopqrstuvwxyz";

    let errors = [];

    if (p.length < 6) {
        errors.push("min 6 character is required");
    }

    let includes = false;
    for (let i = 0; i < symbols.length; i++) {
        if (p.includes(symbols[i])) {
            includes = true;
            break;
        }
    }
    if(!includes){
        errors.push("symbol is missing");
    }

    includes = false;
    for (let i = 0; i < 10 ; i++) {
        if (p.includes(i.toString())) {
            includes = true;
            break;
        }
    }
    if(!includes){
        errors.push("number is missing");
    }

    includes = false;
    for (let i = 0; i < alphabets.length ; i++) {
        if (p.includes(alphabets[i])) {
            includes = true;
            break;
        }
    }
    if(!includes){
        errors.push("small character is missing");
    }

    includes = false;
    for (let i = 0; i < alphabets.length ; i++) {
        if (p.includes(alphabets[i].toUpperCase())) {
            includes = true;
            break;
        }
    }
    if(!includes){
        errors.push("capital character is missing");
    }

    if(errors.length == 0){
        return "Valid";
    }else{
        return "Invalid: " + errors.join(", ");
    }


}

console.log(passwordValidator("asdf"));

module.exports = { passwordValidator } ;