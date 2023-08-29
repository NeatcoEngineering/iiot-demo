document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('barChart').getContext('2d');

    const data = {
        labels: ['Part Count', 'Part Count Goal'],
        datasets: [{
            label: 'Counts',
            data: [100, 150], // Replace with your actual data
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
});
window.addEventListener('beforeunload', function () {
    localStorage.removeItem('token');
})
