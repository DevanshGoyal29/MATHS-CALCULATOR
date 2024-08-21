document.addEventListener("DOMContentLoaded", () => {
    const operations = [
        { id: "addcalc", inputs: ["#addn1", "#addn2"], result: "#addres", operation: (a, b) => a + b },
        { id: "subcalc", inputs: ["#subn1", "#subn2"], result: "#subres", operation: (a, b) => a - b },
        { id: "mulcalc", inputs: ["#muln1", "#muln2"], result: "#mulres", operation: (a, b) => a * b },
        { id: "divcalc", inputs: ["#divn1", "#divn2"], result: "#divres", operation: (a, b) => b !== 0 ? (a / b).toFixed(2) : "Error: Div by 0" }
    ];

    operations.forEach(op => {
        document.querySelector(`#${op.id}`).addEventListener("click", () => {
            const [n1, n2] = op.inputs.map(selector => parseFloat(document.querySelector(selector).value));
            const result = isNaN(n1) || isNaN(n2) ? "Invalid input" : op.operation(n1, n2);
            document.querySelector(op.result).innerText = result;
        });
    });
});
