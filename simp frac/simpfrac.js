document.querySelector('button').addEventListener('click', () => {
    const num = parseInt(document.getElementById('num').value);
    const den = parseInt(document.getElementById('den').value);
    const resnum = document.getElementById('numerator');
    const resden = document.getElementById('denominator');

    // Check if the input values are valid numbers
    if (isNaN(num)) {
        resnum.innerHTML = '<p>Please enter a valid numerator.</p>';
        resden.innerHTML = '';
        return;
    }
    if (isNaN(den)) {
        resden.innerHTML = '<p>Please enter a valid denominator.</p>';
        resnum.innerHTML = '';
        return;
    }
    if (den === 0) {
        resden.innerHTML = '<p>Denominator cannot be zero.</p>';
        resnum.innerHTML = '';
        return;
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
    const commonDivisor = gcd(num, den);
    const simplifiedNum = num / commonDivisor;
    const simplifiedDen = den / commonDivisor;

    // Display the simplified fraction
    resnum.innerText = `Simplified Numerator: ${simplifiedNum}`;
    resden.innerText = `Simplified Denominator: ${simplifiedDen}`;
});
