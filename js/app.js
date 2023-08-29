const token = localStorage.getItem('token')
document.addEventListener('DOMContentLoaded', function () {
const ctx = document.getElementById('barChart').getContext('2d');
const data = {
        labels: ['Part Count', 'Part Count Goal'],
        datasets: [{
            label: 'Counts',
            data: ['0', '0'], // Replace with your actual data
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        }],
    };
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const myChart = new Chart(ctx, config);
    
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
        document.getElementById('partCount').textContent = data.partCount;
        document.getElementById('partGoal').textContent = data.partGoal;
        myChart.data.datasets[0].data = [data.partCount, data.partGoal];
        myChart.update(); // Update the chart

    });
}
        
    .catch(error => console.error('Error fetching data:', error));
    
}

// Update counts every 5 seconds
setInterval(updateCounts, 5000); // 5000 milliseconds = 5 seconds
    

window.addEventListener('beforeunload', function () {
    localStorage.removeItem('token');
})
