// Event listener for ungrouped data calculation
document.getElementById('calculate-ungrouped').addEventListener('click', function() {
    const dataInput = document.getElementById('ungrouped-data').value;
    
    // Convert input to an array of numbers
    const dataArray = dataInput.split(',').map(Number).filter(n => !isNaN(n));

    // Check if the array is not empty
    if (dataArray.length === 0) {
        alert("Please enter valid numbers separated by commas.");
        return;
    }

    // Calculate mean, median, and mode
    const mean = calculateMean(dataArray);
    const median = calculateMedian(dataArray);
    const mode = calculateMode(dataArray);

    // Display results
    document.getElementById('mean-result').innerText = `Mean: ${mean}`;
    document.getElementById('median-result').innerText = `Median: ${median}`;
    document.getElementById('mode-result').innerText = `Mode: ${mode}`;
});

// Function to calculate mean
function calculateMean(data) {
    const sum = data.reduce((a, b) => a + b, 0);
    return (sum / data.length).toFixed(2);
}

// Function to calculate median
function calculateMedian(data) {
    data.sort((a, b) => a - b);
    const middle = Math.floor(data.length / 2);

    if (data.length % 2 === 0) {
        return ((data[middle - 1] + data[middle]) / 2).toFixed(2);
    } else {
        return data[middle].toFixed(2);
    }
}

// Function to calculate mode
function calculateMode(data) {
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    // Count the frequency of each number
    data.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    // Determine the mode(s)
    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
    }

    if (modes.length === data.length) {
        return "No mode";
    } else {
        return modes.join(', ');
    }
}

// Adding rows for grouped data
document.getElementById('add-row').addEventListener('click', function() {
    const table = document.getElementById('grouped-data-table');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = `<input type="number" class="value-input">`;
    cell2.innerHTML = `<input type="number" class="frequency-input">`;
});

// Event listener for grouped data calculation
document.getElementById('calculate-grouped').addEventListener('click', function() {
    const values = Array.from(document.querySelectorAll('.value-input')).map(input => Number(input.value));
    const frequencies = Array.from(document.querySelectorAll('.frequency-input')).map(input => Number(input.value));

    // Validate input
    if (values.some(isNaN) || frequencies.some(isNaN)) {
        alert("Please enter valid numbers for both values and frequencies.");
        return;
    }

    // Calculate mean, median, and mode for grouped data
    const mean = calculateGroupedMean(values, frequencies);
    const median = calculateGroupedMedian(values, frequencies);
    const mode = calculateGroupedMode(values, frequencies);

    // Display results
    document.getElementById('mean-result').innerText = `Mean: ${mean}`;
    document.getElementById('median-result').innerText = `Median: ${median}`;
    document.getElementById('mode-result').innerText = `Mode: ${mode}`;
});

// Function to calculate mean for grouped data
function calculateGroupedMean(values, frequencies) {
    const totalFrequency = frequencies.reduce((a, b) => a + b, 0);
    const weightedSum = values.reduce((sum, value, index) => sum + (value * frequencies[index]), 0);
    return (weightedSum / totalFrequency).toFixed(2);
}

// Function to calculate median for grouped data
function calculateGroupedMedian(values, frequencies) {
    const cumulativeFreq = [];
    frequencies.reduce((acc, freq, i) => cumulativeFreq[i] = acc + freq, 0);
    const totalFreq = cumulativeFreq[cumulativeFreq.length - 1];
    const medianIndex = totalFreq / 2;
    
    for (let i = 0; i < cumulativeFreq.length; i++) {
        if (cumulativeFreq[i] >= medianIndex) {
            return values[i].toFixed(2);
        }
    }
}

// Function to calculate mode for grouped data
function calculateGroupedMode(values, frequencies) {
    const maxFrequency = Math.max(...frequencies);
    const modeIndex = frequencies.indexOf(maxFrequency);
    return values[modeIndex].toFixed(2);
}
