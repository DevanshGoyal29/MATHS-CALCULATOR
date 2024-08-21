function convertToFraction() {
    const decimal = parseFloat(document.getElementById('decimal-input').value);
    
    if (isNaN(decimal)) {
        document.getElementById('fraction-result').innerText = 'Please enter a valid decimal.';
        return;
    }

    let denominator = 1;
    let num = decimal;

    while (num % 1 !== 0) {
        num *= 10;
        denominator *= 10;
    }

    const numerator = num;
    
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    const divisor = gcd(numerator, denominator);

    const finalNumerator = numerator / divisor;
    const finalDenominator = denominator / divisor;

    document.getElementById('fraction-result').innerText = `Fraction: ${finalNumerator}/${finalDenominator}`;
}

function convertToDecimal() {
    const numerator = parseInt(document.getElementById('frac-numerator').value);
    const denominator = parseInt(document.getElementById('frac-denominator').value);

    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
        document.getElementById('decimal-result').innerText = 'Please enter valid numbers and ensure the denominator is not zero.';
        return;
    }

    const decimal = numerator / denominator;

    document.getElementById('decimal-result').innerText = `Decimal: ${decimal}`;
}
