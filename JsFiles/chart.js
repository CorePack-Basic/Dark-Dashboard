const ctx = document.querySelector("#myChart").getContext("2d");
let delayed;

// Gradient
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58 ,123 ,231 , 1)");
gradient.addColorStop(1, "rgba(0 ,210 ,255 , 0.3)");

const labels = [
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
];

const data = {
    labels,
    datasets: [{
        data: [211, 326, 165, 350, 420, 370, 500, 375],
        label: "Ayman dashboard",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#eee",
        pointBackgroundColor: "#000",
        tension: 0.7,
    }]
};

const config = {
    type: "line",
    data: data,
    options: {
        radius: 2,
        hitRadius: 150,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 500 + context.datasetIndex * 100;
                }
                return delay;
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return "$" + value + "m";
                    }
                }
            }
        }
    }
};

const myChart = new Chart(ctx, config);




