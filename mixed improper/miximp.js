function convertToImproper() {
    const wholeNumber = parseInt(document.getElementById('whole-number').value);
    const numerator = parseInt(document.getElementById('numerator').value);
    const denominator = parseInt(document.getElementById('denominator').value);

    if (denominator === 0) {
        document.getElementById('improper-result').innerText = 'Denominator cannot be zero';
        return;
    }

    const improperNumerator = wholeNumber * denominator + numerator;
    document.getElementById('improper-result').innerText = `Improper Fraction: ${improperNumerator}/${denominator}`;
}

function convertToMixed() {
    const numerator = parseInt(document.getElementById('imp-numerator').value);
    const denominator = parseInt(document.getElementById('imp-denominator').value);

    if (denominator === 0) {
        document.getElementById('mixed-result').innerText = 'Denominator cannot be zero';
        return;
    }

    const wholeNumber = Math.floor(numerator / denominator);
    const newNumerator = numerator % denominator;

    document.getElementById('mixed-result').innerText = `Mixed Fraction: ${wholeNumber} ${newNumerator}/${denominator}`;
}
