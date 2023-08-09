import { Chart } from "chart.js";

export async function fetchAndRenderChart() {
  const $grafica = document.querySelector("#grafica");
  const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];

  try {
    const response = await fetch("URL_DEL_ENDPOINT_PARA_OBTENER_DATOS");
    const data = await response.json();

    const datosVentas2023 = {
      label: "Ventas 2023",
      data: data.salesData,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderWidth: 0,
    };

    new Chart($grafica, {
      type: "bar",
      data: {
        labels: etiquetas,
        datasets: [datosVentas2023],
      },
      options: {
        responsive: true,
        animation: {
          duration: 1000,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              font: {
                family: "Arial",
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
