document.addEventListener("DOMContentLoaded", function() {
    let numInput = document.querySelector("#num");
    let wordInput = document.querySelector("#word");
    let calculateButton1 = document.querySelector("#calculate1");
    let calculateButton2 = document.querySelector("#calculate2");
    let result = document.querySelector("#res1");
    let result2 = document.querySelector("#res2");

    function numberToWords(num) {
        if (num === 0) return 'zero';

        const belowTwenty = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
        const tens = [
            '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        const thousands = [
            '', 'thousand', 'million', 'billion', 'trillion'
        ];

        function helper(num) {
            if (num === 0) return '';
            if (num < 20) return belowTwenty[num] + ' ';
            if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
            if (num < 1000) return belowTwenty[Math.floor(num / 100)] + ' hundred ' + helper(num % 100);
            for (let i = 0; i < thousands.length; i++) {
                const unit = 1000 ** (i + 1);
                if (num < unit) {
                    return helper(Math.floor(num / (unit / 1000))) + thousands[i] + ' ' + helper(num % (unit / 1000));
                }
            }
        }

        return helper(num).trim();
    }

    function wordsToNumber(words) {
        const smallNumbers = {
            'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
            'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
            'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
            'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19
        };

        const tens = {
            'twenty': 20, 'thirty': 30, 'forty': 40, 'fifty': 50,
            'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90
        };

        const scales = {
            'hundred': 100, 'thousand': 1000, 'million': 1000000, 'billion': 1000000000
        };

        const wordsArray = words.toLowerCase().split(/[\s-]+/);
        let currentNumber = 0;
        let totalNumber = 0;

        wordsArray.forEach(word => {
            if (smallNumbers[word] !== undefined) {
                currentNumber += smallNumbers[word];
            } else if (tens[word] !== undefined) {
                currentNumber += tens[word];
            } else if (word === 'hundred' && currentNumber !== 0) {
                currentNumber *= scales[word];
            } else if (scales[word] !== undefined) {
                totalNumber += currentNumber * scales[word];
                currentNumber = 0;
            }
        });

        return totalNumber + currentNumber;
    }

    calculateButton1.addEventListener("click", () => {
        let num = parseInt(numInput.value, 10);
        if (!isNaN(num)) {
            let val = numberToWords(num);
            result.textContent = val;
        } else {
            result.textContent = "Please enter a valid number.";
        }
    });

    calculateButton2.addEventListener("click", () => {
        let wordNum = wordInput.value;
        if (wordNum.trim() !== "") {
            let wo = wordsToNumber(wordNum);
            result2.textContent = wo;
        } else {
            result2.textContent = "Please enter valid words.";
        }
    });
});
