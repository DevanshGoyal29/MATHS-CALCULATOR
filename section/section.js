document.addEventListener("DOMContentLoaded", () => {
    const calcType = document.getElementById("calcType");
    const inputsDiv = document.getElementById("inputs");
    const resultDiv = document.getElementById("result");
    const calculateButton = document.getElementById("calculate");

    function updateInputs() {
        let inputsHTML = '';
        if (calcType.value === "internal" || calcType.value === "external") {
            inputsHTML = `
                <input type="number" id="x1" placeholder="Enter x1">
                <input type="number" id="y1" placeholder="Enter y1">
                <input type="number" id="x2" placeholder="Enter x2">
                <input type="number" id="y2" placeholder="Enter y2">
                <input type="number" id="m" placeholder="Enter m">
                <input type="number" id="n" placeholder="Enter n">
            `;
        } else if (calcType.value === "midpoint") {
            inputsHTML = `
                <input type="number" id="x1" placeholder="Enter x1">
                <input type="number" id="y1" placeholder="Enter y1">
                <input type="number" id="x2" placeholder="Enter x2">
                <input type="number" id="y2" placeholder="Enter y2">
            `;
        }
        inputsDiv.innerHTML = inputsHTML;
        resultDiv.innerHTML = '';
    }

    calcType.addEventListener("change", updateInputs);
    updateInputs();

    calculateButton.addEventListener("click", () => {
        const x1 = parseFloat(document.getElementById("x1").value);
        const y1 = parseFloat(document.getElementById("y1").value);
        const x2 = parseFloat(document.getElementById("x2").value);
        const y2 = parseFloat(document.getElementById("y2").value);

        if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            resultDiv.innerHTML = "<p>Please enter valid numbers for all inputs.</p>";
            return;
        }

        if (calcType.value === "internal" || calcType.value === "external") {
            const m = parseFloat(document.getElementById("m").value);
            const n = parseFloat(document.getElementById("n").value);

            if (isNaN(m) || isNaN(n)) {
                resultDiv.innerHTML = "<p>Please enter valid numbers for m and n.</p>";
                return;
            }

            let x, y;
            if (calcType.value === "internal") {
                x = (m * x2 + n * x1) / (m + n);
                y = (m * y2 + n * y1) / (m + n);
            } else if (calcType.value === "external") {
                x = (m * x2 - n * x1) / (m - n);
                y = (m * y2 - n * y1) / (m - n);
            }
            resultDiv.innerHTML = `<p>The point divides the line in the ratio ${m}:${n} at (${x.toFixed(2)}, ${y.toFixed(2)})</p>`;
        } else if (calcType.value === "midpoint") {
            const x = (x1 + x2) / 2;
            const y = (y1 + y2) / 2;
            resultDiv.innerHTML = `<p>The midpoint is (${x.toFixed(2)}, ${y.toFixed(2)})</p>`;
        }
    });
});
