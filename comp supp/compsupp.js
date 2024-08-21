document.querySelector("button").addEventListener("click", function() {
    let angle = document.getElementById("angle").value;
    let res = document.getElementById("res");

    if (!angle || isNaN(angle) || angle < 0) {
        res.innerText = "Please enter a valid positive number.";
        return;
    }

    angle = parseFloat(angle);

    let comp = 90 - angle;
    let supp = 180 - angle;

    res.innerHTML = `Complementary angle: ${comp} <br> Supplementary angle: ${supp}`;
});
