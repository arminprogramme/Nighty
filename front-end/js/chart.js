const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['مهر', 'آبان', 'آدر', 'دی', 'بهمن', 'اسفند'],
        datasets: [{
            label: ' میزان بازدید و خرید از سایت',
            data: [12, 19, 3, 8, 6, 3],
            borderWidth: 4,
            borderColor: 'rgba(152, 0, 0, 0.947)',
            backgroundColor: 'rgba(209, 0, 0, 0.848)',
            fill: true,
            tension: 0.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['مهر', 'آبان', 'آدر', 'دی', 'بهمن', 'اسفند'],
        datasets: [{
            label: ' میزان بازدید و فروش سایت',
            data: [4, 13, 8, 12, 11, 23],
            borderWidth: 4,
            borderColor: 'rgba(0, 0, 152, 0.47)',
            backgroundColor: 'rgba(0, 0, 152, 0.48)',
            fill: true,
            tension: 0.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});