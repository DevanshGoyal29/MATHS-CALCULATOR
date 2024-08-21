document.querySelector('button').addEventListener("click", () => {
    let cp = document.querySelector("#cp").value;
    let sp = document.querySelector("#sp").value;
    let res = document.querySelector("#res");

    // Input validation: Check if the inputs are empty or not numbers
    if (!cp || !sp || isNaN(cp) || isNaN(sp)) {
        res.innerText = "Please enter valid numerical values for both cost price and selling price.";
        return;
    }

    cp = parseFloat(cp);
    sp = parseFloat(sp);

    // Ensure both cp and sp are positive numbers
    if (cp <= 0 || sp <= 0) {
        res.innerText = "Cost price and selling price must be positive values.";
        return;
    }

    let difference = sp - cp;
    let percentage = Math.abs((difference / cp) * 100).toFixed(2);  // Calculate percentage and limit to 2 decimal places

    if (sp > cp) {
        res.innerText = `It is a profit of ${difference.toFixed(2)} with ${percentage}% profit percentage.`;
    } else if (cp > sp) {
        res.innerText = `It is a loss of ${difference.toFixed(2)} with ${percentage}% loss percentage.`;
    } else {
        res.innerText = `It is neither a gain nor a loss.`;
    }
});
