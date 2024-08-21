document.addEventListener("DOMContentLoaded", () => {
    const res1 = document.querySelector("#res1");
    const res2 = document.querySelector("#res2");

    document.querySelector("#sqcubcalc").addEventListener("click", () => {
        const num = parseFloat(document.querySelector("#num").value);

        if (isNaN(num)) {
            res1.innerHTML = "Please enter a valid number for square and cube calculations.";
            return;
        }

        let sq = Math.pow(num, 1/2);
        let cub = Math.pow(num, 1/3);
        res1.innerHTML = `Square: ${num} <sup>1/2</sup> = ${sq} <br> Cube: ${num} <sup>1/3</sup> = ${cub}`;
    });

    document.querySelector("#customcalc").addEventListener("click", () => {
        const base = parseFloat(document.querySelector("#base").value);
        const power = parseFloat(document.querySelector("#power").value);

        if (isNaN(base) || isNaN(power)) {
            res2.innerHTML = "Please enter valid numbers for base and power.";
            return;
        }

        let cus = Math.pow(base, (1/power));
        res2.innerHTML = `Custom power: ${base} <sup>1/${power}</sup> = ${cus}`;
    });
});
