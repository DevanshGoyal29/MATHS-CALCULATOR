document.addEventListener("DOMContentLoaded", () => {
    const planeSelect = document.getElementById("planeSelect");
    const inputFields = document.getElementById("inputFields");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("res");

    function createXYInputs() {
        inputFields.innerHTML = `
            <input id="x1" placeholder="X1" type="number">
            <input id="y1" placeholder="Y1" type="number">
            <input id="x2" placeholder="X2" type="number">
            <input id="y2" placeholder="Y2" type="number">
        `;
    }

    function createXYZInputs() {
        inputFields.innerHTML = `
            <input id="x1" placeholder="X1" type="number">
            <input id="y1" placeholder="Y1" type="number">
            <input id="z1" placeholder="Z1" type="number">
            <input id="x2" placeholder="X2" type="number">
            <input id="y2" placeholder="Y2" type="number">
            <input id="z2" placeholder="Z2" type="number">
        `;
    }

    function calculateDistance() {
        const plane = planeSelect.value;

        let x1 = parseFloat(document.getElementById("x1").value);
        let y1 = parseFloat(document.getElementById("y1").value);
        let x2 = parseFloat(document.getElementById("x2").value);
        let y2 = parseFloat(document.getElementById("y2").value);

        if (plane === "xy") {
            if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
                resultDiv.innerHTML = "Please enter valid numbers for all coordinates.";
            } else {
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2);
                resultDiv.innerHTML = `Distance: ${distance}`;
            }
        } else if (plane === "xyz") {
            let z1 = parseFloat(document.getElementById("z1").value);
            let z2 = parseFloat(document.getElementById("z2").value);

            if (isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)) {
                resultDiv.innerHTML = "Please enter valid numbers for all coordinates.";
            } else {
                const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)).toFixed(2);
                resultDiv.innerHTML = `Distance: ${distance}`;
            }
        }
    }

    planeSelect.addEventListener("change", () => {
        if (planeSelect.value === "xy") {
            createXYInputs();
        } else {
            createXYZInputs();
        }
    });

    calculateButton.addEventListener("click", calculateDistance);

    // Initialize with XY plane inputs
    createXYInputs();
});
