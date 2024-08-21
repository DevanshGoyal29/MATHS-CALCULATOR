document.querySelector("button").addEventListener("click", function() {
    let num = document.getElementById("num").value;
    let res = document.getElementById("res");

    if (!num || isNaN(num) || num < 0) {
        res.innerText = "Please enter a valid positive number.";
        return;
    }

    let numStr = num.toString();
    let expandedParts = [];

    for (let i = 0; i < numStr.length; i++) {
        let digit = numStr[i];
        let placeValue = Math.pow(10, numStr.length - i - 1);

        if (digit !== '0') {
            expandedParts.push(`${digit}x${placeValue}`);
        }
    }

    res.innerText = expandedParts.join(" + ");
});
