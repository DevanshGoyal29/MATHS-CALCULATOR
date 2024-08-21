document.getElementById("arrangeBtn").addEventListener("click", function() {
    let nums = document.getElementById("nums").value;
    let order = document.querySelector('input[name="order"]:checked').value;
    let res = document.getElementById("res");

    if (!nums) {
        res.innerText = "Please enter some numbers.";
        return;
    }

    let numArray = nums.split(",").map(Number);

    if (numArray.some(isNaN)) {
        res.innerText = "Please enter valid numbers separated by commas.";
        return;
    }

    if (order === "ascending") {
        numArray.sort((a, b) => a - b);
    } else if (order === "descending") {
        numArray.sort((a, b) => b - a);
    }

    res.innerText = "Result: " + numArray.join(", ");
});
