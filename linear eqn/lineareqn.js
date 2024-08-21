let res = document.querySelector("#calculate");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
res.addEventListener("click",() => {
    a = parseInt(a.value);
    b = parseInt(b.value);
    c = parseInt(c.value);
    let sol = (c - b) / a;
    let div = document.querySelector("#res");
    div.innerText = `x = ${sol}`;
});