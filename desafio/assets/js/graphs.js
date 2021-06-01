
export const getPieChart = (ctx,data, title) => {

    const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: title
            }
          }
        },
    };

    new Chart(ctx, config);
}

export const getBarChart = (ctx,data) => {

    const config = {
        type: 'bar',
        data,
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    };

    new Chart(ctx, config);
}