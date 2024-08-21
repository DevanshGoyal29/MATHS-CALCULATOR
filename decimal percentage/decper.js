document.getElementById('dectoper').addEventListener('click', function() {
    const decimal = parseFloat(document.getElementById('decimal').value);
    const resultDiv = document.getElementById('res1');

    if (isNaN(decimal)) {
        resultDiv.innerText = "Please enter a valid decimal number.";
        return;
    }

    const percentage = (decimal * 100).toFixed(2);
    resultDiv.innerText = `${decimal} as a percentage is ${percentage}%`;
});

document.getElementById('pertodec').addEventListener('click', function() {
    const percentage = parseFloat(document.getElementById('percentage').value);
    const resultDiv = document.getElementById('res2');

    if (isNaN(percentage)) {
        resultDiv.innerText = "Please enter a valid percentage.";
        return;
    }

    const decimal = (percentage / 100).toFixed(4);
    resultDiv.innerText = `${percentage}% as a decimal is ${decimal}`;
});
