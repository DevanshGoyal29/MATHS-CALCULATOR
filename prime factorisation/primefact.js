document.getElementById('calculate').addEventListener('click', function() {
    let num = parseInt(document.getElementById('num').value);
    let resultDiv = document.getElementById('res');
    
    if (isNaN(num) || num <= 1) {
        resultDiv.innerHTML = "Please enter a number greater than 1.";
        return;
    }

    let factors = primeFactorization(num);
    let formattedResult = formatFactors(factors);

    resultDiv.innerHTML = `${num} = ${formattedResult}`;
});

function primeFactorization(n) {
    let factors = {};
    let divisor = 2;

    while (n >= 2) {
        while (n % divisor === 0) {
            if (factors[divisor]) {
                factors[divisor]++;
            } else {
                factors[divisor] = 1;
            }
            n = n / divisor;
        }
        divisor++;
    }

    return factors;
}

function formatFactors(factors) {
    let result = '';

    for (let factor in factors) {
        if (factors[factor] > 1) {
            result += `${factor}<sup>${factors[factor]}</sup> x `;
        } else {
            result += `${factor} x `;
        }
    }

    return result.slice(0, -3); // Remove the trailing ' x '
}
