document.getElementById("calculate").addEventListener("click", () => {
    let a1 = parseFloat(document.getElementById('a1').value);
    let b1 = parseFloat(document.getElementById('b1').value);
    let c1 = parseFloat(document.getElementById('c1').value);
    let a2 = parseFloat(document.getElementById('a2').value);
    let b2 = parseFloat(document.getElementById('b2').value);
    let c2 = parseFloat(document.getElementById('c2').value);

    let denominator = (a1 * b2) - (a2 * b1);
    let resDiv = document.getElementById("res");
    let resultHTML = '';

    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(a2) || isNaN(b2) || isNaN(c2)) {
        resultHTML = "<p>Please enter valid numbers for all fields.</p>";
    } else if (denominator === 0) {
        resultHTML = "<p>No unique solution exists (the system is either dependent or inconsistent).</p>";
    } else {
        let x = ((b2 * c1) - (b1 * c2)) / denominator;
        let y = ((a1 * c2) - (a2 * c1)) / denominator;
        resultHTML = `<p>Solution: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}</p>`;
    }

    resDiv.innerHTML = resultHTML;
});
