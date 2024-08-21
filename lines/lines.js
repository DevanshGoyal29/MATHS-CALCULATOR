document.getElementById('equationSelect').addEventListener('change', function () {
    const equationType = this.value;
    const inputsDiv = document.getElementById('inputs');
    const calculateButton = document.getElementById('calculate');
    let inputsHTML = '';

    switch (equationType) {
        case 'horizontal':
            inputsHTML = `<input id="y" placeholder="y" type="number">`;
            break;
        case 'vertical':
            inputsHTML = `<input id="x" placeholder="x" type="number">`;
            break;
        case 'pointSlope':
            inputsHTML = `
                <input id="x1" placeholder="x1" type="number">
                <input id="y1" placeholder="y1" type="number">
                <input id="slope" placeholder="Slope (m)" type="number">
            `;
            break;
        case 'twoPoint':
            inputsHTML = `
                <input id="x1" placeholder="x1" type="number">
                <input id="y1" placeholder="y1" type="number">
                <input id="x2" placeholder="x2" type="number">
                <input id="y2" placeholder="y2" type="number">
            `;
            break;
        case 'slopeIntercept':
            inputsHTML = `
                <input id="slope" placeholder="Slope (m)" type="number">
                <input id="yIntercept" placeholder="y-intercept (b)" type="number">
            `;
            break;
        case 'intercept':
            inputsHTML = `
                <input id="xIntercept" placeholder="x-intercept (a)" type="number">
                <input id="yIntercept" placeholder="y-intercept (b)" type="number">
            `;
            break;
        case 'normal':
            inputsHTML = `
                <input id="p" placeholder="p (Perpendicular distance from origin)" type="number">
                <input id="theta" placeholder="θ (Angle with x-axis in degrees)" type="number">
            `;
            break;
    }

    inputsDiv.innerHTML = inputsHTML;
    calculateButton.style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function () {
    const equationType = document.getElementById('equationSelect').value;
    const resultDiv = document.getElementById('result');
    let resultHTML = '';

    switch (equationType) {
        case 'horizontal':
            const y = parseFloat(document.getElementById('y').value);
            if (isNaN(y)) {
                resultHTML = '<p>Please enter a valid number for y.</p>';
            } else {
                resultHTML = `<p>Equation: y = ${y}</p>`;
            }
            break;
        case 'vertical':
            const x = parseFloat(document.getElementById('x').value);
            if (isNaN(x)) {
                resultHTML = '<p>Please enter a valid number for x.</p>';
            } else {
                resultHTML = `<p>Equation: x = ${x}</p>`;
            }
            break;
        case 'pointSlope':
            const x1 = parseFloat(document.getElementById('x1').value);
            const y1 = parseFloat(document.getElementById('y1').value);
            const slope = parseFloat(document.getElementById('slope').value);
            if (isNaN(x1) || isNaN(y1) || isNaN(slope)) {
                resultHTML = '<p>Please enter valid numbers for x1, y1, and slope.</p>';
            } else {
                const a = slope;
                const b = -1;
                const c = y1 - slope * x1;
                resultHTML = `<p>Equation: ${a}x + (${b})y = ${c}</p>`;
            }
            break;
        case 'twoPoint':
            const x2 = parseFloat(document.getElementById('x2').value);
            const y2 = parseFloat(document.getElementById('y2').value);
            if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
                resultHTML = '<p>Please enter valid numbers for x1, y1, x2, and y2.</p>';
            } else {
                const slopeTwoPoint = (y2 - y1) / (x2 - x1);
                const a = slopeTwoPoint;
                const b = -1;
                const c = y1 - a * x1;
                resultHTML = `<p>Equation: ${a}x + (${b})y = ${c}</p>`;
            }
            break;
        case 'slopeIntercept':
            const yIntercept = parseFloat(document.getElementById('yIntercept').value);
            if (isNaN(slope) || isNaN(yIntercept)) {
                resultHTML = '<p>Please enter valid numbers for slope and y-intercept.</p>';
            } else {
                const a = slope;
                const b = -1;
                const c = yIntercept;
                resultHTML = `<p>Equation: ${a}x + (${b})y = ${c}</p>`;
            }
            break;
        case 'intercept':
            const xIntercept = parseFloat(document.getElementById('xIntercept').value);
            const yIntercept2 = parseFloat(document.getElementById('yIntercept').value);
            if (isNaN(xIntercept) || isNaN(yIntercept2)) {
                resultHTML = '<p>Please enter valid numbers for x-intercept and y-intercept.</p>';
            } else {
                const a = yIntercept2;
                const b = xIntercept;
                const c = xIntercept * yIntercept2;
                resultHTML = `<p>Equation: ${a}x + (${b})y = ${c}</p>`;
            }
            break;
        case 'normal':
            const p = parseFloat(document.getElementById('p').value);
            const theta = parseFloat(document.getElementById('theta').value);
            if (isNaN(p) || isNaN(theta)) {
                resultHTML = '<p>Please enter valid numbers for p and θ.</p>';
            } else {
                const a = Math.cos((theta * Math.PI) / 180);
                const b = Math.sin((theta * Math.PI) / 180);
                const c = p;
                resultHTML = `<p>Equation: ${a}x + ${b}y = ${c}</p>`;
            }
            break;
    }

    resultDiv.innerHTML = resultHTML;
});
