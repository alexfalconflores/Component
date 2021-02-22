let popCanvas = document.getElementById('popChart').getContext('2d');
let donutCanvas = document.getElementById('donutChart').getContext('2d');
// donutCanvas.stylus.display="flex";
// var popChart = document.getElementById("popChart").getContext("2d");
donutCanvas.canvas.parentNode.style.height = '35.8rem';
donutCanvas.canvas.parentNode.style.width = '35rem';
donutCanvas.canvas.parentNode.style.Padding = '0rem';
donutCanvas.canvas.parentNode.style.Margin = '0rem';
Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';


let barchart = new Chart(popCanvas, {
    type: "bar",
    data: {
        labels: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
        datasets: [{
            label: "",
            data: [250, 300, 1000, 450, 450, 450, 450],
            backgroundColor: [
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)',
                'rgba(212, 166, 40, 1)'
            ]
        }]
    },
    options: {

        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines:{
                    color: 'white',
                    zeroLineColor: '#ffffff'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 0,
                fontColor: 'white'
            }
        },
        tooltips: {
            cornerRadius: 10,
            caretSize: 10,
            xPadding: 16,
            yPadding: 10,
            backgroundColor: 'gray',
            titleFontStyle: 'normal',
            titleMarginBottom: 15,
            // fontColor: 'white'
        }
    }
});

let donutchart = new Chart(donutCanvas, {
    type: "doughnut",
    data: {
        labels: ["Arroz", "Fideos", "Aceites"],
        datasets: [{
            label: "Semana",
            data: [1000, 500, 300],
            backgroundColor: [
                '#BD63D2',
                '#D4A628',
                '#E97B87'
            ],
            borderWidth: 0
        }]
    },
    options: {
        layout: {
            Padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        responsive: true,
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 10,
                fontColor: 'white',
                fontSize: 15
            }
        }
    },
    tooltips: {
        cornerRadius: 10,
        caretSize: 10,
        xPadding: 16,
        yPadding: 10,
        backgroundColor: 'gray',
        titleFontStyle: 'normal',
        titleMarginBottom: 15,
    }
});