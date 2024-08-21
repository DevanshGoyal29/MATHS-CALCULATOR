// document.getElementById('calculate').addEventListener('click', function () {
//     const num = document.querySelector("#num").value;
//     const den = document.querySelector("#den").value;
//     const res = document.querySelector("#res");

//     // Input validation
//     if (!num || !den) {
//         res.innerText = "Please enter both numerator and denominator.";
//         return;
//     }

//     if (isNaN(num) || isNaN(den)) {
//         res.innerText = "Please enter valid numbers.";
//         return;
//     }

//     num = parseFloat(num);
//     den = parseFloat(den);

//     if (den === 0) {
//         res.innerText = "Denominator cannot be zero.";
//         return;
//     }

//     function gcd(a, b) {
//         while (b !== 0) {
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;
//     }

//     if(num>0 && den>0){
//         divisor = gcd(num,den);
//         finalNum = num / divisor;
//         finalDen = den / divisor;
//         res.innerText = `Simplified form : ${finalNum} / ${finalDen}`;
//     } else if(num<0 && den<0){
//         num = num * (-1);
//         den = den * (-1);
//         divisor = gcd(num,den);
//         finalNum = num / divisor;
//         finalDen = den / divisor;
//         res.innerText = `Simplified form : ${finalNum} / ${finalDen}`;
//     } else if(num>0 && den<0){
//         den = den * (-1);
//         divisor = gcd(num,den);
//         finalNum = num / divisor;
//         finalDen = den / divisor;
//         res.innerText = `Simplified form : -${finalNum} / ${finalDen}`;
//     } else if(num<0 && den>0){
//         num = num * (-1);
//         divisor = gcd(num,den);
//         finalNum = num / divisor;
//         finalDen = den / divisor;
//         res.innerText = `Simplified form : -${finalNum} / ${finalDen}`;
//     }
// });


document.getElementById('calculate').addEventListener('click', function () {
    let num = document.querySelector("#num").value;
    let den = document.querySelector("#den").value;
    const res = document.querySelector("#res");

    // Input validation
    if (!num || !den) {
        res.innerText = "Please enter both numerator and denominator.";
        return;
    }

    if (isNaN(num) || isNaN(den)) {
        res.innerText = "Please enter valid numbers.";
        return;
    }

    num = parseFloat(num);
    den = parseFloat(den);

    if (den === 0) {
        res.innerText = "Denominator cannot be zero.";
        return;
    }

    // GCD function to simplify the fraction
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Adjust signs to keep denominator positive and handle negative cases
    const sign = (num < 0 && den > 0) || (num > 0 && den < 0) ? -1 : 1;
    num = Math.abs(num);
    den = Math.abs(den);

    // Simplify the fraction
    const divisor = gcd(num, den);
    const finalNum = sign * (num / divisor);
    const finalDen = den / divisor;

    res.innerText = `Simplified form: ${finalNum} / ${finalDen}`;
});
