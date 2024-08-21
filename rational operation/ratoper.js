document.getElementById('calculate').addEventListener('click', function () {
    const operation = document.getElementById('oper').value;
    const resultDiv = document.getElementById('res');

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const den1 = document.getElementById('den1').value;
    const den2 = document.getElementById('den2').value;

    // num1 = parseInt(num1);
    // num2 = parseInt(num2);
    // den1 = parseInt(den1);
    // den2 = parseInt(den2);

    let numerator = 0, denominator = 0;

    if (operation === 'addition') {
        numerator = ((num1 * den2) + (num2 * den1));
        denominator = (den1 * den2);
    } else if(operation === 'subtraction'){
        numerator = ((num1 * den2) - (num2 * den1));
        denominator = (den1 * den2);
    } else if(operation === 'multiplication'){
        numerator = num1 * num2;
        denominator = den1 * den2;
    } else if(operation === 'division'){
        numerator = (num1 * den2);
        denominator = (num2 * den1);
    }

    // Function to calculate the greatest common divisor (GCD)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Simplify the fraction
    const commonDivisor = gcd(numerator, denominator);
    const simplifiedNum = numerator / commonDivisor;
    const simplifiedDen = denominator / commonDivisor;

    resultDiv.innerText = `${simplifiedNum} / ${simplifiedDen}`;
});