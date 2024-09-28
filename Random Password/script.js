function genratePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbol){

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_?"

    let allowedChars = "";
    let password = "";  
         
    allowedChars += includeLowercase ? lowercase : "";
    allowedChars += includeUppercase ? uppercase : "";
    allowedChars += includeNumber ? number : "";
    allowedChars += includeSymbol ? symbol : "";

    if(passwordLength <= 0) return "Password Length must be atlest 1";

    if(allowedChars.length === 0) return `Atlest one set need to be selected`;

    for(let i = 0;i<passwordLength ;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

        return password;
}

const passwordLength = 4;
const includeLowercase = false;
const includeUppercase = false;
const includeNumber = true;
const includeSymbol = false;

const password = genratePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumber,
                                includeSymbol);
console.log(`Genrated Password : ${password}`);