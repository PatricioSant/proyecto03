const $grafica = document.querySelector("#grafica");
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];
const datosVentas2023 = {
  label: "Ventas 2023",
  data: [5000, 1500, 8000, 5102],
  backgroundColor: "rgba(75, 192, 192, 0.6)",
  borderWidth: 0, // Elimina el borde
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
