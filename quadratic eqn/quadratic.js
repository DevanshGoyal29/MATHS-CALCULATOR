document.getElementById('calculate').addEventListener("click", () => {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let discriminant = (b * b) - (4 * a * c);
    let outputStatement = document.getElementById("solstmt");
    let root1 = document.getElementById("r1");
    let root2 = document.getElementById("r2");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        outputStatement.innerText = "Enter valid numbers";
        root1.innerText = "";
        root2.innerText = "";
    } else if (a === 0) {
        outputStatement.innerHTML = '<p>This is not a quadratic equation (a = 0).</p>';
        root1.innerText = "";
        root2.innerText = "";
    } else if (discriminant > 0) {
        outputStatement.innerText = "The discriminant is positive hence the equation has real and distinct roots";
        let r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        root1.innerText = r1.toFixed(2);
        root2.innerText = r2.toFixed(2);
    } else if (discriminant === 0) {
        outputStatement.innerText = "The discriminant is zero hence the equation has real and equal roots";
        let r1 = -b / (2 * a);
        root1.innerText = r1.toFixed(2);
        root2.innerText = r1.toFixed(2);
    } else {
        outputStatement.innerText = "The discriminant is negative hence the equation has imaginary roots";
        let realPart = (-b / (2 * a)).toFixed(2);
        let imaginaryPart = (Math.sqrt(Math.abs(discriminant)) / (2 * a)).toFixed(2);
        root1.innerText = `${realPart} + ${imaginaryPart}i`;
        root2.innerText = `${realPart} - ${imaginaryPart}i`;
    }
});
