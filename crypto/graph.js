
const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["May 13", "May 14", "May 14", "May 15", "May 16", "May 16", "May 17", "May 18", "May 18"],
        datasets: [{
            label: 'price',
            backgroundColor: '#0b1b1b',
            borderColor: '#6c4e60',
            data: [1000, 2000, 3000, 4000, 3000, 4000, 20000, 3500, 3900],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    },
});
