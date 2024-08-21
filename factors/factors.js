document.querySelector('button').addEventListener("click",()=>{
    let num = document.querySelector("#num");
    let res = document.querySelector("#res");

    num = parseInt(num.value);
    let arr = []

    for(let i=1 ; i<=num ; i++){
        if(num % i === 0){
            arr.push(i);
        }
    }

    res.innerText = `The factors are: ${arr}`;
})