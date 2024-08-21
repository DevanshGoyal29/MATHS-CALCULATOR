document.querySelector("button").addEventListener("click", function() {
    let angle = document.getElementById("angle").value;
    let res = document.getElementById("res");

    if (!angle || isNaN(angle) || angle < 0) {
        res.innerText = "Please enter a valid positive number.";
        return;
    }

    angle = parseFloat(angle);

    if (angle > 0 && angle < 90) {
        res.innerText = "It is an acute angle";
    } else if (angle === 90) {
        res.innerText = "It is a right angle";
    } else if (angle > 90 && angle < 180) {
        res.innerText = "It is an obtuse angle";
    } else if (angle === 180) {
        res.innerText = "It is a straight angle";
    } else if (angle > 180 && angle < 360) {
        res.innerText = "It is a reflex angle";
    } else {
        res.innerText = "Please enter a valid angle between 0 and 360 degrees.";
    }
});
