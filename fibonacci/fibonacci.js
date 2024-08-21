document.addEventListener("DOMContentLoaded", () => {
    let res = document.querySelector("#res");
    res.addEventListener("click", () => {
        let num = parseInt(document.querySelector("#num").value);
        if (isNaN(num) || num <= 0) {
            alert("Please enter a valid positive number");
            return;
        }

        let n1 = 0, n2 = 1, nextTerm;
        let arr = [];

        for (let i = 1; i <= num; i++) {
            arr.push(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        let result = document.querySelector("#result");
        result.innerText = arr.join(', ');
    });
});
