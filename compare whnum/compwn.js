document.querySelector("button").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    if (!num1 || isNaN(num1) || num1 < 0) {
        res.innerText = "Please enter a valid positive number.";
        return;
    }

    if (!num2 || isNaN(num2) || num2 < 0) {
        res.innerText = "Please enter a valid positive number.";
        return;
    }

    if(num1 > num2){
        res.innerText = `First number ${num1} is greater than second number ${num2}`;
    } else if(num1 < num2){
        res.innerText = `First number ${num1} is lesser than second number ${num2}`;
    } else if(num1 == num2){
        res.innerText = `First number ${num1} is equal to second number ${num2}`;
    }
});