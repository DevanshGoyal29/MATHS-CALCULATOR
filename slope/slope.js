document.getElementById('modeSelect').addEventListener('change', function () {
    const mode = this.value;
    const inputsDiv = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate');
    let inputsHTML = '';

    if (mode === 'angle') {
        inputsHTML = `
            <input id="angle" placeholder="Angle in degrees" type="number">
        `;
    } else if (mode === 'points') {
        inputsHTML = `
            <input id="x1" placeholder="x1" type="number">
            <input id="x2" placeholder="x2" type="number">
            <input id="y1" placeholder="y1" type="number">
            <input id="y2" placeholder="y2" type="number">
        `;
    }

    inputsDiv.innerHTML = inputsHTML;
    calculateButton.style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const mode = document.getElementById('modeSelect').value;
    const resultDiv = document.getElementById('result');
    let resultHTML = '';

    if (mode === 'angle') {
        const angle = parseFloat(document.getElementById('angle').value);
        if (isNaN(angle)) {
            resultHTML = '<p>Please enter a valid number for the angle.</p>';
        } else {
            const radians = (angle * Math.PI) / 180; // Convert angle to radians
            const slope = Math.tan(radians);
            resultHTML = `<p>Slope: ${slope.toFixed(4)}</p>`;
        }
    } else if (mode === 'points') {
        const x1 = parseFloat(document.getElementById('x1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const y1 = parseFloat(document.getElementById('y1').value);
        const y2 = parseFloat(document.getElementById('y2').value);
        if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
            resultHTML = '<p>Please enter valid numbers for x1, y1, x2, and y2.</p>';
        } else if (x1 === x2) {
            resultHTML = '<p>Slope is undefined (vertical line).</p>';
        } else {
            const slope = (y2 - y1) / (x2 - x1);
            resultHTML = `<p>Slope: ${slope.toFixed(4)}</p>`;
        }
    }

    resultDiv.innerHTML = resultHTML;
});
