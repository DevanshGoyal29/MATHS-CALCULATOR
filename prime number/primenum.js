document.querySelector('button').addEventListener('click', function() {
    // Get the input value
    const input = parseInt(document.getElementById('num').value);
    const res = document.getElementById('res');

    // Error handling for non-integer or negative inputs
    if (isNaN(input) || input < 1) {
        res.innerText = "Please enter a positive integer.";
        return;
    }

    let c = 0;

    if (input === 1) {
        res.innerText = "1 is neither prime nor composite.";
    } else {
        for (let i = 1; i <= input; i++) {
            if (input % i === 0) {
                c++;
            }
        }

        if (c === 2) {
            res.innerText = `${input} is a prime number.`;
        } else {
            res.innerText = `${input} is a composite number.`;
        }
    }
});
