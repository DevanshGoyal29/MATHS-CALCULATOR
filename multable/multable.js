// const num = document.getElementById('num').value;
// const res = document.getElementById('res');
// if (num === '') {
//     res.innerHTML = '<p>Please enter a number.</p>';
//     return;
// } else {
//     let table = " ";

// }

// function createTable() {
//     const num = document.getElementById('num').value;
//     const res = document.getElementById('res');

//     if (num === '') {
//         res.innerHTML = '<p>Please enter a number.</p>';
//         return;
//     }

//     let table = '<table>';
//     table += '<tr><th>Number</th><th>Multiplication</th><th>Result</th></tr>';

//     for (let i = 1; i <= 10; i++) {
//         table += `<tr>
//                     <td>${num}</td>
//                     <td>${num} x ${i}</td>
//                     <td>${num * i}</td>
//                 </tr>`;
//     }

//     table += '</table>';
//     res.innerHTML = table;
// }

function createTable() {
    const num = document.getElementById('num').value;
    const res = document.getElementById('res');

    if (num === '') {
        res.innerHTML = '<p>Please enter a number.</p>';
        return;
    }

    let output = '';

    for (let i = 1; i <= 10; i++) {
        output += `<p>${num} x ${i} = ${num * i}</p>`;
    }

    res.innerHTML = output;
}