document.querySelector('button').addEventListener('click', function() {
    // Get the input value
    const input = document.getElementById('nums').value;

    // Split the input string into an array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    // Filter out any non-number values (e.g., empty strings)
    const validNumbers = numbers.filter(num => !isNaN(num));

    // Calculate the maximum and minimum
    const max = Math.max(...validNumbers);
    const min = Math.min(...validNumbers);

    // Display the results
    document.getElementById('max').textContent = max;
    document.getElementById('min').textContent = min;
});
