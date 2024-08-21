document.getElementById('opselect').addEventListener('change', function () {
    const op = this.value;
    const inputsDiv = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate');
    let inputsHTML = '';

    if (op === 'si') {
        inputsHTML = `
            <input id="p" placeholder="Principal amount" type="number">
            <input id="t" placeholder="Time (in years)" type="number">
            <input id="r" placeholder="Rate of interest" type="number">
        `;
    } else if (op === 'ci') {
        inputsHTML = `
            <input id="p" placeholder="Principal amount" type="number">
            <input id="t" placeholder="Time (in years)" type="number">
            <input id="r" placeholder="Rate of interest" type="number">
            <input id="n" placeholder="Number of times interest is compounded" type="number">
        `;
    }
    inputsDiv.innerHTML = inputsHTML;
    calculateButton.style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const op = document.getElementById('opselect').value;
    const resultDiv = document.getElementById('result');
    let resultHTML = '';

    const p = parseFloat(document.getElementById('p')?.value);
    const t = parseFloat(document.getElementById('t')?.value);
    const r = parseFloat(document.getElementById('r')?.value);
    const n = parseFloat(document.getElementById('n')?.value);

    if (isNaN(p) || isNaN(t) || isNaN(r) || (op === 'ci' && isNaN(n))) {
        resultHTML = '<p>Please enter valid numbers for all required fields.</p>';
    } else {
        if (op === 'si') {
            const si = (p * t * r) / 100;
            resultHTML = `<p>Simple Interest: ${si.toFixed(2)}</p><p>Total Amount: ${(p + si).toFixed(2)}</p>`;
        } else if (op === 'ci') {
            const am = p * Math.pow((1 + (r / (n * 100))), (n * t));
            const ci = am - p;
            resultHTML = `<p>Compound Interest: ${ci.toFixed(2)}</p><p>Total Amount: ${am.toFixed(2)}</p>`;
        }
    }

    resultDiv.innerHTML = resultHTML;
});
