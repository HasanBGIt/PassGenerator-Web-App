let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let generatedPasswords = document.getElementById("generated-password") 
let error = document.getElementById("error");


generateBtn.onclick = () => {
    let length = document.getElementById("length").value;
    let lowercase = document.getElementById("lowercase").checked;
    let uppercase = document.getElementById("uppercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let charSet = "";
    if(lowercase){
        charSet +="abcdefghijklmnopqrstuvwxyz"
    }
    if(uppercase){
        charSet +="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(symbols){
        charSet +="#@_-"
    }
    if(numbers){
        charSet +="0123456789"
    }

    if(!charSet){
        error.style.display = "block";
        return;
    }

    let password = ""
    for (let i =0 ; i < length ; i++){
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password +=charSet[randomIndex];
    }

    generatedPasswords.textContent = password;
    copyBtn.style.display = "block";

}


copyBtn.onclick = () =>{
    let copy = generatedPasswords.textContent
    navigator.clipboard.writeText(copy).then(()    =>{
        error.style.display ="block";
        error.style.color = "white";
        error.innerText = "Password copied to clipboard !"
    })
    .catch(error => {
        error.innerText = `Password copied to Failed to copy password:  ${error}` 
    })
}