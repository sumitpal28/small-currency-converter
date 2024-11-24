let input = document.getElementById("input");
let currency = document.getElementById("currency");
let convert = document.getElementById("button");

let result = document.getElementById("result");

convert.addEventListener("click", function(){
    let getinput= parseFloat(input.value);
    let getcurrency = parseFloat(currency.value);

    if(isNaN(getinput) || isNaN(getcurrency)){
        result.textContent = `"ERROR PLEASE CHOOSE BOTH VALUES"`;
        return;
    }

    let res = (getinput * getcurrency);

    result.textContent = ` ${res} Inidan Rupees`;

})

