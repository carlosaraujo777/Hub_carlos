// 1. Relógio em tempo real
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('relogio').innerText = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// 2. Gráfico de Habilidades (Chart.js)
const ctx = document.getElementById('graficoHabilidades').getContext('2d');

new Chart(ctx, {
    type: 'radar', // Gráfico de teia de aranha (combina com o tema)
    data: {
        labels: ['Python', 'SQL', 'HTML/CSS', 'JavaScript', 'Power BI', 'Git'],
        datasets: [{
            label: 'Nível de Proficiência',
            data: [85, 75, 90, 80, 95, 85], // Nível de 0 a 100
            backgroundColor: 'rgba(0, 255, 204, 0.2)',
            borderColor: '#00ffcc',
            pointBackgroundColor: '#ff00ff',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ff00ff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                pointLabels: { color: '#e0e0e0', font: { size: 12, family: 'Fira Code' } },
                ticks: { display: false, min: 0, max: 100 }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});