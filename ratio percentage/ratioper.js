document.addEventListener('DOMContentLoaded', function () {
    // Function to convert ratio to percentage
    function ratioToPercentage(numerator, denominator) {
        if (denominator === 0) {
            return "Denominator cannot be zero.";
        }
        let percentage = (numerator / denominator) * 100;
        return percentage.toFixed(2) + "%";
    }

    // Function to convert percentage to ratio in whole numbers
    function percentageToRatio(percentage) {
        let gcd = function(a, b) {
            if (!b) {
                return a;
            }
            return gcd(b, a % b);
        };
        
        let numerator = percentage;
        let denominator = 100;

        // Simplify the ratio using the GCD
        let commonDivisor = gcd(numerator, denominator);
        numerator = numerator / commonDivisor;
        denominator = denominator / commonDivisor;

        return Math.round(numerator) + " : " + Math.round(denominator);
    }

    // Event listener for ratio to percentage conversion
    document.querySelectorAll('button')[0].addEventListener('click', function () {
        let numerator = parseFloat(document.getElementById('num').value);
        let denominator = parseFloat(document.getElementById('den').value);

        if (isNaN(numerator) || isNaN(denominator)) {
            document.getElementById('ratiotoper').innerText = "Please enter valid numbers.";
        } else {
            let result = ratioToPercentage(numerator, denominator);
            document.getElementById('ratiotoper').innerText = "Percentage: " + result;
        }
    });

    // Event listener for percentage to ratio conversion
    document.querySelectorAll('button')[1].addEventListener('click', function () {
        let percentage = parseFloat(document.getElementById('per').value);

        if (isNaN(percentage)) {
            document.getElementById('pertoratio').innerText = "Please enter a valid percentage.";
        } else {
            let result = percentageToRatio(percentage);
            document.getElementById('pertoratio').innerText = "Ratio: " + result;
        }
    });
});
