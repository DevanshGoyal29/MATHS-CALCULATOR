document.querySelector("button").addEventListener("click", function() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value; // Corrected from 'a' to 'c'

    let res = document.getElementById('res');

    // Validate inputs to ensure they are numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.innerText = "Please enter valid numbers.";
        return;
    }

    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    // Sort the array to identify the sides correctly
    let arr = [a, b, c];
    arr.sort((x, y) => x - y);

    // Calculate squares of the sides
    let s1 = arr[0] * arr[0];
    let s2 = arr[1] * arr[1];
    let s3 = arr[2] * arr[2];

    // Check for Pythagorean triplet
    if ((s1 + s2) === s3) {
        res.innerText = "It is a Pythagorean triplet.";
    } else {
        res.innerText = "It is not a Pythagorean triplet.";
    }
});
