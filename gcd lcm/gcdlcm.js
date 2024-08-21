document.addEventListener("DOMContentLoaded", () => {
    const num1Input = document.querySelector("#num1");
    const num2Input = document.querySelector("#num2");
    const res = document.querySelector("#res");

    document.querySelector("button").addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (isNaN(num1)) {
            res.innerHTML = "Please enter a valid number for the first input.";
            return;
        }

        if (isNaN(num2)) {
            res.innerHTML = "Please enter a valid number for the second input.";
            return;
        }

        function gcd(a, b) {
            if (!b) {
                return a;
            }
            return gcd(b, a % b);
        }

        // Simplify the ratio using the GCD
        let commonDivisor = gcd(num1, num2);

        let commonMultiple = (num1 * num2) / commonDivisor;
        commonMultiple = parseInt(commonMultiple);

        res.innerHTML = `GCD (${num1}, ${num2}) = ${commonDivisor} <br> LCM (${num1}, ${num2}) = ${commonMultiple}`;
    });
});
