document.getElementById('calculate').addEventListener("click",()=>{
    let num = document.querySelector("#num").value;
    let f = 1;
    for (let i=1 ; i<=num ; i++) {
        f *= i;
    }
    let res = document.querySelector("#res");
    res.innerText = `Factorial of ${num}! = ${f}`;
})