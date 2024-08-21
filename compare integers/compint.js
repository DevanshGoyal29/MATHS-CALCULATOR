document.querySelector("button").addEventListener("click", function() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = document.getElementById("res");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1>0 && num2>0){
        if(num1 > num2){
            console.log("first condition");
            res.innerText = `First number ${num1} is greater than second number ${num2}`;
        } else if(num1 < num2){
            console.log("second condition");
            res.innerText = `First number ${num1} is lesser than second number ${num2}`;
        } else if(num1 == num2){
            res.innerText = `First number ${num1} is equal to second number ${num2}`;
        }
    } else if(num1<0 && num2<0){
        num1 = num1 * (-1);
        num2 = num2 * (-1);
        if(num1 > num2){
            res.innerText = `First number -${num1} is lesser than second number -${num2}`;
        } else if(num1 < num2){
            res.innerText = `First number -${num1} is greater than second number -${num2}`;
        } else if(num1 == num2){
            res.innerText = `First number -${num1} is equal to second number -${num2}`;
        }
    } else if(num1>0 && num2<0){
        res.innerText = `First number ${num1} is greater than second number ${num2}`;
    } else if(num1<0 && num2>0){
        res.innerText = `First number ${num1} is lesser than second number ${num2}`;
    } else if((num1===0 && num2<0) || (num1>0 && num2===0)){
        res.innerText = `First number ${num1} is greater than second number ${num2}`;
    } else if((num1===0 && num2>0) || (num1<0 && num2===0)){
        res.innerText = `First number ${num1} is lesser than second number ${num2}`;
    }
});