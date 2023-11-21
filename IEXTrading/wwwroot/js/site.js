function getChart(dates, prices, vols, avgprice, avgvol) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates.split(","),
            datasets: [{
                label: 'High Prices',
                yAxisID: 'H',
                data: prices.split(","),
                type: 'line',
                borderColor: 'rgba(0, 103, 71, 1)',
                backgroundColor: 'rgba(0, 103, 71, 0.1)',
                lineTension: 0
            },
            {
                label: 'Volumes (Mn)',
                data: vols.split(","),
                borderColor: 'rgba(0, 0, 250, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    id: 'H',
                    type: 'linear',
                    position: 'left',
                }]
            },
            annotation: {
                drawTime: 'afterDatasetsDraw',
                annotations: [
                    {
                        id: 'highprice',
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'H',
                        value: avgprice,
                        borderColor: 'green',
                        borderWidth: 1,
                        label: {
                            backgroundColor: "green",
                            content: "Mean: $" + avgprice,
                            enabled: true
                        }
                    },
                    {
                        id: 'volume',
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'H',
                        value: avgvol,
                        borderColor: 'blue',
                        borderWidth: 1,
                        label: {
                            backgroundColor: "blue",
                            content: "Mean Volume: " + avgvol + "(Mn)",
                            enabled: true
                        }
                    }]
            }
        }
    });
}

function alertDbSave(success) {
    if (success === 1) {
        alert("Data saved successfully");
    }
}
