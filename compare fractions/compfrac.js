document.getElementById('calculate').addEventListener('click', function () {
    const resultDiv = document.getElementById('res');

    // Parse input values as integers
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const den1 = parseInt(document.getElementById('den1').value);
    const den2 = parseInt(document.getElementById('den2').value);

    // Function to calculate GCD (Greatest Common Divisor)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Calculate the Least Common Denominator (LCD)
    const commonDivisor = gcd(den1, den2);
    const lcd = (den1 * den2) / commonDivisor;

    // Adjust the numerators based on the LCD
    const adjustedNum1 = num1 * (lcd / den1);
    const adjustedNum2 = num2 * (lcd / den2);

    // Compare the adjusted numerators
    if (adjustedNum1 > adjustedNum2) {
        resultDiv.innerText = `The first fraction ${num1}/${den1} is greater than the second fraction ${num2}/${den2}.`;
    } else if (adjustedNum1 < adjustedNum2) {
        resultDiv.innerText = `The first fraction ${num1}/${den1} is less than the second fraction ${num2}/${den2}.`;
    } else {
        resultDiv.innerText = `The first fraction ${num1}/${den1} is equal to the second fraction ${num2}/${den2}.`;
    }
});
