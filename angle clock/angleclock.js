document.querySelector('button').addEventListener('click', () => {
    const hour = parseInt(document.getElementById('hour').value);
    const minute = parseInt(document.getElementById('minute').value);
    const res = document.getElementById('res');

    // Validate the input values
    if (isNaN(hour) || hour < 0 || hour > 12) {
        res.innerHTML = '<p>Please enter a valid hour between 0 and 12.</p>';
        return;
    }
    if (isNaN(minute) || minute < 0 || minute > 59) {
        res.innerHTML = '<p>Please enter a valid minute between 0 and 59.</p>';
        return;
    }

    // Calculate the angles
    const hourAngle = (hour % 12) * 30 + (minute / 60) * 30; // Hour hand angle
    const minuteAngle = minute * 6; // Minute hand angle
    let angle = Math.abs(hourAngle - minuteAngle); // Difference between the two angles

    // Smallest angle between the hands
    if (angle > 180) {
        angle = 360 - angle;
    }

    // Display the angle
    res.innerText = `The angle is: ${angle} degrees.`;
});
