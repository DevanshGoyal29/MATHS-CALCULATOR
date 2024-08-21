let pi = 3.14;

document.getElementById('solidSelect').addEventListener('change', function () {
    const solid = this.value;
    const inputsDiv = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate');
    let inputsHTML = '';

    if (solid === 'cuboid') {
        inputsHTML = `
            <input id="length" placeholder="Length" type="number">
            <input id="breadth" placeholder="Breadth" type="number">
            <input id="height" placeholder="Height" type="number">
        `;
    } else if (solid === 'cube') {
        inputsHTML = `
            <input id="side" placeholder="Side" type="number">
        `;
    } else if (solid === 'cylinder') {
        inputsHTML = `
            <input id="radius" placeholder="Radius" type="number">
            <input id="height" placeholder="Height" type="number">
        `;
    } else if (solid === 'cone') {
        inputsHTML = `
            <input id="radius" placeholder="Radius" type="number">
            <input id="height" placeholder="Height" type="number">
            <input id="slheight" placeholder="Slant Height" type="number">
        `;
    } else if (solid === 'sphere') {
        inputsHTML = `
            <input id="radius" placeholder="Radius" type="number">
        `;
    } else if (solid === 'cone') {
        inputsHTML = `
            <input id="radius" placeholder="Radius" type="number">
        `;
    }

    inputsDiv.innerHTML = inputsHTML;
    calculateButton.style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const solid = document.getElementById('solidSelect').value;
    const resultDiv = document.getElementById('result');
    let resultHTML = '';

    if (solid === 'cuboid') {
        const length = parseFloat(document.getElementById('length').value);
        const breadth = parseFloat(document.getElementById('breadth').value);
        const height = parseFloat(document.getElementById('height').value);
        if (isNaN(length) || isNaN(breadth)) {
            resultHTML = '<p>Please enter valid numbers for length, breadth and height.</p>';
        } else {
            const tsa = 2 * ((length * breadth) + (breadth * height) * (length * height));
            const csa = 2 * (height) * (length + breadth);
            const vol = length * breadth * height;
            resultHTML = `<p>Total Surface area ( TSA ) : ${tsa}</p><p>Curved Surface Area ( CSA ) : ${csa}</p><p>Volume: ${vol}</p>`;
        }
    } else if (solid === 'cube') {
        const side = parseFloat(document.getElementById('side').value);
        if (isNaN(side)) {
            resultHTML = '<p>Please enter a valid number for side.</p>';
        } else {
            const tsa = 6 * (Math.pow(side,2));
            const csa = 4 * (Math.pow(side,2));
            const vol = Math.pow(side,3);
            resultHTML = `<p>Total Surface area ( TSA ) : ${tsa}</p><p>Curved Surface Area ( CSA ) : ${csa}</p><p>Volume: ${vol}</p>`;
        }
    } else if (solid === 'cylinder') {
        const radius = parseFloat(document.getElementById('radius').value);
        const height = parseFloat(document.getElementById('height').value);
        if (isNaN(radius)) {
            resultHTML = '<p>Please enter a valid number for radius and height.</p>';
        } else {
            const tsa = 2 * pi * radius * (radius + height);
            const csa = 2 * pi * radius * height;
            const vol = pi * (Math.pow(radius,2)) * height;
            resultHTML = `<p>Total Surface area ( TSA ) : ${tsa}</p><p>Curved Surface Area ( CSA ) : ${csa}</p><p>Volume: ${vol}</p>`;
        }
    } else if (solid === 'cone') {
        const radius = parseFloat(document.getElementById('radius').value);
        const height = parseFloat(document.getElementById('height').value);
        const slheight = parseFloat(document.getElementById('slheight').value);
        if (isNaN(base) || isNaN(sideLength) || isNaN(height)) {
            resultHTML = '<p>Please enter valid numbers for radius, height and slant height.</p>';
        } else {
            const tsa = pi * radius * (slheight + radius);
            const csa = pi * radius * slheight;
            const vol = (1/3) * pi * (Math.pow(radius,2)) * height;
            resultHTML = `<p>Total Surface area ( TSA ) : ${tsa}</p><p>Curved Surface Area ( CSA ) : ${csa}</p><p>Volume: ${vol}</p>`;
        }
    } else if (solid === 'sphere') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(base) || isNaN(sideLength) || isNaN(height)) {
            resultHTML = '<p>Please enter valid numbers for radius.</p>';
        } else {
            const tsa = 4 * pi * (Math.pow(radius,2));
            const csa = tsa;
            const vol = (4/3) * pi * (Math.pow(radius,3));
            resultHTML = `<p>Total Surface area ( TSA ) : ${tsa}</p><p>Curved Surface Area ( CSA ) : ${csa}</p><p>Volume: ${vol}</p>`;
        }
    }

    resultDiv.innerHTML = resultHTML;
});
