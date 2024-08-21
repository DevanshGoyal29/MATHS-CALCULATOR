document.getElementById('shapeSelect').addEventListener('change', function () {
    const shape = this.value;
    const inputsDiv = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate');
    let inputsHTML = '';

    if (shape === 'rectangle') {
        inputsHTML = `
            <input id="length" placeholder="Length" type="number">
            <input id="breadth" placeholder="Breadth" type="number">
        `;
    } else if (shape === 'square') {
        inputsHTML = `
            <input id="side" placeholder="Side" type="number">
        `;
    } else if (shape === 'circle') {
        inputsHTML = `
            <input id="radius" placeholder="Radius" type="number">
        `;
    } else if (shape === 'parallelogram') {
        inputsHTML = `
            <input id="base" placeholder="Base" type="number">
            <input id="sideLength" placeholder="Side Length" type="number">
            <input id="height" placeholder="Height" type="number">
        `;
    }

    inputsDiv.innerHTML = inputsHTML;
    calculateButton.style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const shape = document.getElementById('shapeSelect').value;
    const resultDiv = document.getElementById('result');
    let resultHTML = '';

    if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const breadth = parseFloat(document.getElementById('breadth').value);
        if (isNaN(length) || isNaN(breadth)) {
            resultHTML = '<p>Please enter valid numbers for length and breadth.</p>';
        } else {
            const area = length * breadth;
            const perimeter = 2 * (length + breadth);
            resultHTML = `<p>Area: ${area}</p><p>Perimeter: ${perimeter}</p>`;
        }
    } else if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        if (isNaN(side)) {
            resultHTML = '<p>Please enter a valid number for side.</p>';
        } else {
            const area = side * side;
            const perimeter = 4 * side;
            resultHTML = `<p>Area: ${area}</p><p>Perimeter: ${perimeter}</p>`;
        }
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius)) {
            resultHTML = '<p>Please enter a valid number for radius.</p>';
        } else {
            const area = Math.PI * radius * radius;
            const circumference = 2 * Math.PI * radius;
            resultHTML = `<p>Area: ${area.toFixed(2)}</p><p>Circumference: ${circumference.toFixed(2)}</p>`;
        }
    } else if (shape === 'parallelogram') {
        const base = parseFloat(document.getElementById('base').value);
        const sideLength = parseFloat(document.getElementById('sideLength').value);
        const height = parseFloat(document.getElementById('height').value);
        if (isNaN(base) || isNaN(sideLength) || isNaN(height)) {
            resultHTML = '<p>Please enter valid numbers for base, side length, and height.</p>';
        } else {
            const area = base * height;
            const perimeter = 2 * (base + sideLength);
            resultHTML = `<p>Area: ${area}</p><p>Perimeter: ${perimeter}</p>`;
        }
    }

    resultDiv.innerHTML = resultHTML;
});
