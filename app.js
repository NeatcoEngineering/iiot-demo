const token = localStorage.getItem('token')

function updateCounts() {
    // Make a GET request to your API
    fetch('https://iiot-demo-robot-stacy.onrender.com/api/data',
    {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        // Update the <p> tags with the new counts
        document.getElementById('pcbCount').textContent = data.pcbCount;
        document.getElementById('cellphoneCount').textContent = data.cellphoneCount;
        document.getElementById('batteryCount').textContent = data.batteryCount;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Update counts every 5 seconds
setInterval(updateCounts, 5000); // 5000 milliseconds = 5 seconds

window.addEventListener('beforeunload', function () {
    localStorage.removeItem('token');
})