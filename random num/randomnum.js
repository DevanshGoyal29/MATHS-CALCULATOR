let lr = document.querySelector("#lowrange");
let hr = document.querySelector("#highrange");
let calc = document.querySelector("#calculate");
let res = document.querySelector("#res");

calc.addEventListener("click", () => {
    let low = parseInt(lr.value);
    let high = parseInt(hr.value);

    if (isNaN(low) || isNaN(high) || low > high) {
        res.innerText = "Please enter a valid range!";
    } else {
        let num = Math.floor(Math.random() * (high - low + 1)) + low;
        res.innerText = num;
    }
});
