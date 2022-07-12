<template>
  <VLineChart
    chartId="SummaryChart"
    :chartOptions="chartOptions"
    :chartData="chartData"
    :width="440"
    :height="239"
  />
</template>

<script>
import VLineChart from "@/components/VLineChart.vue";

export default {
  components: {
    VLineChart,
  },
  setup() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,

      elements: {
        point: {
          radius: 3,
        },
      },

      scales: {
        y: {
          ticks: {
            callback: (value) => {
              return value + "k";
            },
          },
          grid: {
            borderDash: [1, 4],
            drawBorder: false,
            borderColor: "#d5d5d6",
            lineWidth: 2,
          },
        },
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          align: "start",
          labels: {
            usePointStyle: true,
            boxWidth: 6,
            padding: 10,
          },
        },
        tooltip: {
          titleColor: "transparent",
          titleSpacing: 0,
          titleMarginBottom: -12,
          bodySpacing: 0,
          padding: 12,
          displayColors: false,
          callbacks: {
            //title: () => {
            //return "";
            //},
            label: (data) => {
              return "$" + data["formattedValue"] + "k";
            },
          },
        },
      },
    };

    const chartData = {
      // Represents day of the month
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      datasets: [
        {
          label: "This Month",
          data: [
            0, 2, 5, 7, 9, 11, 13, 15, 14, 15, 16, 17, 18, 20, 21, 22, 21, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 28, 26,
          ],
          borderColor: "#7445fb",
          backgroundColor: "#7445fb",
          pointRadius: 0.0000000001,
          pointHitRadius: 5,
          pointHoverBorderColor: "#7445fb",
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "#fff",
        },
        {
          label: "Last Month",
          data: [
            0, 5, 10, 15, 20, 23, 22.5, 22, 21.5, 21, 20.5, 20, 19.5, 18, 18,
            18, 17, 16.5, 16, 15, 15, 15.5, 16, 17, 18, 17, 18, 19, 20, 21, 22,
          ],
          borderColor: "#d5d5d6",
          backgroundColor: "#d5d5d6",
          pointRadius: 0.0000000001,
          pointHitRadius: 5,
          borderDash: [5, 2],
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointHoverBackgroundColor: "#fff",
        },
      ],
    };

    return { chartOptions, chartData };
  },
};
</script>
